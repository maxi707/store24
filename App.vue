<template>
  <!-- https://vuejs.org/guide/essentials/forms#value-bindings -->
  <header class="border-bottom">
    <div class="container">
      <nav class="navbar navbar-expand-lg rounded" aria-label="">
        <div class="container-fluid">
          <router-link class="navbar-brand col-lg-3 me-0" to="/">
            <img src="./assets/cyber.png" alt="logo">
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse d-lg-flex" id="navbar1">
            <div class="navbar-nav col-lg-9 justify-content-lg-center">
              <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <SearchProducts />
              </form>
            </div>
            <div class="d-lg-flex col-lg-3 justify-content-lg-end">
              <router-link class="nav-link me-4" to="/favorite">
                <img src="./assets/heart.png" alt="favorite">
              </router-link>
              <router-link class="nav-link" to="/cart">
                <img src="./assets/cart.png" alt="cart">
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>

    <!-- <nav>
      <router-link class="nav-btn" to="/">Home</router-link> |
      <router-link class="nav-btn" to="/category/1">Category 1</router-link> |
      <router-link class="nav-btn" to="/product/1">Product 1</router-link>
    </nav> -->

  <router-view />

  <div class="footer">
  <div class="container">
    <footer class="py-5">
      <div class="row">
        <div class="col-md-4 offset-md-1 mb-3">
          <form>
            <img class="footer-logo" src="./assets/cyber-dark.png" alt="logo">
            <p class="footer-info">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
            
          </form>
        </div>
        <div class="col-6 col-md-3 offset-md-1 mb-3">
          <h5>Services</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-alink">Bonus program</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-alink">Gift cards</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-alink">Credit and payment</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-alink">Service contracts</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-alink">Non-cash account</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-alink">Payment</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-3 mb-3">
          <h5>Assistance to the buyer</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-alink">Find an order</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-alink">Terms of delivery</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-alink">Exchange and return of goods</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-alink">Guarantee</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-alink">Frequently asked questions</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-alink">Terms of use of the site</a></li>
          </ul>
        </div>

      </div>

      <div class="row">
        <div class="col-md-5 offset-md-1 py-4 my-4">
          <img class="" src="./assets/networks.png" alt="logo">
        </div>

      </div>
    </footer>
  </div>
  </div>
</template>

<script>
import SearchProducts from "@/components/SearchProducts.vue";
export default {
  components: {SearchProducts},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Abel&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

.footer {
  font-family: 'Abel', sans-serif;
  background: black;
  color: white;
}

.footer-info {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 170.5%;
}

.footer-logo {
  width: 74px;
  margin-bottom: 1.5em;
}

.text-alink {
  color: #cfcfcf !important;
}
</style>
