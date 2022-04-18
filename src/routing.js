import { createRouter, createWebHistory } from "vue-router";
// Ici, on importe les composants qu'on veut configurer
// Dans ce cas, ce sera Accueil et Details
import Episode from "./components/Episode.vue";
import Personnage from "./components/PersonnageDetails.vue";
import PersonnageDetails from "./components/Personnage.vue";
import Other from "./components/Other.vue";

// Nous créons d'abord nos Routes
const routes = [
  // En n'indiquant rien d'autre que '/' dans path
  // Nous disons à Vue que c'est la page racine
  // Donc, la racine de votre application
  // Affichera le composant "Home.vue"
  {
    path: "/",
    component: Episode,
  },
  // Ici, nous disons que pour la route "/details"
  // Nous afficherons le composant "Details.vue"
  {
    path: "/personnage",
    component: Personnage,
  },
  {
    path: "/personnage/:id",
    component: PersonnageDetails,
  },
  {
    path: "/other",
    component: Other,
  },
];

// On crée notre router à partir des routes configurées
export default createRouter({
  // Afin que votre Router puisse fonctionner correctement
  // Nous avons besoin de lui créer un système d'historique
  history: createWebHistory(),
  // Nous ajoutons les routes fraîchement configurées
  routes,
});
