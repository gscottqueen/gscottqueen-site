<template>
  <div id="app">
    <div class="app-body-wrapper">
      <!-- <navigator></navigator> -->
      <router-view/>
      <!-- <footer>
        <p>Front End by G. Scott Queen.</p>
        <theme-toggle></theme-toggle>
      </footer> -->
    </div>
  </div>
</template>

<script>
import ThemeToggle from '@/components/01-atoms/ThemeToggle';
import Navigation from '@/components/02-molecules/Navigation';
import Navigator from '@/components/03-organisims/Navigator';

export default {
  name: 'App',
  components: {
    ThemeToggle,
    Navigation,
    Navigator,
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  color: #ffffff;
}

body {
  margin: 0;
}

body.ultra {
  // background-color: #646AF4;
  background-color: #1E1D2E;
}

body.neo-noir {
  background-color: #1E1D2E;
}

body.fixed {
  overflow: hidden !important;
  height: 100% !important;
  width: 100% !important;
  position: fixed !important;
  z-index: 0 !important;
}

footer {
  padding: 5% 10%;
}

// TODO: set up a proper grid
.top {
  padding: 5% 10% 0;
}

.bottom {
  padding: 0 10% 0;
}

a {
  color: white;
  text-decoration-line: none;

  &:hover {
    text-decoration-line: underline;
  }

}

// TODO: get global variables working
// // breakpoint variables
// $mobile: 320px;
// //at tablet portriat we should already be getting the desktop experience
// $tablet: 690px;
// //any adjustments larger than tablet landscape should should use this breakpoint
// $desktop: 1025px;

</style>
