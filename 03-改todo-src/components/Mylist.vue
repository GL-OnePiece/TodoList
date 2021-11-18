<template>
  <div class="li">
    <ul>
      <Myitem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></Myitem>
    </ul>
    <hr />
  </div>
</template>

<script>
// const school = vue.extend({
//   data() {

//   },
//   methods: {

//   }
// })
import Myitem from './Myitem.vue'

export default {
  name: 'Mylist',
  components: { Myitem },
  props: ['todos']
}
</script>
<style scoped>
.li {
  display: flex;
  align-items: center;
  justify-content: center;
}
ul {
  width: 300px;
  padding: 0;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>