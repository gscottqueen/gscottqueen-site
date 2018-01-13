<template>
  <div id="app">
    <router-view/>
    <footer>Front End by G. Scott Queen.</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

body {
  background-color: #646AF4;
}

footer {
  padding: 5% 10%;
  position: absolute;
  bottom: 0;
}
</style>
