<script setup>
import { App } from '../components/js/Apps'

document.addEventListener("DOMContentLoaded", function () {
  const app = new App();
  window.app = app;
})
</script>

<template>
  <div class="">
    <div class="container">
      <div class="row mb-3">

        <div class="col-12 col-md-3 col-lg-3 mb-3">
          <a class="navbar-brand" href="#"><img src="../assets/logo_mfinternational_branco.webp" /></a>
          <h1 class="my-4">Lareiras</h1>
          <div class="list-group">
            <a href="#canto" class="list-group-item">Canto</a>
            <a href="#centrais" class="list-group-item">Centrais</a>
            <a href="#embutidas" class="list-group-item">Embutidas</a>
            <a href="#suspensas" class="list-group-item">Suspensas</a>
          </div>
        </div>

        <div class="col-12 col-md-9 col-lg-9">
          <!-- Início das Lareiras de Canto -->
          <div class="col12 col-md-6 col-lg-6">
            <div class="row mt-2 mb-4 d-flex justify-content-between">
              <a class="btn btn-dark btn-block" id="canto">Lareiras de CANTO</a>
              <div class="col-6 col-lg-6 col-md-6">
                <div id="canto1" class="card h-100">
                  <a href="#"><img class="card-img-top" src="/img/products/delicatta_dicanto.webp" alt=""></a>
                  <div class="card-body">
                    <h5 class="card-title">
                      Delicatta di Canto
                    </h5>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn-danger float-end" onclick="window.app.showChair(1);">XR</button>
                  </div>
                </div>
              </div>

              <div class="col-6 col-lg-6 col-md-6">
                <div id="canto2" class="card h-100">
                  <a href="#"><img class="card-img-top" src="/img/products/forza_dicanto.webp" alt=""></a>
                  <div class="card-body">
                    <h5 class="card-title">
                      Forza di Canto
                    </h5>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn-danger float-end" onclick="window.app.showChair(2);">XR</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Final das Lareiras de Canto -->

          <!-- Início das Lareiras Centrais -->
          <div class="row mb-4">
            <a class="btn btn-dark btn-block mt-4" id="centrais">Lareiras CENTRAIS</a>
            <div class="col-6 col-lg-3 col-md-3">
              <div id="exposta1" class="card mb-1">
                <a href="#"><img class="card-img-top" src="/img/products/duo_exposta.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Duo Exposta
                  </h5>
                </div>
                <div class="card-footer">
                  <div class="">
                    <button class="btn btn-danger me-2 float-end" onclick="window.app.showChair(3);">XR</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-3 col-md-3">
              <div id="exposta2" class="card mb-1">
                <a href="#"><img class="card-img-top" src="/img/products/duo_exposta.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Duo Pro 4L
                  </h5>
                </div>
                <div class="card-footer">
                  <div class="">
                    <button class="btn btn-danger me-2 float-end" onclick="window.app.showChair(4);">XR</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-3 col-md-3">
              <div id="exposta3" class="card mb-1">
                <a href="#"><img class="card-img-top" src="/img/products/duo_exposta.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Duo Pro D
                  </h5>
                </div>
                <div class="card-footer">
                  <div class="">
                    <button class="btn btn-danger me-2 float-end" onclick="window.app.showChair(5);">XR</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-3 col-md-3">
              <div id="exposta4" class="card mb-1">
                <a href="#"><img class="card-img-top" src="/img/products/duo_exposta.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Duo Pro E
                  </h5>
                </div>
                <div class="card-footer">
                  <div class="">
                    <button class="btn btn-danger me-2 float-end" onclick="window.app.showChair(6);">XR</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-4 col-md-4">
              <div id="exposta5" class="card mb-1">
                <a href="#"><img class="card-img-top" src="/img/products/prime_exposta.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Duo Prime Exposta
                  </h5>
                </div>
                <div class="card-footer">
                  <button class="btn btn-danger me-2 float-end" onclick="window.app.showChair(7);">XR</button>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-4 col-md-4">
              <div id="exposta6" class="card mb-1">
                <a href="#"><img class="card-img-top" src="/img/products/prime_exposta.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Duo Wide
                  </h5>
                </div>
                <div class="card-footer">
                  <button class="btn btn-danger me-2 float-end" onclick="window.app.showChair(8);">XR</button>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-4 col-md-4">
              <div id="exposta7" class="card mb-1">
                <a href="#"><img class="card-img-top" src="/img/products/prime_exposta.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Duo 4L Exposta
                  </h5>
                </div>
                <div class="card-footer">
                  <button class="btn btn-danger me-2 float-end" onclick="window.app.showChair(9);">XR</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Final das Lareiras Centrais -->

          <!-- Início das Lareiras Embutidas -->
          <div class="row mb-4">
            <a class="btn btn-dark btn-block mt-4" id="embutidas">Lareiras EMBUTIDAS</a>
            <div class="col-6 col-lg-3 col-md-3">
              <div id="embutida1" class="card mb-1">
                <a href="#"><img class="card-img-top" src="/img/products/adatto_embutida.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Altezza Embutida
                  </h5>
                </div>
                <div class="card-footer">
                  <button class="btn btn-danger me-2 float-end" onclick="window.app.showChair(50);">XR</button>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-3 col-md-3">
              <div id="embutida2" class="card mb-1">
                <a href="#"><img class="card-img-top" src="/img/products/altezza_embutida.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Altezza Embutida
                  </h5>
                </div>
                <div class="card-footer">
                  <button class="btn btn-danger me-2 float-end" onclick="window.app.showChair(51);">XR</button>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-3 col-md-3">
              <div id="embutida3" class="card mb-1">
                <a href="#"><img class="card-img-top" src="/img/products/duo_embutida.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Duo Embutida
                  </h5>
                </div>
                <div class="card-footer">
                  <button class="btn btn-danger me-2 float-end" onclick="window.app.showFireplace(52);">XR</button>
                </div>
              </div>
            </div>
            <!-- Final das Lareiras Embutidas -->

            <!-- Início das Lareiras Suspensas -->
            <div class="row mb-4">
              <a class="btn btn-dark btn-block mt-4" id="suspensas">Lareiras SUSPENSAS</a>
              <div class="col-6 col-lg-4 col-md-4 mb-4">
                <div id="suspensa1" class="card mb-1">
                  <a href="#"><img class="card-img-top" src="/img/products/mf360_suspensa.webp" alt=""></a>
                  <div class="card-body">
                    <h5 class="card-title">
                      MF360 Suspensa
                    </h5>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn-danger me-2 float-end" onclick="window.app.showFireplace(70);">XR</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Final das Lareiras Embutidas -->

          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Ibiama 2024</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.icons {
  color: brown;
}
</style>
