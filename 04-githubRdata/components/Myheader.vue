<template>
  <div class="head">
    <input type="text" v-model="keyWord" @keydown.enter="searchUsers" />&nbsp;
    <button @click="searchUsers">search</button>
  </div>
</template>

<script>
// const school = vue.extend({
//   data() {

//   },
//   methods: {

//   }
// })
//import { nanoid } from 'nanoid'
import axios from 'axios'
export default {
  name: 'Myheader',
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUsers() {
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          console.log('请求成功了')
          this.$bus.$emit('getUsers', response.data.items)
        },
        error => {
          console.log('请求失败了', error.message);
        }
      )
    }
  }

}
</script>

<style scoped>
/* .head {
  width: 500px;
} */

input {
  width: 14rem;
  height: 2rem;
}
</style>