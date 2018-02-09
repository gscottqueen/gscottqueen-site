<template>
  <div id="app">
    <router-view/>
    <footer>
      <p>Front End by G. Scott Queen.</p>
      <button @click="darkTheme()">Neo-Noir</button>
        <router-link :to="'/'" >Hello World</router-link>
        <router-link :to="'portfolio'">Portfolio</router-link>
        <router-link :to="'not-found'">404</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    darkTheme: function darkTheme() {
      document.body.classList.toggle('neo-noir');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

body.ultra {
  background-color: #646AF4;
}

body.neo-noir {
  background-color: #1E1D2E;
}

footer {
  padding: 5% 10%;
  position: absolute;
  bottom: 0;
}

a {
  color: white;
  margin-left: 20px;
  text-decoration-line: none;
}

a:hover {
  text-decoration-line: underline;
}

a.router-link-exact-active {
  text-decoration-line: underline;
}

button {
  border: solid #fff 1px;
  padding: 5px 10px;
  background: none;
  color: white;
  cursor: pointer;
}
</style>
