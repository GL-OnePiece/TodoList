<template>
  <div class="container">
    <span>
      <h2>Vue-Router</h2>
    </span>
    <hr />
    <span class="in">
      <div class="content">
        <!-- vue中借助router-link标签实现路由切换 -->
        <router-link active-class="active" to="/About">About</router-link>
        <router-link active-class="active" to="/Home">Home</router-link>
      </div>
      <div class="main">
        <!-- 指定组件的呈现位置-->
        <span>
          <router-view></router-view>
        </span>
      </div>
    </span>
  </div>
</template>

  <script>

export default {
  name: 'App',
  // components: {
  //   About, Home
  // },

  data() {
    return {

    }
  },
}
</script>

<style scoped>
.container {
  width: 80%;
  height: 80vh;
}
.container span {
  width: 100%;
  display: flex;
  justify-content: center;
  background: ghostwhite;
}
.in {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid;
}
.content {
  width: 20%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  background: rgb(58, 56, 56);
}
.main {
  border: 1px solid;
  width: 80%;
  height: 40%;
  display: flex;
  align-items: center;
}

.active {
  background-color: rgb(7, 176, 243);
}
a {
  text-decoration: none;
  background: gainsboro;
  color: black;
  width: 100px;
  text-align: center;
  border-radius: 5px;
  margin-top: 5px;
}
</style>