<template>
  <div class="case-study">
    <div
      v-for="(project, value, key) in projectsJson"
      :key="key">
      <div v-if="route === project.route">
        <div class="case-study--bg-image">
         <img :src="`../static/img/${project.hero}`">
        </div>
        <div class="case-study--content">
          <h1 class="case-study--project-title">{{ project.title }}</h1>
          <dt class="case-study--project-description">{{ project.description }}</dt>
          <dt class="case-study--project-tag">{{ project.tags }}</dt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/01-atoms/PageTitle';
import PageDescription from '@/components/01-atoms/PageDescription';
import json from '../../data/projects.json';

export default {
  name: 'Projects',
  components: {
    PageTitle,
    PageDescription,
  },
  data() {
    return {
      msg: 'Vestibulum ac diam sit amet',
      projectsJson: json,
      route: this.$route.path,
    };
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">

.case-study {
  position: relative;
  background-color: #fff;

  @media (min-width: 990px) {
    overflow: hidden;
  }

  &--content {
    z-index: 1;
    left: 0;
    top: 0;
    background-color: white;
    padding: 2rem 1rem;
    color: black;
    width: 100%;

    @media (min-width: 990px) {
      left: 40vw;
      top: 20vh;
      padding: 4rem 0 4rem 4rem;
      position: absolute;
    }
  }

  &--bg-image {
    z-index: -1;
    overflow: hidden;

    img {
      height: 100vh;
    }
  }

  &--project-title {
    font-size: 55px;
    line-height: 1.2;
    margin-top: 0;

    @media (min-width: 690px) {
      font-size: 90px;
    }
  }
}


</style>
