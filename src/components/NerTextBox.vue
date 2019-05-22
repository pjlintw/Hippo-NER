<template>
  <div class="nertextbox container rounded-container">

    <div class="card">
      <div class="card-content">
          <v-layout justify-center>
               <v-text-field v-on:keyup="submit" v-model="user_input" height="50" @focus="filed_focus" color="red" box></v-text-field>
          </v-layout>

          <v-btn round color="error">PER</v-btn>
          <v-btn round color="teal" dark>LOC</v-btn>
          <v-btn round color="primary" dark>MISC</v-btn>
      </div>
    </div>

    <v-container class="purple lighten-3 white--text pa-2 pt-0 mt-3" v-show="user_input.length">
      <v-flex>
        <v-card class="rounded-card" ref="show_results">
          <v-card-text class="text-lg">
            <component class="text-sm-left" v-for="item in process_user_input" v-bind:key="item" v-bind:is="whichComponent(item)" v-bind:word="item"></component>
          </v-card-text>
        </v-card>
        <!-- <v-card-actions class="pa-0 ma-0">
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon color="error">favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="error">share</v-icon>
            </v-btn>
        </v-card-actions> -->
      </v-flex>
    </v-container>

  </div>

</template>

<script>
  export default {
    name: "NerTextBox",
    components : {
    },
    data() {
      return {
        per_data: `per`,
        loc_data: `loc`,
        non_entity_word: 'non_entity_word',
        todo: 'yaaaa',
        label: 'Obama lives white house',
        user_input: '',
        fake_user_input: 'President Obama is speaking at the White House.',
        data: [
        {
          "begin": 0,
          'end': 1,
          "word": 'Oabam',
          "type": 'PER'
        },
        {
          "begin": 6,
          "end": 7,
          "word": "white house.",
          "type": "LOC"
        }
      ]
      }
    },
    methods: {
      whichComponent: function (item_name) {
        if (item_name.includes('p')) {
          return this.per_data
        } else if (item_name.includes('l')) {
          return this.loc_data
        } else {
          return this.non_entity_word
        }

      },
      filed_focus: function () {
        this.label = 'Tying sentence blow'
        // this.$refs.field.backgroundColor = '#90CAF9';
        // this.label = 'Typing Sentence below...';
      },
      submit: function () {
        console.log('submit');
      },
      processed_input: function(sentence) {
        // processing user input
        var sentence_lst = sentence.trim().split(' ');
        var filtered_sentence_lst = sentence_lst.filter((word) => {
          return (word !="")
        });
        return filtered_sentence_lst
      }
    },
    computed: {
      mark_text: function () {
        return '<span color="red">' + this.label + '</span>'
      },
      process_user_input: function () {
        // check wether process text
        var user_input_lst = this.processed_input(this.user_input);
        console.log(user_input_lst);

        // sending post

        console.log('join', user_input_lst.join(' '));
        for ( var idx = 0; idx < this.data.length; idx++) {
          console.log(this.data[idx]['begin']);
        }
        return user_input_lst
      }
    }

  }
</script>

<style>
  .rounded-container{
    border-radius: 20px;
  },
  .rounded-card{
    border-radius: 10px;
   },
 .card {
   margin-top: 0.5%;
 }
</style>
