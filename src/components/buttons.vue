<template>
    <div>
      <span
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      >
      </span>
    </div>
</template>

<script lang ="ts">
export default {
    name: "HooverButton", 
    data() {
      return {
        hover: false,
      };
    }
  }

</script>


<style>
.active {
    background: green;
  }
  
</style>
