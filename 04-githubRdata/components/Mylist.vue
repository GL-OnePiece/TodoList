<template>
  <div class="section">
    <div class="in" v-for="user in users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 200px;" />
      </a>
      <p>{{ user.login }}</p>
    </div>
  </div>
</template>

<script>
//import { use } from 'vue/types/umd';
// const school = vue.extend({
//   data() {

//   },
//   methods: {

//   }
// })


export default {
  name: 'Mylist',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.$bus.$on('getUsers', (users) => {
      console.log('我是list组件,拿到了数据', users)
      this.users = users
    })
  },

}
</script>
<style scoped>
.in {
  width: 250px;
  height: 250px;
  border: 1px solid;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.section {
  width: 550px;

  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
}
</style>