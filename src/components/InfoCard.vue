<template>
  <div v-bind:class="{'info-card': true, 'interactive': interactive}" @click="click">
    <ImageCarousel v-if="imgList.length > 0" class="image" :imgList="imgList"/>
    <div class="info" v-if="info.length > 0">
      <p v-for="item in info" :key="item.name">
        {{item.name}}: {{ item.value }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, reactive, computed, PropType, ref } from 'vue'
import { UserData } from '@/models/UserData'
import { LabeledInfo } from '@/models/LabeledInfo'
import ImageCarousel from '@/components/ImageCorousel.vue'
import apiCalls from '@/api/calls'

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
  setup () {
    const data = reactive({
      userData: null as null | UserData
    })

    onMounted(() => {
      apiCalls.getCurrentUserData().then((userData) => {
        data.userData = userData
      })
    })
    return data
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
}
.info {
  margin-top: auto;
  margin-bottom: auto;
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
