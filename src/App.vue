<template>
  <div id="app">

    <Logo/>

    <NerTextBox/>

  </div>

</template>

<script>
  import NerTextBox from './components/NerTextBox.vue'
  import Logo from './components/Logo.vue'

export default {
  name: 'App',
  components: {
    NerTextBox,
    Logo
  },
  data () {
    return {
    }
  }
}
</script>
<style>
  #app {
  color: var(--black);
  background: url(https://source.unsplash.com/RPT3AjdXlZc);
  background-repeat: no-repeat;
  background-size: 50%;
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Montserrat', Arial, serif;
  filter: var(--filter);
}
</style>
