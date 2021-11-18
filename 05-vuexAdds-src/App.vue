<template>
  <div class="container">
    <count></count>
  </div>
</template>

<script>
import Count from './components/Count.vue'
export default {
  name: 'App',
  components: {
    Count
  },

  data() {
    return {

    }
  },
}
</script>

<style scoped>
.container {
  width: 530px;
  height: 630px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  justify-content: center;
}
</style>