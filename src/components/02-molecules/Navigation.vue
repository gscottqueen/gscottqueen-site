<template>
  <nav class="main-nav--items">
    <ul class="main-nav--links">
      <li><router-link :to="'/'">Hello World</router-link></li>
      <li><router-link :to="'/projects'">Projects</router-link></li>
      <li><router-link :to="'/case-study'">Case Study</router-link></li>
      <li><router-link :to="'/case-study/study-1'">Study-1</router-link></li>
      <li><router-link :to="'not-found'">404</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
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
