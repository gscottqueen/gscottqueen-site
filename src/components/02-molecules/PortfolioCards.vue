<template>
  <el-row class="card-group--wrapper"
  :gutter="40">
    <el-col
    v-for="(o, index) in 4"
    :span=span
    :key="o"
    :offset="index > 0 ? 0 : 0">
      <el-card :body-style="{ padding: '0px', border: 'none'}">
        <img src="../../assets/wild-vibez-317184.jpg" class="image">
        <div style="padding: 14px;">
          <span>Ball So Hard</span>
          <div class="card__bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">button</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'portfolio-cards',
  data() {
    return {
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

      if (this.fullWidth < 690) {
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
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 690px) {
    flex-direction: row;
  }

}

.el-card {
  border: 0;
  border-radius: 0;
  // min-width: 320px;
  margin: 40px 0;
}

.time {
  font-size: 13px;
  color: #999;
}

.button {
  padding: 0;
  float: right;
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
