<template>
  <div class="card border border-secondary bg-base-200">
    <div class="card-body items-center text-center">
      <span class="flex h-14 w-14 items-center justify-center rounded-full border border-primary font-serif text-xl font-bold text-primary">
        {{ abogado.inicial }}
      </span>
      <h3 class="card-title font-serif text-base">{{ abogado.nombre }}</h3>
      <p class="text-sm text-base-content/70">{{ abogado.especialidad }}</p>
      <button class="btn btn-primary btn-sm mt-2 w-full" @click="$emit('agendar', abogado)">Agendar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LawyerCard',
  props: {
    abogado: { type: Object, required: true }
  },
  emits: ['agendar']
}
</script>
