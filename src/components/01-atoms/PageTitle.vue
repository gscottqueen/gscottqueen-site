<template>
  <h1>{{ $route.meta.title }}</h1>
</template>

<script>
export default {
  name: 'page-title',
  data() {
    return {
      title: '',
    };
  },
};
</script>

<style lang="scss">

h1 {
  font-size: 55px;
  line-height: 1.2;

  @media (min-width: 690px) {
    font-size: 90px;
  }

}

//dark-theme
.neo-noir {

  h1 {
    color: #afeeee;
    text-shadow:  0 0 14px #fff, 0 0 16px #fff, 0 0 18px #FF1177, 0 0 20px #FF1177;
  }

}

</style>
