<template>
  <div class="portfolio">
    <div class="top">
      <page-title></page-title>
    </div>
    <div class="bottom">
      <h2>{{ msg }}</h2>
      <portfolio-cards></portfolio-cards>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/01-atoms/PageTitle';
import PortfolioCards from '@/components/02-molecules/PortfolioCards';

export default {
  name: 'Portfolio',
  components: {
    PageTitle,
    PortfolioCards,
  },
  data() {
    return {
      msg: 'Attempts at making ideas a reality.',
    };
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">

</style>
