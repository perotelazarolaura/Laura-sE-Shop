<template>
  <div v-bind:class="{'info-card': true, 'interactive': interactive}" @click="click">
    <ImageCarousel v-if="imgList.length > 0" class="image" :imgList="imgList"/>
    <div class="info" v-if="info.length > 0">
      <p v-for="item in info" :key="item.name">
        <span class="bold"> {{ item.name }}: </span>
        <span> {{ item.value }} </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'
import { LabeledInfo } from '@/models/LabeledInfo'
import ImageCarousel from '@/components/ImageCorousel.vue'

export default defineComponent({
  name: 'InfoCard',
  components: {
    ImageCarousel
  },
  props: {
    imgList: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    info: {
      type: Array as PropType<Array<LabeledInfo>>,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    interactive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    click () {
      if (this.interactive) {
        this.$emit('click-card', this.id)
      }
    }
  }
})
</script>

<style scoped>
.image {
  width: 50%;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.info {
  text-align: left;
  width: 50%;
  margin-top: auto;
  margin-bottom: auto;
}
.bold {
  font-weight: bold;
}
.info-card {
  display:flex;
}
.interactive:hover{
  background-color: #eee;
  cursor:pointer;
  box-sizing: border-box;
}
</style>
