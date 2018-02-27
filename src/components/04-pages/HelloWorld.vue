<template>
  <div class="hello">
    <div class="top">
      <page-title></page-title>
    </div>
    <div class="bottom">
      <h2>{{ msg }}</h2>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/01-atoms/PageTitle';

export default {
  name: 'HelloWorld',
  components: {
    PageTitle,
  },
  data() {
    return {
      header: 'Hello World.',
      msg: 'This is a new WIP, and exist as an experiment in design, expereince, and creativity.',
    };
  },
};
</script>

<style lang="scss">

</style>
