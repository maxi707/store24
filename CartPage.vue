<template>
    <div class="container mt-5 pt-3">
    <div class="row">
        <div class="col-lg-6 mb-3">
          <h1 class="shopping-cart">Shopping Cart</h1>
          <CartList />
        </div>
        <div class="col-lg-5 mb-3 offset-1 summary d-grid gap-2 mx-auto" v-if="$store.state.cart.cart.size > 0">
          <h2 class="order-summary">Order Summary</h2>

          <label for="promo" class="form-label summary-info">Discount code / Promo code</label>
          <input type="text" class="form-control" id="promo" placeholder="Code" required="">
          
          <label for="card" class="form-label summary-info mt-4">Your bonus card number</label>
          <input type="text" class="form-control" id="card" placeholder="Enter Card Number" required="">
          <div class="summary-price summary-price-info1 mt-4">
            <div>Subtotal </div><div>{{ subtotal }}</div>
          </div>
          <div class="summary-price mt-4">
            <div class="summary-price-info2">Estimated Tax </div><div class="summary-price-info1">{{ tax }}</div>
          </div>
          <div class="summary-price mt-4">
            <div class="summary-price-info2">Estimated shipping & Handling </div><div class="summary-price-info1">{{ shipping }}</div>
          </div>
            <div class="summary-price mt-4 summary-price-info1">
            <div>Total </div><div>{{ total }}</div>
          </div>
          
          <BaseButton class="checkout mt-5" @click="$store.dispatch('cart/empty')">Checkout</BaseButton>
        </div>
      </div>

    <!-- <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Check Bootstrap
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div> -->
  
  </div>
</template>

<script>
import CartList from "@/components/CartList.vue";
export default {
  components: {CartList},
  data() {
    return {
      // subtotal: 123,
      // total: 456
    }
  },
  computed: {
    subtotal() {
      let sum = 0
      for (const obj of this.$store.state.cart.cart.values()) {
        sum += obj.count * obj.product.price
      }
      return sum
    },
    total() {
      return this.subtotal + this.tax + this.shipping
    },
    tax() {
      return Math.ceil(this.subtotal*0.004)
    },
    shipping() {
      return Math.ceil(this.subtotal*0.001)
    }
  }
}
</script>

<style scoped>
.shopping-cart {
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
}

.order-summary {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 16px;
}

.summary-info{
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  color: #545454;
}

.summary-price{
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
}

.summary-price-info1{
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
}

.summary-price-info2{
  font-family: 'Abel', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #545454;
}

.summary {
  border-radius: 10px;
  border: 1px solid #ebebeb;
  padding: 3em;
}
</style>