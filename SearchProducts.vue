<template>
    <div>
        <input id="search" v-model="searchQuery" autocomplete="off" type="search" class="form-control search-bg" placeholder="Search" aria-label="Search">
        <ul class="list-search list-group">
            <li v-for="product in searched" :key="product.name" @click="$router.push(`/product/${product.id}`)" class="list-group-item">{{ product.name }}</li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            products: [],
            loaded: false,
            searchQuery: '',
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
    computed: {
        searched() {
            if (this.searchQuery == '') {
                return [];
            }
            return this.products.filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
}
</script>

<style scoped>
.search-bg {
  background-color: #f5f5f5 !important;
}

.list-group-item {
    cursor: pointer;
}

.list-search {
    visibility: hidden;
    position: absolute;
}

#search:focus + .list-search {
    visibility: visible; 
}

/* Чтобы клики по списку срабатывали */
.list-search:hover {
    visibility: visible;
}
</style>