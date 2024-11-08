<template>
  <div class="d-flex justify-content-center mt-5 pt-5">
    <h1 class="title">Favorite</h1>
  </div>

  <div class="d-flex justify-content-center pt-2">
    <div>
      <ProductLight 
        class="product-1" 
        v-for="product of $store.state.favorites.favorites.values()"
        :key="product.id"
        :product="product"
        @click="$router.push(`/product/${product.id}`)"
      />
    </div>
  </div>
</template>

<script>
import ProductLight from "@/components/ui/ProductLight.vue";
export default {
    components: {ProductLight},
    // props: {
    //     posts: {
    //         type: Array,
    //         required: true
    //     }
    // }
}
</script>

<style scoped>
.title {
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
}
.product-1 {
  border-bottom: 1px solid #a3a3a3;
}
</style>