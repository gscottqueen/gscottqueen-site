<template>
  <div class="case-study">
    <div
      v-for="(about, value, key) in projectsJson"
      :key="key">
      <div v-if="route === about.route">
        <div class="case-study--bg-image">
         <img :src="`../static/img/${about.hero}`">
        </div>
        <div class="case-study--content">
        <div class="case-study--content-wrapper">
          <h1 class="case-study--project-title">{{ about.name }}</h1>
          <dt class="case-study--project-description">{{ about.description }}</dt>
          <ul class="case-study--project-tag">
            <li v-for="(tag, key) in about.skills" v-bind:key="key">
              {{ tag }}
            </li>
          </ul>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/01-atoms/PageTitle';
import PageDescription from '@/components/01-atoms/PageDescription';
import json from '../../data/about.json';

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
    width: auto;
    background-color: white;

    &-wrapper {
      z-index: 1;
      left: 0;
      top: 0;
      background-color: white;
      padding: 2rem 10% 2rem 10%;
      margin-right: 2rem;
      color: black;

      @media (min-width: 990px) {
        position: absolute;
        left: 40vw;
        top: 20vh;
        width: 100%;
        padding: 4rem 0 4rem 4rem;
      }
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
      max-width: 50%;
    }
  }

  &--project-description {
    margin-bottom: 2rem;

    @media (min-width: 990px) {
      max-width: 40%;
    }
  }

  &--project-tag {
    display: flex;
    flex-wrap: wrap;
    text-transform: lowercase;
    font-size: small;
    list-style: none;
    width: auto;
    padding: 0;
    color: #1E1D2E;

    @media (min-width: 690px) {
      max-width: 90%;
    }

   @media (min-width: 990px) {
      max-width: 50%;
    }

    li {
      background-color: #f9f9f9;
      padding: 2px 10px;
      margin-right: .5rem;
      margin-bottom: .75rem;
      border-radius: 30px;
    }
  }
}

//dark-theme
.neo-noir {

  .case-study {

    &--content {
      width: 100%;
      background-color: #1E1D2E;

      &-wrapper {
       color: white;
       background-color: #1E1D2E;
      }
    }

    &--project-title {
      color: white;
    }
  }
}


</style>
