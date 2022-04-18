import { createRouter, createWebHistory } from "vue-router";
// Ici, on importe les composants qu'on veut configurer
// Dans ce cas, ce sera Accueil et Details
import Episode from "./components/Episode.vue";
import Personnage from "./components/Personnage.vue";
import PersonnageDetails from "./components/PersonnageDetails.vue";
import NotFound from "./components/NotFound.vue";


const routes = [
  {
    path: "/",
    component: Episode,
  },
  {
    path: "/personnage",
    component: Personnage,
  },
  {
    path: "/personnage/:id",
    component: PersonnageDetails,
  },
  {
    path: '/404', name: 'NotFound', 
    component: NotFound,
  },
  {
    path: '/:catchAll(.*)', 
    redirect:'404',
  }
];

// On crée notre router à partir des routes configurées
export default createRouter({
  // Afin que le Router puisse fonctionner correctement
  history: createWebHistory(),
  // Nous ajoutons les routes fraîchement configurées
  routes,
});
