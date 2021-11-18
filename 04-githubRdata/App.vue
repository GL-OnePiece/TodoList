<template>
  <div class="container">
    <myheader></myheader>
    <mylist></mylist>
  </div>
</template>

<script>
import Myheader from './components/Myheader.vue'
import Mylist from './components/Mylist.vue'
export default {
  name: 'App',
  components: {
    Myheader,
    Mylist,

  },
  data() {
    return {

    }
  },

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin-top: 2rem;
}
</style>