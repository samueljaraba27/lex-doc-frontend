<template>
  <ul class="steps steps-vertical lg:steps-horizontal w-full">
    <li
      v-for="(nombre, indice) in pasos"
      :key="nombre"
      class="step"
      :class="{ 'step-primary': indice + 1 <= actual }"
    >
      {{ nombre }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'StepsAsistente',
  props: {
    pasos: { type: Array, required: true },
    actual: { type: Number, default: 1 }
  }
}
</script>
