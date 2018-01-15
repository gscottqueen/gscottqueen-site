<template>
  <div class="portfolio">
    <div class="top">
      <h1>{{ header }}</h1>
    </div>
    <div class="bottom">
      <h2>{{ msg }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      header: 'Portfolio.',
      msg: 'Attempts at making ideas a reality.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.ultra {

  .portfolio {

    .top {
    padding: 5% 10% 0;

      h1 {
        font-size: 90px;
      }

    }

    .bottom {
    padding: 0 10% 0;

      h2{
        font-weight: normal;
      }

    }

  }

}

//dark-theme

.neo-noir {

  .portfolio {

    .top {

      h1 {
        color: #afeeee;
        text-shadow:  0 0 14px #fff, 0 0 16px #fff, 0 0 18px #FF1177, 0 0 20px #FF1177;
      }

    }

  }

}
</style>
