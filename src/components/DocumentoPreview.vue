<template>
  <article id="documento-impreso" class="rounded-md bg-[#F5F0E1] p-8 text-sm leading-relaxed text-neutral-900 shadow-xl ring-2 ring-primary">
    <h2 class="text-center font-serif text-lg font-bold uppercase tracking-wide">{{ titulo }}</h2>
    <hr class="my-3 border-primary" />
    <p>{{ ciudad || '[Ciudad]' }}, {{ fechaHoy }}</p>
    <p class="mt-3">Señores<br /><strong>{{ entidad || '[Nombre de la entidad]' }}</strong></p>
    <p class="mt-3"><strong>Asunto:</strong> {{ titulo }}</p>
    <p class="mt-3 whitespace-pre-line"><strong>Solicitud:</strong> {{ solicitud || '[Describe tu solicitud]' }}</p>
    <p class="mt-3 whitespace-pre-line"><strong>Hechos:</strong> {{ hechos || '[Describe los hechos]' }}</p>
    <p class="mt-6">Atentamente,</p>
    <p class="font-bold">{{ nombre || '[Nombre del solicitante]' }}</p>
    <p v-if="cedula">C.C. {{ cedula }}</p>
  </article>
</template>

<script>
export default {
  name: 'DocumentoPreview',
  props: {
    titulo: { type: String, required: true },
    nombre: { type: String, default: '' },
    cedula: { type: String, default: '' },
    ciudad: { type: String, default: '' },
    entidad: { type: String, default: '' },
    solicitud: { type: String, default: '' },
    hechos: { type: String, default: '' }
  },
  computed: {
    fechaHoy() {
      return new Date().toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })
    }
  }
}
</script>
