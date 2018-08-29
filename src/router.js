import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "../node_modules/nprogress/nprogress.css";

import Home from "./components/Home";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";
import ListItem from "./components/ListItem";
import ViewItem from "./components/ViewItem";

Vue.use(VueRouter);

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "Add",
    path: "/add",
    component: AddItem
  },
  {
    name: "Edit",
    path: "/edit/:id",
    component: EditItem
  },
  {
    name: "View",
    path: "/view/:id",
    component: ViewItem
  },
  {
    name: "List",
    path: "/index",
    component: ListItem
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
