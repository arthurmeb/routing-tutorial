import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Listings from '../views/Listings/Listings.vue'
import ListingDetails from '../views/Listings/ListingDetails.vue'
import NotFound from '../views//NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/listings',
    name: 'Listings',
    component: Listings
  },
  {
    path: '/listings/:id',
    name: 'listingDetails',
    component: ListingDetails
  },
  //redirect
  {
    path: '/braidzy',
    redirect: '/'
  },
  //catchall
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
