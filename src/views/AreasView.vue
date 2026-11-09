<template>
  <section class="px-6 py-12 lg:px-12">
    <PageHeader titulo="Elige el área de tu caso" subtitulo="Modelos de documentos para cada rama del derecho." />
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <AreaCard v-for="area in areas" :key="area.id" :area="area" />
      <RouterLink
        to="/catalogo"
        class="card flex items-center justify-center border border-dashed border-primary p-8 font-semibold text-primary"
      >
        Ver todas →
      </RouterLink>
    </div>
  </section>
</template>

<script>
import areas from '@/data/areas'
import AreaCard from '@/components/AreaCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'AreasView',
  components: { AreaCard, PageHeader },
  data() {
    return { areas }
  }
}
</script>
