<template>
  <section class="grid gap-8 px-6 py-12 lg:grid-cols-[14rem_1fr] lg:px-12">
    <aside>
      <ul class="menu rounded-box bg-base-200 p-2">
        <li v-for="opcion in opciones" :key="opcion.valor">
          <a :class="{ active: filtro === opcion.valor }" @click.prevent="filtro = opcion.valor" href="#">
            {{ opcion.texto }}
          </a>
        </li>
      </ul>
    </aside>

    <div>
      <PageHeader titulo="Mis documentos" subtitulo="Hola, [Nombre]. Aquí está el historial de tus documentos." />

      <div class="alert mb-6 border border-primary">
        <span><strong class="text-primary">Recordatorio:</strong> tu derecho de petición vence el [fecha].</span>
      </div>

      <div v-if="documentosFiltrados.length" class="space-y-3">
        <div
          v-for="doc in documentosFiltrados"
          :key="doc.id"
          class="card border border-secondary bg-base-200"
        >
          <div class="card-body flex-col items-start gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 class="font-serif font-bold">{{ doc.nombre }}</h3>
              <p class="text-xs text-base-content/60">Actualizado: {{ doc.fecha }}</p>
            </div>
            <StatusBadge :estado="doc.estado" />
            <button class="btn btn-outline btn-primary btn-sm">{{ textoBoton(doc.estado) }}</button>
          </div>
        </div>
      </div>
      <p v-else class="text-base-content/70">No tienes documentos en esta sección.</p>
    </div>
  </section>
</template>

<script>
import misDocumentos from '@/data/misDocumentos'
import PageHeader from '@/components/PageHeader.vue'
import StatusBadge from '@/components/StatusBadge.vue'

export default {
  name: 'CuentaView',
  components: { PageHeader, StatusBadge },
  data() {
    return {
      filtro: 'todos',
      documentos: misDocumentos,
      opciones: [
        { valor: 'todos', texto: 'Mis documentos' },
        { valor: 'borrador', texto: 'Borradores' },
        { valor: 'revision', texto: 'En revisión' },
        { valor: 'listo', texto: 'Listos' }
      ]
    }
  },
  computed: {
    documentosFiltrados() {
      if (this.filtro === 'todos') return this.documentos
      return this.documentos.filter((doc) => doc.estado === this.filtro)
    }
  },
  methods: {
    textoBoton(estado) {
      if (estado === 'listo') return 'Descargar'
      if (estado === 'borrador') return 'Continuar'
      return 'Ver estado'
    }
  }
}
</script>
