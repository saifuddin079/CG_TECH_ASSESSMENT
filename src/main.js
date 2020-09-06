import Vue from "vue";
import App from "./App.vue";
// import store from "./store";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faSearch,
  faFilm,
  faStar,
  faTv,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add( faHome, faSearch, faFilm, faStar, faTv, faVideo);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
