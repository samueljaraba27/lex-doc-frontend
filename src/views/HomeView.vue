<template>
  <div>
    <!-- Hero -->
    <section class="grid items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-12">
      <div class="space-y-6">
        <span class="text-xs font-semibold uppercase tracking-widest text-primary">Todas las ramas del derecho</span>
        <h1 class="font-serif text-5xl font-bold leading-tight">
          Tu documento legal, <span class="text-primary">listo en minutos</span>
        </h1>
        <p class="max-w-lg text-lg text-base-content/70">
          Responde unas preguntas sencillas y recibe el documento que tu proceso necesita, en lenguaje claro.
        </p>

        <form class="join w-full max-w-xl" @submit.prevent="buscar">
          <label for="busqueda" class="sr-only">Buscar documento</label>
          <input
            id="busqueda"
            v-model="busqueda"
            type="text"
            placeholder="Ej: derecho de petición, tutela…"
            class="input input-bordered join-item w-full"
          />
          <button type="submit" class="btn btn-primary join-item">Buscar</button>
        </form>

        <ul class="flex flex-wrap gap-x-6 gap-y-1 text-sm text-base-content/70">
          <li>Sin saber de leyes</li>
          <li>PDF y Word</li>
          <li>Revisado por abogados</li>
        </ul>
      </div>

      <div class="hidden justify-center text-primary lg:flex">
        <div class="flex h-96 w-96 items-center justify-center rounded-full border border-secondary bg-base-200">
          <IconBalanza :size="220" :grosor="0.7" />
        </div>
      </div>
    </section>

    <!-- Áreas -->
    <section class="bg-base-200 px-6 py-14 lg:px-12">
      <PageHeader titulo="Elige el área de tu caso" subtitulo="Modelos de documentos para cada rama del derecho." />
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AreaCard v-for="area in areas" :key="area.id" :area="area" />
      </div>
    </section>

    <!-- Cómo funciona -->
    <section class="px-6 py-14 lg:px-12">
      <PageHeader titulo="Así de simple" />
      <div class="grid gap-8 md:grid-cols-3">
        <div v-for="(paso, indice) in pasos" :key="paso.titulo" class="space-y-3">
          <span class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-content">
            {{ indice + 1 }}
          </span>
          <h3 class="font-serif text-xl font-bold">{{ paso.titulo }}</h3>
          <p class="text-base-content/70">{{ paso.texto }}</p>
        </div>
      </div>
    </section>

    <!-- Llamada a la acción -->
    <section class="px-6 pb-16 lg:px-12">
      <div class="flex flex-col items-start justify-between gap-4 rounded-2xl bg-neutral p-8 md:flex-row md:items-center">
        <div>
          <h2 class="font-serif text-3xl font-bold">¿No sabes qué documento necesitas?</h2>
          <p class="mt-1 text-base-content/70">Habla con un abogado y te orientamos.</p>
        </div>
        <RouterLink to="/abogados" class="btn btn-primary">Empezar ahora</RouterLink>
      </div>
    </section>
  </div>
</template>

<script>
import areas from '@/data/areas'
import AreaCard from '@/components/AreaCard.vue'
import IconBalanza from '@/components/IconBalanza.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'HomeView',
  components: { AreaCard, IconBalanza, PageHeader },
  data() {
    return {
      busqueda: '',
      areas,
      pasos: [
        { titulo: 'Elige tu documento', texto: 'Busca por nombre o navega por área del derecho.' },
        { titulo: 'Responde unas preguntas', texto: 'Un asistente guiado te pide solo los datos necesarios.' },
        { titulo: 'Descarga y presenta', texto: 'Recibe tu documento con instrucciones para presentarlo.' }
      ]
    }
  },
  methods: {
    buscar() {
      this.$router.push({ name: 'catalogo', query: { q: this.busqueda } })
    }
  }
}
</script>
