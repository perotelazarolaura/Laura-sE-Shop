<template>
  <div class="card-carousel">
    <div class="card-img">
      <img :src="currentImg" alt="">
      <div class="actions">
        <span v-if="multipleImgs" @click="prevImg" class="prev">
          &#8249;
        </span>
        <span v-if="multipleImgs" @click="nextImg" class="next">
          &#8250;
        </span>
      </div>
    </div>
  </div>
</template>

<script lang ="ts">
import { defineComponent, computed, PropType, ref } from 'vue'

export default defineComponent({
  name: 'ImageCarousel',
  props: {
    imgList: {
      type: Array as PropType<Array<string>>,
      required: true
    }
  },
  setup (props) {
    const currentIdx = ref(0)
    const imgCount = computed(() => { return props.imgList.length })
    return {
      currentIdx,
      imgCount,
      currentImg: computed(() => { return props.imgList[currentIdx.value] }),
      multipleImgs: computed(() => { return imgCount.value > 1 })
    }
  },
  methods: {
    nextImg () {
      if (this.currentIdx < this.imgCount - 1) {
        this.currentIdx++
      } else {
        this.currentIdx = 0
      }
    },
    prevImg () {
      if (this.currentIdx > 0) {
        this.currentIdx--
      } else {
        this.currentIdx = this.imgCount - 1
      }
    }
  }
})

</script>

<style>
.card-img {
  position: relative;
}

.card-img > img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.actions {
  position: absolute;
  top: 50%;
  margin-top: -20px;
  right: -25px;
  left: -25px;
  display: flex;
  justify-content: space-between;
  color: #555;
}

.actions > span {
  cursor: pointer;
  font-size: 45px;
  margin-left: 5px;
  margin-right: 5px;
}

.actions > span:hover {
  color: #bbb;
}
</style>
