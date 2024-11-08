<template>
    <div class="product" v-for="obj of $store.state.cart.cart.values()" :key="obj.product.id">
        <ProductLight 
            :product="obj.product"
            @click="$router.push(`/product/${obj.product.id}`)"
        />
        <div class="product-controls">
            <a @click="$store.dispatch('cart/add', {product:obj.product, count:-1})" class="mx-2 text-decoration-none text-dark pointer">-</a>
            <input type="text" class="form-control count" 
                v-bind:value="obj.count" 
                @input="$store.dispatch('cart/set', {product:obj.product, count:$event.target.value})" required="">
            <a @click="$store.dispatch('cart/add', {product:obj.product, count:1})" class="mx-2 text-decoration-none text-dark pointer me-4">+</a>
            <div class="product-price me-3">{{ obj.product.price }}</div>
            <a @click="$store.dispatch('cart/set', {product:obj.product, count:0})" class="mx-2 text-decoration-none text-dark pointer">⨯</a>
        </div>
    </div>
</template>

<script>
import ProductLight from "@/components/ui/ProductLight.vue";
export default {
    components: {ProductLight},
}
</script>

<style scoped>
.product {
    display: flex;
    /* align-items: center; */
    border-bottom: 1px solid #a3a3a3;
  /* flex-direction: column; */
  justify-content: space-between;
}
.pointer {
    cursor: pointer;
    font-size: 1.5em;
}
.count {
    width: 2.5em;
}

.product-controls{
    display: flex;
    align-items: center;
}
.product-price {
    font-family: 'ABeeZee';
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    color: #000000;
}
</style>