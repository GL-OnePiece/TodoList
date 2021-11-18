<template>
  <div>
    <span>
      <h2>这是一个home组件</h2>
    </span>
    <div class="ul">
      <ul>
        <li>
          <router-link active-class="active" to="/Home/News">News</router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link active-class="active" to="/Home/Message">Message</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
div {
  width: 100%;
}
span {
  display: flex;
  justify-content: center;
}
ul li {
  list-style: none;
  margin-left: 10px;
  background: rgb(5, 177, 82);
  border-radius: 5px;
}
.ul {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
}
</style>