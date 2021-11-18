<template>
  <div class="demo">
    <input type="text" placeholder="请输入你的命令，按回车确认" @keyup.enter="add" v-model="title" />
  </div>
</template>

<script>
// const school = vue.extend({
//   data() {

//   },
//   methods: {

//   }
// })
import { nanoid } from 'nanoid'
export default {
  name: 'Myheader',
  props: ['addtodo'],
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add() {
      if (!this.title.trim())
        return
      //将用户的输入包装成一个todo对象
      const todoObj = {
        id: nanoid(),
        title: this.title,
        done: false
      }
      //通知App组件去添加一个todo对象
      this.addtodo(todoObj)
      //清空输入
      this.title = ''

    }
  }

}
</script>

<style scoped>
.demo {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  width: 300px;
  height: 35px;
}
</style>