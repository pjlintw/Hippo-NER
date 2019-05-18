<template>
  <div>

    <b-navbar toggleable="md mb-1" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <router-link :to="{ name: 'index'}"><b-navbar-brand>Hippo Named Entity Recognition Demo</b-navbar-brand></router-link>

      <b-collapse is-nav id="nav_collapse">
        <!-- <b-navbar-nav>
          <b-nav-item href="#" variant="success" @click="loadCart">InCart ({{ prodcut_numbers }})</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">DE</b-dropdown-item>
            <b-dropdown-item href="#">ZH</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>Authors</em>
            </template>
            <b-dropdown-item href="#">Eddie Chuang</b-dropdown-item>
            <b-dropdown-item href="#">Linus Linus</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

</template>

<script>
import { EventBus } from '@/main.js'

export default {
  name: 'Navbar',
  props: ,
  data() {

  },
  created(){

  },
  methods: {

  },
  computed: {
  }
}
</script>

<style>
a.router-link-exact-active{
  color: purple;
}
</style>
