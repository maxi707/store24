<template>
  <div v-if="product.name">
  <div class="container mt-5 pt-5">
    <div class="row">
      <div class="col-lg-1">
        <div v-for="(val,ind) in product.images" :key="ind">
          <img class="w-100 mb-3" :src="`http://localhost:1452/${val}`" alt="">
        </div>
      </div>
      <div class="col-lg-5">
        <img class="product-image" :src="`http://localhost:1452/${product.images[0]}`" alt="">
      </div>
      <div class="col-lg-6 mb-5 pb-4">
        <h1 class="title">{{ product.name }}</h1>
        <h2 class="price d-inline me-3">{{ priceMain }}</h2>
        <h3 class="price-second d-inline">{{ priceSecond }}</h3>
        <div class="characteristics-info mt-3">
          <div class="characteristic-info" v-for="c in product.characteristics" :key="c"><div class="characteristic-title">{{ c.characteristic }}</div><div>{{ c.value }}</div></div>
        </div>
        <p class="description-info pt-4 pb-3">Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...</p>
        <div class="row">
          <div class="col">
            <!-- <BaseButton class="product-buy btn-outline-dark py-3" @click="$store.dispatch('favorites/toggleFavorite',product)">Add to Wishlist</BaseButton> -->
            <button type="button" class="btn btn-outline-dark py-3 btna" @click="$store.dispatch('favorites/toggleFavorite',product)">Add to Wishlist</button>
          </div>
          <div class="col d-flex align-items-end flex-column">
            <BaseButton class="product-buy py-3" @click="$store.dispatch('cart/add',{product:product,count:1})">Add to Card</BaseButton>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col d-flex">
            <div class="info-img me-3">
              <img src="../assets/delivery.png" alt="delivery">
            </div>
            <div class="info">
              <div>Free Delivery</div>
              <div class="info-text">1-2 day</div>
            </div>
          </div>
          <div class="col d-flex">
            <div class="info-img me-3">
              <img src="../assets/stock.png" alt="stock">
            </div>
            <div class="info">
              <div>In Stock</div>
              <div class="info-text">Today</div>
            </div>
          </div>
          <div class="col d-flex">
            <div class="info-img me-3">
              <img src="../assets/guaranteed.png" alt="guaranteed">
            </div>
            <div class="info">
              <div>Guaranteed</div>
              <div class="info-text">{{ product.guarantee }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid characteristic-bg py-5">
    <div class="container my-5">
    <div class="p-5 text-center rounded-3 bg-white">
      <h1 class="details">Details</h1>
      <p class="description">Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
      <div>
        <div class="characteristic border-bottom py-2 my-3" v-for="c in product.characteristics" :key="c"><div>{{ c.characteristic }}</div><div>{{ c.value }}</div>
      </div>
      </div>
    </div>
  </div>
</div>

  <div class="container mt-5 pt-4">
    <div class="rating-cnt">
      <div class="rating-score">{{ product.rating }}</div>
      <div class="rating-reviews mb-2">of {{ product.count_review }} reviews</div>
      <svg style="display:none;">
        <defs>
          <symbol id="fivestars">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd"/>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd" transform="translate(24)"/>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd" transform="translate(48)"/>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd" transform="translate(72)"/>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd"  transform="translate(96)"/>
          </symbol>
        </defs>
      </svg>
      <div class="rating">
        <progress class="rating-bg" :value="product.rating" max="5"></progress>
        <svg><use xlink:href="#fivestars"/></svg>
      </div>
    </div>
  </div>

  <div class="container mt-5 pt-5">
    <h2 class="details">Related Products</h2>
  </div>
  <ProductList class="mb-5 pb-5" :products="arrival" />

  <div>
    <div v-if="loaded">
      <div class="about">
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>

</div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import axios from "axios";

export default {
  components: {
    ProductList
  },
  data() {
    return {
      product: {images:[""]},
      loaded: false,
      products: [],
    }
  },
  methods: {
    async fetch() {
      try {
        this.loaded = false
        const out = await axios.get('http://localhost:1452/api/products/'+this.$route.params.id)
        this.product = out.data
      } catch (e) {
        console.log(e)
      } finally {
        this.loaded = true
      }
    },
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
    this.fetch()
  },
  computed: {
    priceMain() {
      return this.product.discount_price ? this.product.discount_price : this.product.price
    },
    priceSecond() {
      return this.product.discount_price ? this.product.price : ''
    },
    arrival() {
      if (this.products.length < 4) {
        return this.products
      }
      const arr = []
      for (let index = 0; index < 4; index++) {
        const rnd = Math.floor(Math.random() * this.products.length)
        arr.push(this.products[rnd])
      }
      return arr
    },
  },
  // https://router.vuejs.org/guide/essentials/dynamic-matching
  created() {
    this.$watch(
      () => this.$route.params.id,
      () => {
        this.fetch()
      }
    )
  },
}
</script>

<style scoped>
.title {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  color: #000000;
}

.price {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #000000;
}

.price-second {
  font-family: 'Abel', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #A0A0A0;
  text-decoration: line-through;
}

.product-image {
  width: 100%;
}

.details {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
}

/* .characteristics {
  display: flex;
  justify-content: space-between;
  align-items: c;
} */

.characteristic{
  /* font-family: sans-serif; */
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.description {
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  color: #9D9D9D;
}

.description-info{
  font-family: 'Abel', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #6C6C6C;
}

.product-buy {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
}

.info-img {
  width: 55px;
  height: 55px;
  border-radius: 10px;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info {
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  color: #717171;
}
.info-text {
  color: #000000;
}

.characteristics-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}

.characteristic-info {
  background: #f3f3f3;
  width: 170px;
  height: 70px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.characteristic-title{
  color: #A7A7A7;
}

.characteristic-bg{
  background-color: #fafafa;
}

.rating-cnt{
  background-color: #fafafa;
  width: 180px;
  height: 180px;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.rating-score {
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 56px;
  color: #000000;
}

.rating-reviews{
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
  opacity: 0.3;
}

/* Star Rating */
* {
  box-sizing: border-box;
}

.rating {
  width: 120px;
  height: 24px;
  position: relative;
  background-color: gray;
}

.rating progress.rating-bg {
  -webkit-appearance: none;
  -moz-appearence: none;
  appearance: none;
  border: none;
  display: inline-block;
  height: 24px;
  width: 100%;
  color: orange;
}

.rating progress.rating-bg::-webkit-progress-value {
  background-color: orange;
}

.rating progress.rating-bg::-moz-progress-bar {
  background-color: orange;
}

.rating svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.btna {
  padding: 9px 58px;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
}
</style>