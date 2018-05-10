<template>
  <div id="app-2">
    <span v-bind:title="message">
      Hello
    </span>
  </div>
</template>

<script>
export default {
  name: 'DemoHello',
  data () {
    return {
      message: '页面加载于 ' + new Date().toLocaleString()
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
