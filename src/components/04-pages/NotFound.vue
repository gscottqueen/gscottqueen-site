<template>
  <div class="not-found">
    <div class="top">
      <page-title></page-title>
    </div>
    <div class="bottom">
      <h2>{{ msg }}</h2>
      <router-link :to="'/'" >Head back home?</router-link>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/01-atoms/PageTitle';

export default {
  name: 'NotFound',
  components: {
    PageTitle,
  },
  data() {
    return {
      msg: 'Sorry about that...',
    };
  },
};
</script>

<style lang="scss">

</style>
