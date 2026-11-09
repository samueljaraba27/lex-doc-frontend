<template>
  <footer class="border-t border-base-300 bg-base-200 px-6 py-8 lg:px-12">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p class="max-w-xl text-sm text-base-content/70">
        © {{ anio }} LexDoc. Los documentos generados son modelos de apoyo y no sustituyen la asesoría de un abogado.
      </p>
      <nav class="flex gap-6 text-sm" aria-label="Legal">
        <RouterLink to="/ayuda" class="link link-hover">Ayuda</RouterLink>
        <a href="#" class="link link-hover">Términos</a>
        <a href="#" class="link link-hover">Privacidad</a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return { anio: new Date().getFullYear() }
  }
}
</script>
