<template>
  <div class="not-found">
      <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      msg: '404 Not Found.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.ultra {

  h2{
    font-weight: normal;
  }

}
</style>
