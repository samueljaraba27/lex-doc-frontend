import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AreasView from '@/views/AreasView.vue'
import CatalogoView from '@/views/CatalogoView.vue'
import AsistenteView from '@/views/AsistenteView.vue'
import ListoView from '@/views/ListoView.vue'
import CuentaView from '@/views/CuentaView.vue'
import AbogadosView from '@/views/AbogadosView.vue'
import PlanesView from '@/views/PlanesView.vue'
import PagoView from '@/views/PagoView.vue'
import AyudaView from '@/views/AyudaView.vue'

const routes = [
  { path: '/', name: 'inicio', component: HomeView },
  { path: '/areas', name: 'areas', component: AreasView },
  { path: '/catalogo', name: 'catalogo', component: CatalogoView },
  { path: '/asistente/:id', name: 'asistente', component: AsistenteView },
  { path: '/listo', name: 'listo', component: ListoView },
  { path: '/cuenta', name: 'cuenta', component: CuentaView },
  { path: '/abogados', name: 'abogados', component: AbogadosView },
  { path: '/planes', name: 'planes', component: PlanesView },
  { path: '/pago', name: 'pago', component: PagoView },
  { path: '/ayuda', name: 'ayuda', component: AyudaView }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
