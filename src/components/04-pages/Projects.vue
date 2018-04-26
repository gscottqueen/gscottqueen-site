<template>
  <div class="projects">
    <div class="top">
      <page-title></page-title>
    </div>
    <div class="bottom">
      <h2>{{ msg }}</h2>
      <project-cards></project-cards>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/01-atoms/PageTitle';
import ProjectCards from '@/components/03-organisims/ProjectCards';

export default {
  name: 'Projects',
  components: {
    PageTitle,
    ProjectCards,
  },
  data() {
    return {
      msg: 'I like to keep a few ideas going at once. It keeps things interesting; I get to do a good bit of exploring, learning, and creative thinking.',
    };
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
  h2 {

    @media (min-width: 990px) {
      max-width: 70%;
    }
  }
</style>
