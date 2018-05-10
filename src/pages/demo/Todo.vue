<template>
  <div id="app-2">
    <span v-bind:title="message">
      ToDoList
    </span>
    <todo-list>
    </todo-list>
  </div>
</template>

<script>
  import TodoList from '../../components/Todo'

  export default {
    name: 'Todo',
    data () {
      return {
        message: '页面加载于 ' + new Date().toLocaleString()
      }
    },
    components: {
      TodoList
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
