<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="row col-12 mt-3 ms-1">
    <div class="col-12 col-md-4 col-lg-4">
      <header>
        <img alt="MF logo" class="logo" src="@/assets/logo_mf.svg" width="125" height="125" />

        <div class="wrapper">
          <h1 class="text-center">Lareiras</h1>
        </div>
      </header>
    </div>
    <div class="col-12 col-md-8 col-lg-8">
      <RouterView />
    </div>
  </div>
  <!-- Footer -->
  <footer class="mt-4 py-4 bg-dark">
    <div class="">
      <p class="m-0 text-center text-white">Copyright &copy; Ibiama 2024</p>
    </div>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>
