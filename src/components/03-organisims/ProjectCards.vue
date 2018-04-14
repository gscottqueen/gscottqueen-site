<template>
  <!-- <el-row class="card-group--wrapper"
  :gutter="40"> -->
    <!-- <el-col
    :span=span> -->
    <div class="card-group--wrapper">
      <el-card
      :body-style="{ padding: '0px', border: 'none'}"
      v-for="(project, value, key) in projectsJson"
      :key="key">
        <img src="../../assets/wild-vibez-317184.jpg" class="image">
        <div style="padding: 14px;">
            <dt class="project-title">{{ project.title }}</dt>
            <dt class="project-description">{{ project.description }}</dt>
            <dt class="project-tag">{{ project.tags }}</dt>
          <div
          class="card__bottom clearfix">
            <!-- <a :href=project.githublink target="_blank">
              <el-tooltip
              class="tool-tip"
              effect="dark"
              content="Heroku"
              placement="top">
                <el-button
                type="text"
                class="button button--view"
                aria-label="See it in deeployed on Heroku"
                target="_blank"></el-button></el-tooltip></a> -->
            <a :href=project.githublink target="_blank">
              <el-tooltip
              class="tool-tip"
              effect="dark"
              content="GitHub"
              placement="top">
                <el-button
                type="text"
                class="button button--git-hub"
                aria-label="See the code on GitHub"
                target="_blank"></el-button></el-tooltip></a>
          </div>
        </div>
      </el-card>
    </div>
    <!-- </el-col> -->
  <!-- </el-row> -->
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
  flex-direction: column;

  @media (min-width: 690px) {
    flex-direction: row;
  }

}

.el-card {
  border: 0;
  border-radius: 0;
  max-width: 450px;
  margin: 40px 0;
}

.project-title {
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
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
  float: right;
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
    height: 30px;
    position: relative;
    top: 2px;
  }

}

.image {
  width: 100%;
  display: block;
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
