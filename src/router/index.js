import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "add",
    component: () =>
      import("../views/AddUserView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import("../views/ProfileView.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import("../views/SettingsView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
