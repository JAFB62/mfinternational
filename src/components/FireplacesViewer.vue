<script setup>

import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Desserializar o modelo
let selectedModel;

try {
    selectedModel = JSON.parse(route.query.ids);  // Converte a string JSON para objeto
} catch (e) {
    console.error("Erro ao desserializar o modelo", e);
    router.push('/');  // Redireciona se houver um erro
}

// Função para voltar à página inicial
function goHome() {
    router.push('/');
}

</script>

<template>
    <div class="viewer-container">
        {{ selectedModel.value }}
        <!-- Componente de visualização do modelo -->
        <model-viewer ref="viewer" :src="selectedModel.glb" ar ar-scale="fixed" :ar-placement="selectedModel.place"
            camera-controls touch-action="none" alt="Modelo 3D" shadow-intensity="1"
            skybox-image="img/hdr/small_room_1k.hdr" skybox-height="2.5m" max-camera-orbit="auto 90deg auto"
            :ios-src="selectedModel.usdz" xr-environment style="background-color: unset;">
            <div class="annotation">{{ selectedModel.name }}</div>
            <!-- Botão para retornar à página inicial -->
            <button @click="goHome" class="back-button">Voltar</button>
        </model-viewer>
    </div>

</template>

<style scoped>
.viewer-container {
    position: relative;
    width: 100%;
    height: 100vh;
    /* Tela cheia */
}

.back-button {
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
    z-index: 1;
    /* Coloca o botão acima do modelo */
}

.back-button:hover {
    background-color: #870e0e;
}
</style>