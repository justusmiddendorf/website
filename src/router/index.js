import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home - Justus | Informatik-Student & Developer",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About - Justus | Informatik-Student & Developer",
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: "Projekte - Justus | Informatik-Student & Developer",
    },
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
    meta: {
      title: "Skills - Justus | Informatik-Student & Developer",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Kontakt - Justus | Informatik-Student & Developer",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Set page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Justus | Informatik-Student & Developer";
  next();
});

export default router;
