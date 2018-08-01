<template>
  <div class="about-view">
    <div
      v-for="(about, value, key) in projectsJson"
      :key="key">
      <div v-if="route === route">
        <div class="about-view--bg-image">
         <img class="hero" :src="`../static/img/${about.hero}`">
        </div>
        <div class="about-view--content">
        <div class="about-view--content-wrapper">
          <h1 class="about-view--name">{{ about.name }}</h1>
          <!-- eslint-disable-next-line -->
          <p class="about-view--description">Front End Developer and creator of <a href="https://www.written-app.io">Written</a>, a light weight indie software that helps screenwriters create and collaborate. Founder of Inaura Studios, a creative product incubator and digital space developing small to medium web applications and prototypes for big, mind to market ideas. </p>
          <!-- <h3>Working knowledge</h3>
          <ul class="about-view--tag">
            <li v-for="(tag, key) in about.skills" v-bind:key="key">
              {{ tag }}
            </li>
          </ul> -->
          <ul
          v-for="(socialicons, key) in about.socialicons"
          v-bind:key="key"
          class="about-view--social">
            <li
            v-for="(idetails, key) in socialicons"
            v-bind:key="key">
              <a class="about-view--social__link"
                v-bind:href="idetails.sociallink">
                <img
                class="about-view--social__icon"
                :src="`../static/img/${idetails.icon}`" />
              </a>
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

.about-view {
  position: relative;
  background-color: #fff;

  @media (min-width: 990px) {
    overflow-x: hidden;
  }

  &--content {
    width: auto;
    background-color: white;

    a {
      color: black;
      font-weight: bold;
      text-decoration: underline;

      &:hover {
        background-color: #ffffcc;
      }
    }

    &-wrapper {
      z-index: 1;
      left: 0;
      top: 0;
      background-color: white;
      padding: 2rem 10% 2rem 10%;
      margin-right: 2rem;
      color: black;
      line-height: 1.7;

      @media (min-width: 990px) {
        position: absolute;
        left: 40vw;
        top: 15vh;
        width: 100%;
        padding: 4rem 0 4rem 4rem;
      }

      h1 {
        margin-bottom: 1.5rem;
      }
    }
  }

  &--bg-image {
    z-index: -1;
    overflow: hidden;

    img {

      &.hero {
        height: auto;
        width: 150%;

        @media (min-width: 990px) {
          height: 100vh;
          width: auto;
        }
      }
    }
  }

  &--name {
    font-size: 55px;
    line-height: 1.2;
    margin-top: 0;

    @media (min-width: 690px) {
      font-size: 90px;
      max-width: 50%;
    }
  }

  &--description {
    margin-bottom: 2rem;

    @media (min-width: 990px) {
      max-width: 45%;
    }
  }

  &--social {
    display: flex;
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      padding-right: 10px;
    }

    &__link {
      cursor: pointer;
    }
    &__icon {
      width: 26px;
      height: 26px;
    }
  }

  &--tag {
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
      background-color: #f1f1f1;
      padding: 2px 10px;
      margin-right: .5rem;
      margin-bottom: .75rem;
      border-radius: 30px;
    }
  }
}
</style>
