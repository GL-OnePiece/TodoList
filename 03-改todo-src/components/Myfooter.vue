<template>
  <div class="Footer" v-show="total">
    <div class="content">
      <div class="left">
        <input type="checkbox" :checked="isAll" @change="allCheck" />
        <span>已完成{{ doneTotal }}/全部{{ total }}</span>
      </div>
      <div class="right">
        <button @click="clearAll">清除已完成任务</button>
      </div>
    </div>
  </div>
</template>

<script>
// const school = vue.extend({

// })
export default {
  name: 'Myfooter',
  props: ['todos', 'allCheckTodo', 'clearAllTodo'],

  // methods: {

  // }
  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      let i = 0
      this.todos.forEach((todo) => {
        if (todo.done)
          i++
      });
      return i;
    },
    isAll() {
      return this.doneTotal === this.total && this.total > 0
    }

  },
  methods: {
    allCheck(e) {
      this.allCheckTodo(e.target.checked)
    },
    clearAll(todo) {
      return this.clearAllTodo(todo)
    }
  }

}
</script>

<style scoped>
.Footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.content {
  width: 300px;
  height: 25px;
  display: flex;
  flex-direction: row;
}
.right {
  margin-left: auto;
}
</style>