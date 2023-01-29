<template>
  <div v-if="data.userData">
    <h1>Profile</h1>
    <div class="profile-data">
      <InfoCard :id="data.userData.id" :imgList="[data.userData.avatar]" :info="info"/>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, reactive, computed } from 'vue'
import { UserData } from '@/models/UserData'
import { LabeledInfo } from '@/models/LabeledInfo'
import InfoCard from '@/components/InfoCard.vue'
import apiCalls from '@/api/calls'

export default defineComponent({
  name: 'ProfileView',
  components: {
    InfoCard
  },
  setup () {
    const data = reactive({
      userData: null as null | UserData
    })
    const info = computed(() => {
      return [{
        name: 'Name',
        value: data.userData?.name
      }as LabeledInfo,
      {
        name: 'Email',
        value: data.userData?.email
      }as LabeledInfo,
      {
        name: 'Role',
        value: data.userData?.role
      }as LabeledInfo
      ]
    })
    onMounted(() => {
      apiCalls.getCurrentUserData().then((userData) => {
        data.userData = userData
      })
    })
    return {
      data,
      info
    }
  }
})
</script>

<style scoped>
h1 {
    color: blue;
}
.profile-data {
  width: 100%;
  justify-content: center;
  display: flex;
}
.info-card {
  width:600px;
}
</style>
