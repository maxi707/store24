<template>
    <div class="product-light">
        <img 
            class="product-image" 
            :src="`http://localhost:1452/${product.images[0]}`" alt="" />
        <div>{{ product.name }}</div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.product-light {
    height: 200px;
    width: 300px;
    display: flex;
    align-items: center;
    gap: 0.5em;

    font-family: 'ABeeZee', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    cursor: pointer;
}
.product-image {
    /* max-height: 160px; */
    max-width: 90px;
}
</style>