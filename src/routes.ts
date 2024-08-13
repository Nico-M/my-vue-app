import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import { LearnSongs } from "@/pages/learnSongs";

const routes = [
  { path: "/", component: Home },
  {
    path: "/sing-songs",
    component: LearnSongs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
