<template>
  <div id="app">
    <div class="logo-container">
      <img class="dd-logo" src="./assets/logo.png">
    </div>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .dd-logo {
    height: 150px;
  }
</style>
