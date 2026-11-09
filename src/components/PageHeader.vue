<template>
  <div class="mb-8">
    <h1 class="font-serif text-4xl font-bold">{{ titulo }}</h1>
    <p v-if="subtitulo" class="mt-2 text-base-content/70">{{ subtitulo }}</p>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    titulo: { type: String, required: true },
    subtitulo: { type: String, default: '' }
  }
}
</script>
