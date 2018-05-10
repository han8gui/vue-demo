<template>
  <div class="hello">
    <h1 v-html="title"></h1>
    <input v-model="newItem" @keyup.enter="addNew">
        <ul v-for="item in items" v-on:click="doThis(item)" v-if="!item.isFinished">
          {{ item.label }}
        </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      title: 'Todolist',
      items: [
      ],
      newItem: ''
    }
  },
  methods: {
    doThis: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    }
  }
}
</script>

<style scoped>
</style>
