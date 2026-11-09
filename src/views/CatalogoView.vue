<template>
  <section class="px-6 py-12 lg:px-12">
    <PageHeader titulo="Catálogo de documentos" subtitulo="Busca y filtra por área del derecho." />

    <label for="buscador" class="sr-only">Buscar documento</label>
    <input
      id="buscador"
      v-model="busqueda"
      type="text"
      placeholder="Buscar documento…"
      class="input input-bordered w-full"
    />

    <div class="my-5 flex flex-wrap gap-2">
      <button
        class="btn btn-sm"
        :class="areaActiva === 'todas' ? 'btn-primary' : 'btn-outline'"
        @click="areaActiva = 'todas'"
      >
        Todas
      </button>
      <button
        v-for="area in areas"
        :key="area.id"
        class="btn btn-sm"
        :class="areaActiva === area.id ? 'btn-primary' : 'btn-outline'"
        @click="areaActiva = area.id"
      >
        {{ area.nombre }}
      </button>
    </div>

    <div v-if="documentosFiltrados.length" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <DocumentCard v-for="doc in documentosFiltrados" :key="doc.id" :documento="doc" />
    </div>
    <div v-else class="alert">
      <span>No encontramos documentos con esa búsqueda. Prueba con otra palabra o habla con un abogado.</span>
    </div>
  </section>
</template>

<script>
import areas from '@/data/areas'
import documentos from '@/data/documentos'
import DocumentCard from '@/components/DocumentCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'CatalogoView',
  components: { DocumentCard, PageHeader },
  data() {
    return {
      areas,
      documentos,
      // Si llegamos desde el inicio o desde "Áreas", usamos los datos de la URL
      busqueda: this.$route.query.q || '',
      areaActiva: this.$route.query.area || 'todas'
    }
  },
  computed: {
    documentosFiltrados() {
      const texto = this.busqueda.toLowerCase().trim()
      return this.documentos.filter((doc) => {
        const coincideArea = this.areaActiva === 'todas' || doc.area === this.areaActiva
        const coincideTexto = doc.nombre.toLowerCase().includes(texto)
        return coincideArea && coincideTexto
      })
    }
  },
  watch: {
    // Si la URL cambia estando en esta pantalla, actualizamos los filtros
    '$route.query'(nueva) {
      this.busqueda = nueva.q || ''
      this.areaActiva = nueva.area || 'todas'
    }
  }
}
</script>
