<template>
  <div id="app">
    <KeyboardDisplayPage />
  </div>
</template>

<script>

import KeyboardDisplayPage from './pages/KeyboardDisplay.vue'

export default {
  name: 'app',
  components: {
    KeyboardDisplayPage
  }
}

</script>

<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  background: #222;
  color: #eee;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
