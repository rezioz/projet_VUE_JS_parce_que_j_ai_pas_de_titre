<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({

  data() {
    return {
      episodes: [],
      infocharacters: [],
      searchbar: '',
      hover : false,
    };
  },
  //au montage de la page, on réalise le fetch d'api
  async mounted() {
    const numbers = [1, 2, 3]
    const charMax = 100
    let charNumber = 1
    //ici pour chacune des pages d'épisode (3) on récupère les infos des épisodes
    numbers.forEach(async (number) => {
      try {
        //on récupère les donnée
        let resultEpisode = await axios.get("https://rickandmortyapi.com/api/episode?page=" + number)
        //on push les données dans un tableau
        this.episodes.push(resultEpisode.data.results)
      } catch(error) {
        console.log(error)
      }
    });
    //La démarche est la même, la seule différence c'est qu'il existe plus de personnages, donc le fetch sera fait avec un while 
    while(charNumber < charMax){
      try {
        let resultChar = await axios.get("https://rickandmortyapi.com/api/character/" + charNumber)
        this.infocharacters.push(resultChar.data)
        charNumber += 1
      } catch(error) {
        console.log(error)
      }
    };
  },
});
</script>

<template>
  <div style="background-color:white">
    <!-- Search bar dinamique que recherche les noms d'épisodes -->
    <div class="search-wrapper panel-heading col-sm-12" :directive="searchbar">
      <input index="searchbar" type="text" v-model="searchbar" placeholder="Search" /> <br> <br>
    </div>
    <!-- Création d'un grid pour afficher plusieurs épisodes par ligne -->
    <div class="grid" v-for="episode in episodes" v-bind:key="episode.id">
      <!-- On boucle sur tous les épisodes, 1 épisode = 1 cartes de détail, c'est ici que la search bar va appliquer son filtre. 
      De plus il y a un hover -->
      <div v-for="detailEpisode in episode" :key="detailEpisode.id"
        :class=" detailEpisode.name.toLowerCase().includes(searchbar.toLowerCase()) ? 'card' : 'hiddencard'"
        @mouseover="hover = true" @mouseleave="hover = false">
        <div > {{ detailEpisode.episode }} </div>
        <br/>
        <div> {{ detailEpisode.name }}</div>
        <div class="cardinfo"> Over me :)
          <!-- Lors du hover, on souhaite affiche le nom des 5 premiers personnages présent dans l'épisode. 
          Pour cela il faut comparer les personnages et avec ceux de l'épisode -->
          <div v-show="hover" v-for="chars in detailEpisode.characters.slice(0, 5)" v-bind:key="chars['iddd']">
            <div v-for="character in infocharacters" v-bind:key="character.id">
              <div v-if="chars == character.url"> 
                <!-- utilisation d'un a car avec routerlink, je n'ai pas trouvé de solution pour faire un liens avec une variable. 
                Le lien redirige vers le personnage concerné -->
                <a v-bind:href="'/personnage/' + character.id"> {{ character.name }} </a>
              </div>  
            </div> 
          </div>
        </div>
        <br/>
        <br/>
      </div>
    </div>
  </div>
</template>
