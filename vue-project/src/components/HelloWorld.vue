<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>You can view the instructions in the <code>README.md</code> file</p>
    <p>Remember to write any assumptions in an <code>ASSUMPTIONS.md</code> file</p>
    <p class="warning">Please overwrite the code for this page, we do not expect you to handle any routing in this test</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to the Deloitte Digital FED exercise'
    }
  }
}
</script>

<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.warning {
  color: darken(red, 20%);
  font-weight: bold;
}
</style>
