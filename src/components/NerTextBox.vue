<template>
  <div class="nertextbox container rounded-container">
    <div class="card">
      <div class="card-content">
          <!-- <v-layout justify-center>
               <v-text-field v-on:keyup="submit" v-model="user_input" height="50" @focus="filed_focus" color="red" box></v-text-field>
          </v-layout> -->
          <div class="input_div">
            <input type="text" name="name" v-on:keyup="submit" v-model="user_input" id="name" value="" tabindex="1" placeholder="John Wich is back" justify-center/>
          </div>
          <v-spacer class="mt-5"></v-spacer>
          <v-btn round color="error">PER</v-btn>
          <v-btn round color="teal" dark>LOC</v-btn>
          <v-btn round color="orange" dark>ORG</v-btn>
          <v-btn round color="primary" dark>MISC</v-btn>
      </div>
    </div>
    <v-container class="purple lighten-3 white--text pa-2 pt-0 mt-3" v-show="user_input.length">
      <v-flex>
        <v-card class="rounded-card" ref="show_results">
          <v-card-text class="text-lg">
            <div>Entity Array: {{ this.entity_lst }}</div>
            <div>Sequence: {{ this.seq_lst }}</div>
            <div>Sequence Length: {{ this.seq_lst.length }}</div>
            <component class="text-sm-left" v-for="(item, idx) in word_entity_pair_lst(this.seq_lst, this.entity_lst)" v-bind:key="idx" v-bind:is="whichComponent(item.type)" v-bind:word="item.word"></component>
          </v-card-text>
        </v-card>
        <v-card-actions class="pa-0 ma-0">
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon color="lime lighten-1">favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="lime lighten-1">share</v-icon>
            </v-btn>
        </v-card-actions>
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
        org_data: `org`,
        misc_data: `misc`,
        non_entity_word: 'non_entity_word',
        entity_lst: [],
        seq_lst: [],
        user_input: ''
      }
    },
    methods: {
      get_range: function(start, end) {
        return [...Array(end-start).keys()].map(v => start+v)
      },
      whichComponent: function (type) {
        if (type == 'PER') {
          return this.per_data
        } else if (type == 'ORG') {
          return this.org_data
        } else if (type == 'LOC') {
          return this.loc_data
        } else if (type == 'MISC') {
          return this.misc_data
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
        const axios = require('axios');
        var userInputFormData = new FormData();
        userInputFormData.set('sequence', this.user_input);
        // console.log(this.user_input);

        axios.post('http://140.115.51.159:8000/ner_tagging', userInputFormData)
          .then((response) => {
            this.entity_lst = response.data['entity']
            this.seq_lst = response.data['sequence']
            // console.log('in submit', response.data['sequence'])
          })
          .catch((error) => {
            console.log(error)
          })
      },
      word_entity_pair_lst: function (seq_lst, entity_lst) {
        // console.log('word_entity_pair_lst: ', seq_lst)
        // console.log('entity_lst: ', entity_lst)

        /* contains object */
        var all_pair_arr = []

        var entity_dict = {} /* begin_idx: [ end_idx, type] */
        var entity_end_arr = [] /* [ end_idx ] skip this index */

        /* if begin not in dict, add end_idx, type */
        for ( let idx = 0; idx < entity_lst.length; idx++) {
          var begin_idx = entity_lst[idx]['begin']
          var end_idx = entity_lst[idx]['end']
          var type = entity_lst[idx]['type']
          entity_dict[begin_idx] = [end_idx, type]

          if (entity_lst[idx]['type']) {
            entity_end_arr = entity_end_arr.concat(this.get_range(begin_idx, end_idx))

            if (begin_idx == end_idx) {
              entity_end_arr.push(begin_idx)
            }
            // console.log('entity_end_arr', entity_end_arr)
          }
        }
        // console.log(entity_dict)
        console.log('end array', entity_end_arr)

        /* iterate seq_lst, check which entity by dict and array above */
        for ( let idx = 0; idx < seq_lst.length; idx++) {
          console.log(entity_dict)
          if (idx in entity_dict) {
            console.log('idx in entity_dict', idx)
            var begin = idx
            var end = entity_dict[idx][0]
            var word_type = entity_dict[idx][1]
            var word = ''

            /* create word*/
            if (begin == end) {
              word = seq_lst.slice(begin, seq_lst.length).join()
            } else {
              word = seq_lst.slice(begin, end).join(" ")
            }
            all_pair_arr.push({'word': word, 'type': word_type})
          } else if (entity_end_arr.includes(idx)) {
            console.log('idx in entity_dict', idx)
            continue
            // all_pair_arr.push({'word': seq_lst[idx], 'type': 'nan'})
          } else {
            word = seq_lst[idx]
            all_pair_arr.push({'word': word, 'type': 'nan'})
          }}
      return all_pair_arr
      }
    },
    computed: {
    }
  }
</script>

<style>
  .input_div {
    background: #333;
    border: 5px solid #333;
    border-radius: 5px;
    /* opacity: 0.9; */
  }
  input[type=text], textarea {
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  outline: none;
  font-size: 18px;
  color: black;
  height: 20px;
  padding: 20px 2px 20px 8px;
  margin: 10px 10px 10px 1px;
  width:100%;
  border: 2px solid #333;
  background: #bbb;
  border-radius: 8px;
}

input[type=text]:focus, textarea:focus {
  font-size: 18px;
  /* background:	'#87CEFA'; */
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  padding: 20px 2px 20px 8px;
  margin: 10px 10px 10px 1px;
  border: 2px solid rgba(81, 203, 238, 1);
  background: rgb(154, 217, 234,1);
}
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
