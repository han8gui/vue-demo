<template>
  <div class="hello">
    <h1 v-html="title"></h1>
    <input v-model="newItem" @keyup.enter="addNew">
        <ul v-for="item in items" v-on:click="doThis(item)">
          {{ item.label }}
        </ul>
</div>
</template>

<script>
export default {
  name: 'hello',
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
      console.log(item)
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
