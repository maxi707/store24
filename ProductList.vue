<template>
    <div class="list-page" v-if="products.length > 0">
        <ProductItem 
            v-for="product in products" 
            :key="product.id" 
            :product="product"
        />
    </div>
    <h2 v-else>Список пуст</h2>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
export default {
    components: {ProductItem},
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
.list-page {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
}
</style>