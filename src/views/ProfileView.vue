<template>
  <div v-if="data.userData">
    <h2 class="title">Profile</h2>
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
import { useRouter } from 'vue-router'
// This renders the user's profile
export default defineComponent({
  name: 'ProfileView',
  components: {
    InfoCard
  },
  setup () {
    const router = useRouter()
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
      apiCalls.getCurrentUserData()
        .then((userData) => {
          data.userData = userData
        })
        .catch(() => {
          // If there is an error it sends the user back to the previous page
          router.back()
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
.profile-data {
  width: 100%;
  justify-content: center;
  display: flex;
}
.info-card {
  width:600px;
}
</style>
