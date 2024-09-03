import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'

class App {
  constructor() {
    const container = document.createElement('div')
    document.body.appendChild(container)

    this.assetsPath = 'img/models/fireplaces/'

    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20)
    this.camera.position.set(0, 0, 0)

    this.scene = new THREE.Scene()

    this.scene.add(new THREE.HemisphereLight(0x606060, 0x404040))

    const light = new THREE.DirectionalLight(0xffffff)
    light.position.set(1, 1, 1).normalize()
    this.scene.add(light)

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(this.renderer.domElement)
    this.setEnvironment()

    this.reticle = new THREE.Mesh(
      new THREE.RingGeometry(0.12, 0.2, 4).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )

    this.reticle.matrixAutoUpdate = false
    this.reticle.visible = false
    this.scene.add(this.reticle)

    // Variáveis para controle de rotação
    this.isRotating = false
    this.previousControllerX = 0
    this.rotationSpeed = 4.0 // Ajuste a sensibilidade da rotação

    this.setupXR()

    window.addEventListener('resize', this.resize.bind(this))

    // Adicionando pointer events
    this.renderer.domElement.addEventListener('pointerdown', this.onPointerDown.bind(this))
    this.renderer.domElement.addEventListener('pointermove', this.onPointerMove.bind(this))
    this.renderer.domElement.addEventListener('pointerup', this.onPointerUp.bind(this))
  }

  setupXR() {
    this.renderer.xr.enabled = true

    if ('xr' in navigator) {
      navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        if (supported) {
          const collection = document.getElementsByClassName('ar-button')
          ;[...collection].forEach((el) => {
            el.style.display = 'block'
          })
        }
      })
    }

    const self = this

    this.hitTestSourceRequested = false
    this.hitTestSource = null

    function onSelect() {
      if (!self.chair) return

      if (self.reticle.visible) {
        self.chair.position.setFromMatrixPosition(self.reticle.matrix)
        self.chair.visible = true
      }
    }

    // Eventos do controlador para rotação
    this.controller = this.renderer.xr.getController(0)
    this.controller.addEventListener('select', onSelect)
    this.controller.addEventListener('selectstart', this.onSelectStart.bind(this))
    this.controller.addEventListener('selectend', this.onSelectEnd.bind(this))
    this.scene.add(this.controller)
  }

  onPointerDown(event) {
    // Inicia a rotação
    this.isRotating = true
    this.previousControllerX = event.clientX
  }

  onPointerMove(event) {
    if (this.isRotating && this.chair) {
      const deltaX = event.clientX - this.previousControllerX

      // Aplica a rotação ao objeto
      this.chair.rotation.y += deltaX * this.rotationSpeed

      // Atualiza a posição anterior
      this.previousControllerX = event.clientX
    }
  }

  onPointerUp() {
    // Termina a rotação
    this.isRotating = false
  }

  onSelectStart() {
    // Inicia a rotação
    this.isRotating = true
    this.previousControllerX = this.controller.position.x
  }

  onSelectEnd() {
    // Termina a rotação
    this.isRotating = false
  }

  rotateObject() {
    if (this.isRotating && this.chair) {
      const currentControllerX = this.controller.position.x
      const deltaX = currentControllerX - this.previousControllerX

      // Aplica a rotação ao objeto
      this.chair.rotation.y += deltaX * this.rotationSpeed

      // Atualiza a posição anterior
      this.previousControllerX = currentControllerX
    }
  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  setEnvironment() {
    const loader = new RGBELoader().setDataType(THREE.FloatType)
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer)
    pmremGenerator.compileEquirectangularShader()

    const self = this

    loader.load(
      'img/hdr/venice_sunset_1k.hdr',
      (texture) => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture
        pmremGenerator.dispose()

        self.scene.environment = envMap
      },
      undefined,
      (err) => {
        console.error(err)
      }
    )
  }

  showChair(id) {
    this.initAR()

    const loader = new GLTFLoader().setPath(this.assetsPath)
    const self = this

    loader.load(`fireplace${id}.glb`, (gltf) => {
      self.scene.add(gltf.scene)
      self.chair = gltf.scene

      self.chair.visible = false

      self.renderer.setAnimationLoop(self.render.bind(self))
    })
  }

  initAR() {
    let currentSession = null
    const self = this

    const sessionInit = { requiredFeatures: ['hit-test'] }

    function onSessionStarted(session) {
      session.addEventListener('end', onSessionEnded)

      self.renderer.xr.setReferenceSpaceType('local')
      self.renderer.xr.setSession(session)

      currentSession = session
    }

    function onSessionEnded() {
      currentSession.removeEventListener('end', onSessionEnded)

      currentSession = null

      if (self.chair !== null) {
        self.scene.remove(self.chair)
        self.chair = null
      }

      self.renderer.setAnimationLoop(null)
    }

    if (currentSession === null) {
      navigator.xr.requestSession('immersive-ar', sessionInit).then(onSessionStarted)
    } else {
      currentSession.end()
    }
  }

  requestHitTestSource() {
    const self = this

    const session = this.renderer.xr.getSession()

    session.requestReferenceSpace('viewer').then(function (referenceSpace) {
      session.requestHitTestSource({ space: referenceSpace }).then(function (source) {
        self.hitTestSource = source
      })
    })

    session.addEventListener('end', function () {
      self.hitTestSourceRequested = false
      self.hitTestSource = null
      self.referenceSpace = null
    })

    this.hitTestSourceRequested = true
  }

  getHitTestResults(frame) {
    const hitTestResults = frame.getHitTestResults(this.hitTestSource)

    if (hitTestResults.length) {
      const referenceSpace = this.renderer.xr.getReferenceSpace()
      const hit = hitTestResults[0]
      const pose = hit.getPose(referenceSpace)

      this.reticle.visible = true
      this.reticle.matrix.fromArray(pose.transform.matrix)
    } else {
      this.reticle.visible = false
    }
  }

  render(timestamp, frame) {
    if (frame) {
      if (this.hitTestSourceRequested === false) this.requestHitTestSource()

      if (this.hitTestSource) this.getHitTestResults(frame)
    }

    // Aplicar a rotação do objeto durante o render
    this.rotateObject()

    this.renderer.render(this.scene, this.camera)
  }
}

export { App }
