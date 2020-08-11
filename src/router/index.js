import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Setting from "../views/Setting";
import Tabbar from "../components/Tabbar";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts'),
  },
  {
    path: '/addperson',
    name: 'Addperson',
    component: () => import(/* webpackChunkName: "about" */ '../views/Addperson')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "about" */ '../views/Setting')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine')

  },
  {
    path: '/letter',
    name: 'Letter',
    component: () => import(/* webpackChunkName: "about" */ '../views/Letter')

  },

  {
    path: '/tabber',
    name: 'Tabbar',
    component: () => import(/* webpackChunkName: "about" */ '../components/Tabbar')
  },



]

const router = new VueRouter({
  routes
})

export default router
