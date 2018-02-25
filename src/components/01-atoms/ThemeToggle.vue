<template>
  <button
  type="button"
  value="Change Theme"
  title="Change Theme"
  aria-roledescription="Click to change theme"
  @click="toggleTheme()">{{ theme }}</button>
</template>

<script>
export default {
  name: 'theme-toggle',
  data() {
    return {
      theme: 'Ultra',
    };
  },
  methods: {
    toggleTheme: function toggleTheme() {
      if (this.theme === 'Ultra') {
        this.theme = 'Neo Noir';
      } else {
        this.theme = 'Ultra';
      }
      document.body.classList.toggle('ultra');
      document.body.classList.toggle('neo-noir');
    },
  },
};
</script>

<style lang="scss">

button {
  border: solid #fff 1px;
  padding: 5px 10px;
  background: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #1E1D2E;
  }
}

</style>
