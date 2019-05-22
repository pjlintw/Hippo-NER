<template>
  <v-app class="app" v-bind:style="{ backgroundImage: 'url(' +randomChoice()+ ')', 'background-repeat': no_rep, 'background-size': cover , 'background-position': center}">

    <v-toolbar app dark>
      <v-toolbar-side-icon class=""></v-toolbar-side-icon>
      <v-toolbar-title class="headline ma-0">
        <v-btn flat v-bind:href="eddie_github_url" target="_blank">
          <span>Hippo NER Tagger</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip id="eddie" class="mr-2" bottom>
          <template v-slot:activator="{ on }">
          <v-btn icon href="https://github.com/EddieChuang" target="_blank" v-on="on">
            <v-avatar size="45">
              <img src="https://randomuser.me/api/portraits/men/1.jpg">
            </v-avatar>
          </v-btn>
          </template>
          <span>Eddie Chuang</span>
          </v-tooltip>

          <v-tooltip id="linus" class="mr-2" bottom>
                <template v-slot:activator="{ on }">
              <v-btn icon href="https://github.com/pjlintw" target="_blank" v-on="on">
                <v-avatar size="45">
                  <img src="https://randomuser.me/api/portraits/men/1.jpg">
                </v-avatar>
              </v-btn>
              </template>
              <span>Linus Lin</span>
          </v-tooltip>
    </v-toolbar>


    <v-content>
        <Home/>
    </v-content>



  </v-app>
</template>

<script>
import Home from './views/Home'


export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      eddie_github_url: "https://github.com/EddieChuang/Neural-Architectures-for-Named-Entity-Recognition",
      url_arr: ['https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
      'https://picsum.photos/1920/1080?image=33',
      'https://source.unsplash.com/random/1800x1080'
      ],
      no_rep: 'no-repeat',
      cover: 'cover',
      center: 'center'
    }
  },
  methods: {
    randomChoice: function() {
      return this.url_arr[Math.floor(Math.random() * this.url_arr.length)]

    }
  }
}
</script>

<style>


</style>
