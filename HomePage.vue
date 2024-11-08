<template>
  <div class="container-fluid gx-0 header">
    <div class="container sb1">
      <div>
        <div class="pro-beyond">Pro.Beyond.</div>
        <div class="iphone-14-pro">IPhone 14 Pro</div>
        <div class="slogan">Created to change everything for the better. For everyone</div>
        <button type="button" class="btn btn-outline-light ff-abeezee btn-lg mt-4" @click="$router.push(`/category/2`)">Shop Now</button>
      </div>
      <img src="../assets/1.png" alt="">
    </div>
  </div>
  <div class="container-fluid gx-0">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col sb1">
            <img src="../assets/2.png" alt="">
            <div>
              <div class="playstation">Playstation 5</div>
              <div class="fc1">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col bg-grey1 sb1">
            <img src="../assets/3.png" alt="">
            <div>
              <div class="airpods">Apple AirPods Max</div>
              <div class="fc1">Computational audio. Listen, it's powerful</div>
            </div>
          </div>
          <div class="col sb1 bg-grey3 gx-0 pe-2">
            <img src="../assets/4.png" alt="">
            <div>
              <div class="vision">Apple Vision Pro</div>
              <div class="fc1">An immersive way to experience entertainment</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col bg-grey1 sb1">
        <div class="ps-5">
          <div class="macbook">Macbook Air</div>
          <div class="fc1">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</div>
          <button type="button" @click="$router.push(`/category/3`)" class="btn btn-outline-dark btn-lg ff-abeezee mt-4">Shop Now</button>
        </div>
        <img src="../assets/5.png" alt="">
      </div>
    </div>
  </div>

  <div class="container-fluid bg-grey2">
    <div class="container py-5">
      <h3 class="browse my-5">Browse By Category</h3>
      <div class="category mb-5">
        <div class="bg-grey1 card1" @click="$router.push(`/category/2`)">
          <img src="../assets/c1.png" alt="">
          <div class="mt-2">Phones</div>
        </div>
        <div class="bg-grey1 card1" @click="$router.push(`/category/5`)">
          <img src="../assets/c2.png" alt="">
          <div class="mt-2">Smart Watches</div>
        </div>
        <div class="bg-grey1 card1" @click="$router.push(`/category/6`)">
          <img src="../assets/c3.png" alt="">
          <div class="mt-2">Cameras</div>
        </div>
        <div class="bg-grey1 card1" @click="$router.push(`/category/1`)">
          <img src="../assets/c4.png" alt="">
          <div class="mt-2">Headphones</div>
        </div>
        <div class="bg-grey1 card1" @click="$router.push(`/category/3`)">
          <img src="../assets/c5.png" alt="">
          <div class="mt-2">Computers</div>
        </div>
        <div class="bg-grey1 card1" @click="$router.push(`/category/7`)">
          <img src="../assets/c6.png" alt="">
          <div class="mt-2">Gaming</div>
        </div>
      </div>
    </div>
  </div>


  <div class="container d-flex mt-5">
    <div class="new-arrival me-3">New Arrival</div>
    <div class="bestseller me-3">Bestseller</div>
    <div class="bestseller">Featured Products</div>
  </div>
  <div class="container d-flex justify-content-center mt-2">
    <!-- <h2></h2> -->
    <ProductList class="" :products="arrival" />
  </div>

  <div class="container-fluid mt-5 pt-3">
    <div class="row align-items-start">
      <div class="col d-flex flex-column py-5 px-4">
        <img class="align-self-center" src="../assets/6.png" alt="">
        <div class="popular mt-5">Popular Products</div>
        <div class="popular-info mt-3">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</div>
        <button type="button" @click="$router.push(`/category/1`)" class="btn btn-outline-dark btn-lg ff-abeezee mt-3 w-50">Shop Now</button>
      </div>
      <div class="col d-flex flex-column bg-grey-f9 py-5 px-4">
        <img class="align-self-center" src="../assets/7.png" alt="">
        <div class="popular mt-5">Ipad Pro</div>
        <div class="popular-info mt-3">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</div>
        <button type="button" @click="$router.push(`/category/4`)" class="btn btn-outline-dark btn-lg ff-abeezee mt-3 w-50">Shop Now</button>
      </div>
      <div class="col d-flex flex-column bg-grey-ea py-5 px-4">
        <img class="align-self-center" src="../assets/8.png" alt="">
        <div class="popular mt-5">Samsung Galaxy</div>
        <div class="popular-info mt-3">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</div>
        <button type="button" @click="$router.push(`/category/8`)" class="btn btn-outline-dark btn-lg ff-abeezee mt-3 w-50">Shop Now</button>
      </div>
      <div class="col d-flex flex-column bg-grey-2c py-5 px-4">
        <img class="align-self-center" src="../assets/9.png" alt="">
        <div class="popular mt-5 text-white">Macbook Pro</div>
        <div class="popular-info mt-3">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</div>
        <button type="button" @click="$router.push(`/category/3`)" class="btn btn-outline-light btn-lg ff-abeezee mt-3 w-50">Shop Now</button>
      </div>
    </div>
  </div>

  <div class="container mt-5 pt-3">
    <h2 class="discounts">Discounts up to -50%</h2>
  </div>

  <div class="container d-flex justify-content-center mt-3 pb-5">
    <ProductList class="" :products="discount" />
  </div>

  <div class="container-fluid bg-dark1 sb1 gx-0 mt-5">
    <img src="../assets/10.png" alt="">
    <div>
      <div class="big-summer">Big Summer <span class="sale">Sale</span></div>
      <div class="big-summer-info">Commodo fames vitae vitae leo mauris in. Eu consequat.</div>
      <button type="button" class="btn btn-outline-light ff-abeezee btn-lg mt-4" @click="$router.push(`/category/2`)">Shop Now</button>
    </div>
    <img src="../assets/11.png" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/ProductList.vue";
