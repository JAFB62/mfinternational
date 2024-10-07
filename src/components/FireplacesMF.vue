<script setup>
import '@google/model-viewer';
import { ref, computed } from 'vue';
import fireplaces from './js/Fireplaces';

// Lista de modelos com diferentes arquivos GLB e USDZ
const models = ref(fireplaces);

// Modelo selecionado inicialmente
const selectedModel = ref(models.value[0]);

// Categoria selecionada pelo usuário
const selectedCategory = ref('');

// Computed property para filtrar modelos pela categoria selecionada
const filteredModels = computed(() => {
    // Se nenhuma categoria estiver selecionada, retorna todos os modelos
    if (!selectedCategory.value) return models.value;
    // Filtra os modelos com base na categoria selecionada
    return models.value.filter(models => models.categ === selectedCategory.value);
});

// Função para trocar o modelo quando o usuário selecionar
function selectModel(model) {
    selectedModel.value = model;
    exitXrSession()
}

// Função para selecionar uma categoria
function selectCategory(category) {
    selectedCategory.value = category;
}

// Função para encerrar a sessão XR (AR)
async function exitXrSession() {
    const viewer = selectedModel.value;

    if (viewer.isInAR) {
        await viewer.exitAR();  // Encerra a sessão AR
    }
}
</script>

<template>

    <div class="mx-3">
        <!-- Menu para selecionar categorias -->
        <div class="container mb-3">
            <div class="row col-12 mb-2">
                <div class="col-4 d-grid">
                    <button @click="selectCategory('')" class="btn btn-outline-dark" type="button">Todas</button>
                </div>
                <div class="col-4 d-grid">
                    <button @click="selectCategory('Canto')" class="btn btn-outline-dark" type="button">Canto</button>
                </div>
                <div class="col-4 d-grid">
                    <button @click="selectCategory('Central')" class="btn btn-outline-dark"
                        type="button">Centrais</button>
                </div>
            </div>
            <div class="row col-12 mb-2">
                <div class="col-4 d-grid">
                    <button @click="selectCategory('Embutida')" class="btn btn-outline-dark"
                        type="button">Embutidas</button>
                </div>
                <div class="col-4 d-grid">
                    <button @click="selectCategory('Exposta')" class="btn btn-outline-dark"
                        type="button">Expostas</button>
                </div>
                <div class="col-4 d-grid">
                    <button @click="selectCategory('Suspensa')" class="btn btn-outline-dark"
                        type="button">Suspensas</button>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row mb-3">
                <!-- Componente de visualização do modelo -->
                <model-viewer ref="viewer" :src="selectedModel.glb" ar ar-scale="fixed"
                    :ar-placement="selectedModel.place" camera-controls touch-action="none" alt="Modelo 3D"
                    shadow-intensity="1" skybox-image="img/hdr/small_room_1k.hdr" skybox-height="2.5m" exposure="1"
                    max-camera-orbit="auto 90deg auto" :ios-src="selectedModel.usdz" xr-environment
                    style="background-color: unset;" loading="lazy">
                    <div class="annotation">{{ selectedModel.name }}</div>
                </model-viewer>
            </div>
        </div>
        <hr>
        <h4 class="text-center">
            {{ selectedCategory }}
        </h4>
        <hr>
        <!-- Menu para selecionar modelos -->
        <div class="container">
            <div class="col-12 model-selector">

                <button v-for="model in filteredModels" :key="model.id" @click="selectModel(model)"
                    :class="{ selected: model.id === selectedModel.id }" class="cardbutton">
                    <img class="card-img-top mt-2" :src="`${model.poster}`" alt="" loading="lazy">
                    <div class="">
                        <small>{{ model.name }}</small>
                    </div>

                </button>
            </div>
        </div>
    </div>

</template>

<style>
.model-selector button {
    color: rgb(51, 36, 29);
}

.model-selector button.selected {
    background-color: red;
    color: white;
}

.cardbutton {
    width: 32%;
    display: inline-block;
    margin: 2px;
    border-color: rgb(194, 189, 189);
    border-radius: 5%;
}

/* This keeps child nodes hidden while the element loads */
:not(:defined)>* {
    display: none;
}

model-viewer {
    background-color: #eee;
    overflow-x: hidden;
}

#ar-button {
    background-image: url(../assets/ic_view_in_ar_new_googblue_48dp.png);
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 12px 50%;
    background-color: #a71f1f;
    position: absolute;
    color: #4285f4;
}

#ar-button:active {
    background-color: #E8EAED;
}

#ar-button:focus {
    outline: none;
}

#ar-button:focus-visible {
    outline: 1px solid #4285f4;
}

@keyframes circle {
    from {
        transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg);
    }

    to {
        transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg);
    }
}

@keyframes elongate {
    from {
        transform: translateX(100px);
    }

    to {
        transform: translateX(-100px);
    }
}

model-viewer>#ar-prompt {
    position: absolute;
    left: 50%;
    bottom: 175px;
    animation: elongate 2s infinite ease-in-out alternate;
    display: none;
}

model-viewer[ar-status="session-started"]>#ar-prompt {
    display: block;
}

model-viewer>#ar-prompt>img {
    animation: circle 4s linear infinite;
}

model-viewer>#ar-failure {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 175px;
    display: none;
}

model-viewer[ar-tracking="not-tracking"]>#ar-failure {
    display: block;
}

.annotation {
    background-color: #dbc7c7;
    position: absolute;
    transform: translate(10px, 10px);
    border-radius: 10px;
    padding: 10px;
}

.exit-button {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: #a71f1f;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10;
    /* Coloca o botão acima de outros elementos no model-viewer */
}

.exit-button:hover {
    background-color: #870e0e;
}
</style>
