<template>
  <div class="container px-5 mt-4">
    <div class="row">
      <div class="col-md-3 mb-3 offcanvas-lg offcanvas-start" id="offcanvasTop">
        

        <!-- <div v-for="[key, value] of  characteristics" :key="key">{{ key }} 
          <div v-for="[k, v] of value" :key="k">{{ k }} : {{ v }}</div>
        </div> -->
        
        <!-- https://metanit.com/web/vuejs/3.2.php -->
        <details v-for="[key, value] of  characteristics" :key="key">
          <summary class="border-bottom py-3">{{ key }}</summary>
          <input type="search" class="form-control my-3 search-bg" placeholder="Search" aria-label="Search">
          <div v-for="[k, v] of value" :key="k" class="form-check">
            <input class="form-check-input checkbox-black" type="checkbox" :id="k" v-model="selectedChars" v-bind:value="{key,k}">
            <label class="form-check-label" :for="k">{{ k }} <span class="characteristic-count">{{ v }}</span></label>
          </div>
        </details>
        <!-- https://www.sitepoint.com/style-html-details-element -->

        <!-- <div>{{ selectedChars }}</div> -->
      </div>
      <div class="col-lg-9 mb-3">
        <div class="app__btns ps-3">
          <button class="btn btn-outline-secondary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Filters</button>
          <div class="selected-products">Selected Products <span class="selected-products-count">{{ searchWithSort.length }}</span></div>
          <BaseSelect class="w-25" v-model="selectedSort" :options="optionsSort" />
        </div>
        
        <ProductList class="ps-3" :products="searchWithSortWithPage" v-if="loaded" />
        <div v-else>Loading Posts...</div>
        <div class="page__wrapper">
          <div 
          v-for="pageN in pages" 
          :key="pageN"
          @click="changePage(pageN)"
          :class="{'current-page': page == pageN}"
          class="page">{{ pageN }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      loaded: false,
      selectedSort: '',
      optionsSort: [
        {value:'rating', name:'By rating'},
        {value:'price', name:'By price'},
        {value:'count_review', name:'By date'}, // Даты нету в данных
      ],
      page: 1,
      pages: 0,
      limit: 9,
      selectedChars: []
    }
  },
  methods: {
    changePage(pageN) {
      this.page = pageN
    },
    async fetchProducts() {
      try {
        this.loaded = false
        const out = await axios.get('http://localhost:1452/api/category/'+this.$route.params.id)
        this.pages = Math.ceil(out.data.length / this.limit)
        this.posts = out.data
        // this.posts = out.data.map(p => {
        //   return {title: p.name, description: p.price, id: p.id}
        // })
      } catch (e) {
        console.log(e)
      } finally {
        this.loaded = true
      }
    },
  },
  components: {
    ProductList
  },
  mounted() {
    this.fetchProducts()
  },
  computed: {
    postsSort() {
      return [...this.posts].sort((p1, p2) => {
        return p1[this.selectedSort] > p2[this.selectedSort]
      })
    },
    searchWithSort() {
      if (this.selectedChars.length == 0) {
        return this.postsSort
      }
      return this.postsSort.filter(product => {
        let match = true
        for (const char of product.characteristics) {
          for (const ch of this.selectedChars) {
            if (char.characteristic == ch.key && char.value != ch.k) {
              match = false
            }
          }
        }
        return match
      })
    },
    searchWithSortWithPage() {
      return this.searchWithSort.slice((this.page-1)*this.limit, this.page*this.limit)
    },
    characteristics() {
      const characteristics = new Map();
      for (const product of this.postsSort) {
        for (const char of product.characteristics) {
          if (characteristics.has(char.characteristic)) {
            let values = characteristics.get(char.characteristic)
            let count = values.get(char.value) || 0 // 256M
            count += 1
            values.set(char.value, count)
            // characteristics.set(char.characteristic, values)
          } else {
            const values = new Map()
            values.set(char.value, 1) // 128M, 1
            characteristics.set(char.characteristic, values)
          }
        }
      }
      // console.log(characteristics)
      return characteristics
    }
  },
  // watch: {
  //   page() {
  //     this.fetchProducts()
  //   }
  // }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app__btns {
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
  justify-content: center;
}

.page {
  padding: 10px;
  margin: 3px;
  background-color: #f6f6f6;
  color: black;
  border-radius: 6px;
  cursor: pointer;
}

.current-page {
  background-color: black;
  color: white;
}

.characteristic-count {
  color: gray;
}

/* Убираем стандартный маркер Chrome */
details summary::-webkit-details-marker {
  display: none
}
/* Убираем стандартный маркер Firefox */
details > summary {
  list-style: none;
}

/* маркер для закрытого состояния */
details summary::after {
  /* content: '▼';
  margin-right: 7px;
  position: relative;
  right: 0; */
  content: '';
  width: 18px;
  height: 10px;
  background: url('../assets/arrow.svg') no-repeat;
  background-size: cover;
}

/* маркер для открытого состояния */
details[open] summary:after {
  /* content: '▲'; */
  transform: rotate(180deg);
}

details {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  color: black;
}

details summary {
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 18px;

  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px 15px; */
}

.selected-products {
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  color: #6C6C6C;
}

.selected-products-count{
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
}

.checkbox-black:checked {
  background-color: black !important;
  border-color: black !important;
}

.search-bg {
  background-color: #f5f5f5 !important;
}
</style>