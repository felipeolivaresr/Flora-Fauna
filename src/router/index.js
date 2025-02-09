import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import PaginaPrincipal from '../views/PaginaPrincipal.vue'
import PaginaDetalle from '../views/PaginaDetalle.vue'
import PaginaContacto from '../views/PaginaContacto.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/principal',
    name: 'Principal',
    component: PaginaPrincipal
  },
  {
    path: '/detalle/:id',
    name: 'Detalle',
    component: PaginaDetalle
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: PaginaContacto
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router