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
import ProjectCards from '@/components/02-molecules/ProjectCards';

export default {
  name: 'Projects',
  components: {
    PageTitle,
    ProjectCards,
  },
  data() {
    return {
      msg: 'Attempts at making ideas a reality.',
    };
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">

</style>
