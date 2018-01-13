<template>
  <div class="hello">
    <div class="top">
      <h1>{{ hello }}</h1>
    </div>
    <div class="bottom">
      <h2>{{ msg }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      hello: 'Hello World.',
      msg: 'This is a new WIP, and exist as an experiment in design, expereince, and creativity.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.hello {

  .top {
   padding: 5% 10% 0;

    h1 {
      text-align: left;
      font-size: 90px;
    }

  }

  .bottom {
   padding: 0 10% 0;

    h2{
      font-weight: normal;
      text-align: left;
    }

  }

}
</style>
