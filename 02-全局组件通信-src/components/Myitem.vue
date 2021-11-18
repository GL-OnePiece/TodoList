<template>
  <div>
    <li>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <span>{{ todo.title }}</span>
      <button @click="Del(todo.id)" class="btn btn-danger">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Myitem',
  props: ['todo'],

  methods: {
    handleCheck(id) {
      //this.checktodo(id)
      this.$bus.$emit('checktodo', id)
    },
    Del(id) {
      if (confirm('确定删除吗')) {
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo', id)

      }
    }
  }
}
</script>

<style scoped>
div > li {
  width: 300px;
  height: 30px;
  border: 1px solid gray;
  background-color: rgb(214, 202, 202);
  list-style: none;
  /* display: flex;
  align-items: center;*/
  position: relative;
  margin-top: 10px;
}
button {
  display: none;
  position: absolute;
  right: 10px;
  top: 0px;
}
li:hover {
  background-color: gray;
}
li:hover button {
  display: block;
}
</style>