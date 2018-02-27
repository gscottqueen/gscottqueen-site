<template>
  <div class="case-study">
    <div class="top">
      <page-title></page-title>
    </div>
    <div class="bottom">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/01-atoms/PageTitle';
import PageDescription from '@/components/01-atoms/PageDescription';


export default {
  name: 'Projects',
  components: {
    PageTitle,
    PageDescription,
  },
  data() {
    return {
      msg: 'A cool description about a case.',
    };
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">

</style>
