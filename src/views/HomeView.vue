<script setup>
import { App } from '../components/js/App'
//import { ARButton } from 'three/addons/webxr/ARButton.js'

document.addEventListener("DOMContentLoaded", function () {
  const app = new App();
  window.app = app;
});
</script>

<template>
  <div>
    <!--<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="@/assets/ar-shop/logo-nav.jpg" /> Furniture.com</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Basket</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Support</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->

    <!-- Page Content -->
    <div class="container">

      <div class="row mb-3">

        <div class="col-12 col-md-3 col-lg-3 mb-3">
          <a class="navbar-brand" href="#"><img src="../assets/logo_mfinternational_branco.webp" /></a>
          <h1 class="my-4">Lareiras</h1>
          <div class="list-group">
            <a href="#canto1" class="list-group-item">Canto</a>
            <a href="#exposta1" class="list-group-item">Centrais</a>
            <a href="#embutida1" class="list-group-item">Embutidas</a>
            <a href="#suspensa1" class="list-group-item">Suspensas</a>
          </div>

        </div>
        <!-- /.col-lg-3 -->

        <div class="col-12 col-md-9 col-lg-9">

          <!--<div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img class="d-block img-fluid" src="/img/products/altezza_embutida.webp" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block img-fluid" src="/img/products/altezza_embutida.webp" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block img-fluid" src="/img/products/altezza_embutida.webp" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>  -->

          <div class="row">

            <div class="col-6 col-lg-4 col-md-4 mb-4">
              <div id="canto1" class="card h-100">
                <a href="#"><img class="card-img-top" src="/img/products/delicatta_dicanto.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Delicatta di Canto
                  </h5>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  <button class="ar-button" onclick="window.app.showChair(1);"><i
                      class="bi bi-images icons"></i></button>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-4 col-md-4 mb-4">
              <div id="canto2" class="card h-100">
                <a href="#"><img class="card-img-top" src="/img/products/forza_dicanto.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Forza di Canto
                  </h5>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  <button class="ar-button" onclick="window.app.showChair(2);"><i
                      class="bi bi-images icons"></i></button>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-4 col-md-4 mb-4">
              <div id="exposta1" class="card h-100">
                <a href="#"><img class="card-img-top" src="/img/products/duo_exposta.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Duo Exposta
                  </h5>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  <button class="ar-button" onclick="window.app.showChair(3);"><i
                      class="bi bi-images icons"></i></button>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-4 col-md-4 mb-4">
              <div id="exposta2" class="card h-100">
                <a href="#"><img class="card-img-top" src="/img/products/prime_exposta.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Prime Exposta
                  </h5>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  <button class="ar-button" onclick="window.app.showChair(4);"><i
                      class="bi bi-images icons"></i></button>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-4 col-md-4 mb-4">
              <div id="embutida1" class="card h-100">
                <a href="#"><img class="card-img-top" src="/img/products/adatto_embutida.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Altezza Embutida
                  </h5>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  <button class="ar-button" onclick="window.app.showChair(5);"><i
                      class="bi bi-images icons"></i></button>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-4 col-md-4 mb-4">
              <div id="embutida2" class="card h-100">
                <a href="#"><img class="card-img-top" src="/img/products/altezza_embutida.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Altezza Embutida
                  </h5>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  <button class="ar-button" onclick="window.app.showChair(6);"><i
                      class="bi bi-images icons"></i></button>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-4 col-md-4 mb-4">
              <div id="embutida3" class="card h-100">
                <a href="#"><img class="card-img-top" src="/img/products/duo_embutida.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    Duo Embutida
                  </h5>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  <button class="ar-button" onclick="window.app.showChair(7);"><i
                      class="bi bi-images icons"></i></button>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-4 col-md-4 mb-4">
              <div id="suspensa1" class="card h-100">
                <a href="#"><img class="card-img-top" src="/img/products/mf360_suspensa.webp" alt=""></a>
                <div class="card-body">
                  <h5 class="card-title">
                    MF360 Suspensa
                  </h5>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  <button class="ar-button" onclick="window.app.showChair(8);"><i
                      class="bi bi-images icons"></i></button>
                </div>
              </div>
            </div>

          </div>
          <!-- /.row -->

        </div>
        <!-- /.col-lg-9 -->

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->

    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Ibiama 2024</p>
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>

<style scoped>
.icons {
  color: brown;
}
</style>
