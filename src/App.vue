<template>
  <div class="container">
    <div class="warp">
      <myheader :addtodo="addtodo"></myheader>
      <mylist
        :todos="todos"
        :checktodo="checktodo"
        :deleteTodo="deleteTodo"
      ></mylist>
      <myfooter
        :todos="todos"
        :allCheckTodo="allCheckTodo"
        :clearAllTodo="clearAllTodo"
      ></myfooter>
    </div>
  </div>
</template>

<script>
import Myheader from "./components/Myheader.vue";
import Mylist from "./components/Mylist.vue";
import Myfooter from "./components/Myfooter.vue";
export default {
  name: "App",
  components: {
    Myheader,
    Mylist,
    Myfooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      // todos: [
      //   { id: '001', title: '抽烟', done: true },
      //   { id: '002', title: '喝酒', done: false },
      //   { id: '003', title: '烫头', done: false },

      // ]
    };
  },
  methods: {
    //增加一个li元素，也就输todo
    addtodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    //勾选一个todo
    checktodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id == id) todo.done = !todo.done;
      });
    },
    //删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    //全选和取消全选
    allCheckTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除已经完成勾选的
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
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
.warp {
  width: 500px;
  height: 600px;
  border: 1px solid black;
  box-shadow: 10px 10px 10px gray;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>