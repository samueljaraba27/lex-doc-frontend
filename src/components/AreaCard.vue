<template>
  <RouterLink
    :to="{ name: 'catalogo', query: { area: area.id } }"
    class="card border border-secondary bg-base-200 transition hover:border-primary"
  >
    <div class="card-body">
      <span class="flex h-10 w-10 items-center justify-center rounded-full border border-primary font-serif font-bold text-primary">
        {{ area.inicial }}
      </span>
      <h3 class="card-title font-serif">{{ area.nombre }}</h3>
      <p class="text-sm text-base-content/70">{{ area.descripcion }}</p>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: 'AreaCard',
  props: {
    area: { type: Object, required: true }
  }
}
</script>
