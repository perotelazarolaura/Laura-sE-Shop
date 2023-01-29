<template>
  <div>
    <h2 class="title">Products</h2>
    <input class="filter" type="text" v-model="filterName" placeholder="Filter products by name"/>
    <div class="product-grid">
      <div class="product-card" v-for="item in cardInfo" :key="item.id">
        <InfoCard :id="item.id" :imgList="item.images" :info="item.info" interactive @click-card="clickCard"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive, onMounted, watch, computed, ref } from 'vue'
import { ProductData } from '@/models/ProductData'
import { LabeledInfo } from '@/models/LabeledInfo'
import InfoCard from '@/components/InfoCard.vue'
import apiCalls from '@/api/calls'

export default defineComponent({
  name: 'ProductListView',
  components: {
    InfoCard
  },
  setup () {
    const filterName = ref('')
    const data = reactive({
      products: null as null | ProductData[]
    })// It creates the products as it's fetched from the API
    const cardInfo = computed(() => {
      const result = data.products?.map((item) => {
        return {
          images: [item.images[0]],
          id: item.id,
          info: [
            {
              name: 'Name',
              value: item.title
            } as LabeledInfo,
            {
              name: 'Category',
              value: item.category.name
            } as LabeledInfo,
            {
              name: 'Price',
              value: `${item.price}$`
            } as LabeledInfo
          ]
        }
      })
      return result
    })// The content of the filter input is observed and we retrieve products when the filter is longer than 3 characters.
    watch(filterName, (newValue) => {
      let filter:string|undefined = newValue
      if (newValue.length < 3) {
        filter = undefined
      }
      apiCalls.getAllProducts(filter).then((products) => {
        data.products = products
      })
    })

    onMounted(() => {
      apiCalls.getAllProducts().then((products) => {
        data.products = products
      })
    })

    return {
      filterName,
      data,
      cardInfo
    }
  },
  methods: {
    // Redirects the user to the product detail page when a card is clicked on.
    clickCard (productId:number) {
      this.$router.push({ name: 'product-detail', params: { id: productId } })
    }
  }
})
</script>

<style scoped>
.filter {
  width: 90%;
  height: 40px;
  margin: 30px;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
</style>
