<template>
  <div class="card-group--wrapper">
    <el-card
    :body-style="{ padding: '0px', border: 'none'}"
    v-for="(project, value, key) in projectsJson"
    :key="key">
      <img :src="`static/img/${project.hero}`" class="image">
      <div class="card-detail--wrapper" style="padding: 14px;">
          <dt class="project-title">{{ project.title }}</dt>
          <dt class="project-description">{{ project.description }}</dt>
          <dt class="project-tag">{{ project.tags }}</dt>
        <div
        class="card__bottom clearfix">
          <router-link :to="`${project.route}`">
            <el-tooltip
            class="tool-tip"
            effect="dark"
            content="Quick Look"
            placement="top">
              <el-button
              type="text"
              class="button button--view"
              target="_blank"></el-button></el-tooltip></router-link>
          <a :href=project.githublink target="_blank">
            <el-tooltip
            class="tool-tip"
            effect="dark"
            content="GitHub"
            placement="top">
              <el-button
              type="text"
              class="button button--git-hub"
              target="_blank"></el-button></el-tooltip></a>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import json from '../../data/projects.json';

export default {
  name: 'project-cards',
  data() {
    return {
      projectsJson: json,
      fullWidth: window.innerWidth,
      span: 12,
      currentDate: new Date(),
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeMount() {
    this.handleResize();
  },
  methods: {
    handleResize: function handleResize() {
    // whenever the document is resized, set the 'fullwidth' variable
      this.fullWidth = window.innerWidth;

      if (this.fullWidth < 900) {
        this.span = 24;
      } else {
        this.span = 12;
      }
    },
  },
};
</script>

<style lang="scss">

.card-group--wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.el-card {
  border: 0;
  border-radius: 0;
  max-width: 100%;
  margin: 40px 0;

  @media (min-width: 990px) {
    max-width: 48%;
  }

  @media (min-width: 1690px) {
    max-width: 31%;
  }

}

.card-detail--wrapper {
  position: relative;
}

.project-title {
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
  max-width: 65%;
}

.project-description {
  margin-bottom: 10px;
}

.project-tag {
  font-style: italic;
  font-size: 12px;
}

.time {
  font-size: 13px;
  color: #999;
}

.el-tooltip.tool-tip {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  color: #999;
}

.button {
  padding: 0;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-repeat: no-repeat;
  background-size: contain;
  height: 35px;
  width: 35px;
  margin: 0 5px;

  &--git-hub {
    background-image: url('../../assets/if_git-commit_298786.svg');
  }

  &--view {
    background-image: url('../../assets/if_eye-24_103177.svg');
    right: 4rem;
    width: 30px;
    top: 1.2rem;
  }

}

.image {
  width: auto;
  height: 450px;
  display: block;

  @media (min-width: 990px) {
    height: 550px;
  }
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

//dark-theme
.neo-noir {

    .el-card {
      -webkit-box-shadow: 32px 40px 162px -17px rgba(79,255,176,0.73);
      -moz-box-shadow: 32px 40px 162px -17px rgba(79,255,176,0.73);
      box-shadow: 32px 40px 162px -17px rgba(79,255,176,0.73);
    }

  }
</style>
