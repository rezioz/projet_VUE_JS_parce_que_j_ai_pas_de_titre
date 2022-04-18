<script>
import { defineComponent } from "vue";
import axios from "axios";

//const app = createApp({ "./App.vue" })
//app.use(store)
export default defineComponent({

  data() {
    return {
      episodes: [],
      infocharacters: [],
      searchbar: '',
      upHere : false,
      id: this.$route.params.id,
    };
  },

  async mounted() {
    const numbers = [1, 2, 3]
    numbers.forEach(async (number) => {
      try {
        let resultChar = await axios.get("https://rickandmortyapi.com/api/character/" + number)
        this.infocharacters.push(resultChar.data)
      } catch(error) {
        console.log(error)
      }
    });
  },
});
</script>

<template>
  <div style="background-color:white">
    <div v-if="id">
        <div v-for="character in infocharacters" v-bind:key="character.id"> 
            <div v-if="id == character.id">
                <img :src=character.image>
                <div>{{character.name}}</div>
                <div>{{character.status}}</div>
                <div>{{character.species}}</div>
                <div>{{character.location.name}}</div>
            </div>
        </div>
    </div>
    <div v-else>haha</div>
    
  </div>
</template>

<style>
.grid {
  margin: 0px 10% 0px 10%;
	display: flex;
	flex-wrap: wrap;
  width: auto;
  text-align: center;
}

.card {
  flex: 0 0 31%;
  border: 1px solid black;
  width: 300px;
  height: auto;
  padding-top: 25px;
  margin: 10px 10px 10px 10px;
  background-color: azure;
}

.hiddencard {
  display: none;
}

.cardinfo {
  margin-top: 13%;
}

</style>