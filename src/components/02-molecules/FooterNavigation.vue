<template>
  <nav>
    <ul>
      <li><router-link :to="'/'">Hello World</router-link></li>
      <li><router-link :to="'/projects'">Projects</router-link></li>
      <li><router-link :to="'/projects/nested'">Nested</router-link></li>
      <li><router-link :to="'not-found'">404</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'footer-navigation',
};
</script>

<style lang="scss">
nav {

  ul {
    list-style: none;
    padding: 0;
  }

}

.router-link-exact-active {
  text-decoration-line: underline;
}

</style>
