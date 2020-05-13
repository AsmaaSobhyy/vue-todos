import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DoneTodos from "../views/DoneTodos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todos",
    component: Home
  },
  {
    path: "/doneTodos",
    name: "doneTodos",
    component: DoneTodos
  }
];

const router = new VueRouter({
  routes
});

export default router;
