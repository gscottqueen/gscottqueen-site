<template>
  <nav
  v-bind:class="{ invisible: isVisible }"
  id="navigation"
  class="main-nav--items">
    <ul class="main-nav--links" >
      <!-- <li v-on:click="toggleMenu">
        <router-link :to="'/'">Hello World</router-link></li> -->
      <li v-on:click="toggleMenu">
        <router-link :to="'/projects'">Projects</router-link></li>
      <!-- <li v-on:click="toggleMenu">
        <router-link :to="'/case-study'">Case Study</router-link></li> -->
      <!-- <li v-on:click="toggleMenu">
        <router-link :to="'/case-study/study-1'">Study-1</router-link></li>
      <li v-on:click="toggleMenu">
        <router-link :to="'not-found'">404</router-link></li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    toggleMenu: function toggleMenu() {
      const nav = document.getElementById('navigation');
      nav.classList.toggle('invisible');
      document.body.classList.toggle('fixed');
    },
  },
};
</script>

<style lang="scss">

nav {
  .invisible {
    display: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

}

.router-link-exact-active {
  text-decoration-line: underline;
}

</style>
