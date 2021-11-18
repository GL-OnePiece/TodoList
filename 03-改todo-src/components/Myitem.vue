<template>
  <div>
    <li>
      <span class="start">
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          v-show="todo.isEdit"
          type="text"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </span>
      <span class="end">
        <button v-show="!todo.isEdit" class="btnset" @click="handleEdit(todo)">编辑</button>
        <button @click="Del(todo.id)" class="btn">删除</button>
      </span>
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
    },
    handleEdit(todo) {
      if (Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })

    },
    //斯基区焦点回调(真正执行修改逻辑)
    handleBlur(todo, e) {
      todo.isEdit = false
      if (!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
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
  margin-top: 5px;
  /* position: relative;
  margin-top: 10px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.end {
  width: 80px;
  display: flex;
  justify-content: space-around;
}
.btnset {
  background-color: skyblue;
}
.btn {
  background-color: tomato;
}
button {
  display: none;
  border-radius: 20%;
}
li:hover {
  background-color: gray;
}
li:hover button {
  display: block;
}
</style>