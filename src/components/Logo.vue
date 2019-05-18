<template>
  <div class="logo">
    <h2 id="hippo_logo">Hippo NER Tagger</h2>
  </div>

</template>

<script>
  export default {
    name: "Logo",
    components : {
    },

    data() {
      return {}
    },
    methods: {
    }
  }
</script>

<style>
  #hippo_logo {
    font-family: "Arial";
    height: 100%;
    width: 100%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 3.5vmin;
    mix-blend-mode: var(--mix-blend-mode);
  }
</style>
