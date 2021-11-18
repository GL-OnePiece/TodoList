<template>
  <div class="li">
    <h1>当前求和为:{{ $store.state.sum }}</h1>
    <br />
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex"

// import { mapState,mapGetters } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1,

    }
  },
  methods: {
    // increment() {
    //   this.$store.commit('JIA', this.n)
    // },
    // decrement() {
    //   this.$store.commit('JIAN', this.n)
    // },
    // incrementOdd() {

    //   this.$store.dispatch('jiaOdd', this.n)
    // },
    // incrementWait() {
    //   this.$store.dispatch('jiaWait', this.n)
    // },
    ...mapMutations(['JIA', 'JIAN']),
    ...mapActions(['jiaOdd', 'jiaWait'])
  },
  computed: {

  }

}
</script>
<style scoped>
button {
  margin-left: 10px;
}
</style>