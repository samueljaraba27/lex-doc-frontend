<template>
  <header class="navbar sticky top-0 z-30 border-b border-base-300 bg-base-100 px-4 lg:px-12">
    <div class="navbar-start">
      <!-- Menú para móvil -->
      <div class="dropdown lg:hidden">
        <button tabindex="0" class="btn btn-ghost btn-square" aria-label="Abrir menú">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul tabindex="0" class="menu menu-sm dropdown-content z-10 mt-3 w-56 rounded-box bg-base-200 p-2 shadow">
          <li v-for="enlace in enlaces" :key="enlace.ruta">
            <RouterLink :to="enlace.ruta">{{ enlace.texto }}</RouterLink>
          </li>
        </ul>
      </div>
      <LogoLexDoc />
    </div>

    <!-- Menú para escritorio -->
    <nav class="navbar-center hidden lg:flex" aria-label="Principal">
      <ul class="menu menu-horizontal gap-1">
        <li v-for="enlace in enlaces" :key="enlace.ruta">
          <RouterLink :to="enlace.ruta" active-class="text-primary font-semibold">{{ enlace.texto }}</RouterLink>
        </li>
      </ul>
    </nav>

    <div class="navbar-end">
      <RouterLink to="/cuenta" class="btn btn-primary btn-sm">Mi cuenta</RouterLink>
    </div>
  </header>
</template>

<script>
import LogoLexDoc from './LogoLexDoc.vue'

export default {
  name: 'AppNavbar',
  components: { LogoLexDoc },
  data() {
    return {
      enlaces: [
        { texto: 'Documentos', ruta: '/catalogo' },
        { texto: 'Áreas', ruta: '/areas' },
        { texto: 'Abogados', ruta: '/abogados' },
        { texto: 'Precios', ruta: '/planes' },
        { texto: 'Ayuda', ruta: '/ayuda' }
      ]
    }
  }
}
</script>
