<template>
  <div class="collapse collapse-plus mb-2 border border-secondary bg-base-200">
    <input type="radio" name="preguntas-frecuentes" :aria-label="pregunta" />
    <div class="collapse-title font-semibold">{{ pregunta }}</div>
    <div class="collapse-content text-sm text-base-content/70">
      <p>{{ respuesta }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqItem',
  props: {
    pregunta: { type: String, required: true },
    respuesta: { type: String, required: true }
  }
}
</script>
