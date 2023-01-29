<template>
  <div>
    <h2 class="title">Product Detail</h2>
    <div v-if="cardInfo" class="product-detail">
      <InfoCard :id="cardInfo.id" :imgList="cardInfo.images" :info="cardInfo.info"/>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive, onMounted, computed } from 'vue'
import { ProductData } from '@/models/ProductData'
import { LabeledInfo } from '@/models/LabeledInfo'
import InfoCard from '@/components/InfoCard.vue'
import apiCalls from '@/api/calls'

export default defineComponent({
  name: 'ProductDetailView',
  components: {
    InfoCard
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const data = reactive({
      product: null as null | ProductData
    })
    const cardInfo = computed(() => {
      if (!data.product) { return undefined }
      return {
        images: data.product.images,
        id: data.product.id,
        info: [
          {
            name: 'Name',
            value: data.product.title
          } as LabeledInfo,
          {
            name: 'Category',
            value: data.product.category.name
          } as LabeledInfo,
          {
            name: 'Description',
            value: data.product.description
          } as LabeledInfo,
          {
            name: 'Price',
            value: `${data.product.price}$`
          } as LabeledInfo
        ]
      }
    })

    onMounted(() => {
      apiCalls.getSingleProduct(props.id).then((product) => {
        data.product = product
      })
    })

    return {
      data,
      cardInfo
    }
  }
})
</script>

<style scoped>
.product-detail {
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
}
</style>