import axios from "axios";
export default {
  components: {
    ProductList
  },
  data() {
    return {
      products: [],
      loaded: false,
    }
  },
  computed: {
    arrival() {
      if (this.products.length < 8) {
        return this.products
      }
      const arr = []
      for (let index = 0; index < 8; index++) {
        const rnd = Math.floor(Math.random() * this.products.length)
        arr.push(this.products[rnd])
      }
      return arr
    },
    discount() {
      if (this.products.length < 4) {
        return this.products
      }
      const arr = this.products.filter(product => product.discount_price > 0)
      arr.length = 4
      return arr
    }
  },
  methods: {
    async fetchProducts() {
      try {
        this.loaded = false
        const out = await axios.get('http://localhost:1452/api/products')
        this.products = out.data
      } catch (e) {
        console.log(e)
      } finally {
        this.loaded = true
      }
    },
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>

<style>
.header {
  background-color: #211c24;
}

.pro-beyond{
  font-family: 'ABeeZee', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  color: #FFFFFF;
  opacity: 0.4;
}

.iphone-14-pro{
  font-family: 'Abel', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 96px;
  color: #FFFFFF;
}

.slogan {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  color: #919191;
}

.ff-abeezee {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px !important;
}
.bg-grey1 {
  background-color: #ededed;
}

.bg-grey2 {
  background-color: #fafafa;
}

.sb1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.playstation {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 49px;
  color: #000000;
}

.fc1 {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  color: #919191;
}

.bg-grey3 {
  background-color: #353535;
}

.airpods {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 29px;
  color: #000000;
}

.vision {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 29px;
  color: #FFFFFF;
}

.macbook {
  font-family: 'Abel', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  color: #000000;
}

.card1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 160px;
  height: 125px;
  border-radius: 1em;
  cursor: pointer;
}

.category {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
}

.bg-dark1 {
  background-image: linear-gradient(140deg, #2e2e2e 50%, #0d0d0d 75%);
}

.big-summer {
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  color: #FFFFFF;
}

.sale {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
}

.big-summer-info{
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #787878;
}

.popular {
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 33px;
  color: #000000;
}

.popular-info {
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  color: #919191;
}

.bg-grey-f9 {
  background-color: #f9f9f9;
}

.bg-grey-ea {
  background-color: #eaeaea;
}

.bg-grey-2c {
  background-color: #2c2c2c;
}

.browse {
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
}

.new-arrival {
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  /* line-height: 32px; */
  color: #000000;
  /* text-decoration: underline; */
}

.bestseller {
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  color: #8B8B8B;
}

.discounts {
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
}
</style>
