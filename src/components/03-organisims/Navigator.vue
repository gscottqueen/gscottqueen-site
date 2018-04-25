<template>
    <div class="main-nav">
      <i
      tabindex="0"
      class="main-nav--icon"
      v-on:click="toggleMenu"
      v-on:keyup="toggleMenu"></i>
      <navigation></navigation>
    </div>
</template>

<script>
import Navigation from '@/components/02-molecules/Navigation';

export default {
  name: 'navigator',
  components: {
    Navigation,
  },
  data() {
    return {
      isVisible: '',
    };
  },
  methods: {
    toggleMenu: function toggleMenu() {
      const nav = document.getElementById('navigation');
      nav.classList.toggle('invisible');
      document.body.classList.toggle('fixed');
    },
  },
};
</script>

<style lang="scss">

.invisible {
  display: none;
}

.main-nav, nav {
  z-index: 9998;
  position: sticky;
  top: 0;

  .main-nav--icon {
    position: absolute;
    right: 0;
    top: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 9999;
    background-image: url('../../assets/if_essential_set_menu_1110965.svg');
    background-repeat: no-repeat;
    background-size: contain;
    height: 40px;
    width: 40px;
    margin: 1rem;
  }

  .main-nav--items {
    position: absolute;

      &:after {
        content: '';
        background-image: url('../../assets/circuit-board.svg');
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 0;
        opacity: .03;
      }

    .main-nav--links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 100vw;
      height: 100vh;
      margin: 0;
      background: linear-gradient(-45deg, #00ffc3, #646AF4);
      background-size: 100% 100%;
      list-style: none;

      li {
        z-index: 1;

        a {
          color: #ffffff;
          font-size: 55px;
          line-height: 1.2;
          font-weight: bold;

          @media (min-width: 690px) {
            font-size: 90px;
          }

        }

      }

    }

  }

}

.neo-noir {

  .main-nav  {

    .main-nav--icon {
      color: #ffecfe;
    }

    .main-nav--items .main-nav--links {
    background: #1E1D2E;

    a {
      color: #afeeee;
      text-shadow:  0 0 14px #fff, 0 0 16px #fff, 0 0 18px #FF1177, 0 0 20px #FF1177;
    }

  }

}

  }
</style>
