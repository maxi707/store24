<template>
    <div class="product">
        <div
            :class="{'product-like-fill': $store.state.favorites.favorites.get(product.id) != undefined}"
            class="product-like"
            @click="$store.dispatch('favorites/toggleFavorite',product)">
        </div>
        <div class="product-image-cnt">
            <img 
                class="product-image" alt=""
                :src="`http://localhost:1452/${product.images[0]}`" 
                @click="$router.push(`/product/${product.id}`)" />
        </div>
        <div class="product-title">{{ product.name }}</div>
        <div class="product-price">{{ product.price }}</div>
        <BaseButton class="product-buy" @click="$store.dispatch('cart/add',{product:product, count:1})">Buy Now</BaseButton>
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
.product {
  padding-top: 25px;
  /* border: 3px solid #f6f6f6; */
  background-color: #f6f6f6;
  border-radius: 1em;
  margin-top: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 287px;
  height: 430px;
  text-align: center; /* нужно */
}

/* .product-image-cnt {
    height: 225px;
    width: 225px;
    display: flex;
    align-items: center;
} */

.product-image {
    height: 160px;
    max-width: 225px;
    cursor: pointer;
    margin-top: 20px;
}

.product-title {
    height: 46px;
    overflow: hidden;
    /* margin-bottom: 20px; */
    font-family: 'ABeeZee', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-top: 20px;
}

.product-price {
    margin-bottom: 10px;
    /* font-family: 'Abel'; */
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 24px;
    margin-top: 18px;
}

.product-buy {
    font-family: 'ABeeZee', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}

.product-like {
    width: 32px;
    height: 32px;
    cursor: pointer;
    background-image: url("../assets/heart-out.png");
    position: relative;
    left: 100px;
}

.product-like-fill {
    background-image: url("../assets/heart-fill.png");
}
</style>