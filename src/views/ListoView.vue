<template>
  <section class="mx-auto grid max-w-5xl gap-10 px-6 py-12 lg:grid-cols-2">
    <div v-if="!documento" class="alert alert-warning lg:col-span-2">
      <span>Aún no has creado un documento.</span>
      <RouterLink to="/catalogo" class="btn btn-sm">Ir al catálogo</RouterLink>
    </div>

    <template v-else>
      <div class="space-y-5">
        <span class="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl text-primary-content">✓</span>
        <h1 class="font-serif text-4xl font-bold">Tu documento <span class="text-primary">está listo</span></h1>
        <p class="text-base-content/70">Revísalo, descárgalo y sigue las instrucciones para presentarlo ante la entidad.</p>

        <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <button class="btn btn-primary" @click="descargarPdf">Descargar PDF</button>
          <button class="btn btn-outline btn-primary" @click="descargarWord">Descargar Word</button>
        </div>

        <div class="alert">
          <span><strong class="text-primary">Siguiente paso:</strong> imprime dos copias y radícalas en la entidad.</span>
        </div>
        <p v-if="mensaje" class="text-sm text-info" role="status">{{ mensaje }}</p>

        <RouterLink :to="{ name: 'abogados' }" class="link link-primary text-sm">¿Quieres que un abogado lo revise?</RouterLink>
      </div>

      <DocumentoPreview
        :titulo="documento.nombre"
        :nombre="$route.query.nombre"
        :cedula="$route.query.cedula"
        :ciudad="$route.query.ciudad"
        :entidad="$route.query.entidad"
        :solicitud="$route.query.solicitud"
        :hechos="$route.query.hechos"
      />
    </template>
  </section>
</template>

<script>
import documentos from '@/data/documentos'
import DocumentoPreview from '@/components/DocumentoPreview.vue'

export default {
  name: 'ListoView',
  components: { DocumentoPreview },
  data() {
    return { mensaje: '' }
  },
  computed: {
    documento() {
      return documentos.find((doc) => doc.id === this.$route.query.doc)
    }
  },
  methods: {
    descargarPdf() {
      // Abre el cuadro de impresión del navegador (allí se puede "Guardar como PDF")
      window.print()
    },
    descargarWord() {
      // TODO: pedir el archivo .docx a la API cuando esté disponible
      this.mensaje = 'La descarga en Word estará disponible cuando se conecte el servidor.'
    }
  }
}
</script>
