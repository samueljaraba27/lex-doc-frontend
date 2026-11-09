<template>
  <div
    class="card border"
    :class="plan.destacado ? 'border-primary bg-primary text-primary-content' : 'border-secondary bg-base-200'"
  >
    <div class="card-body">
      <h3 class="card-title font-serif">
        {{ plan.nombre }}
        <span v-if="plan.destacado" class="badge badge-neutral">Más elegido</span>
      </h3>
      <p class="text-3xl font-bold" :class="plan.destacado ? '' : 'text-primary'">
        {{ precioFormateado }}<span class="text-sm font-normal">{{ plan.periodo }}</span>
      </p>
      <ul class="my-3 space-y-2 text-sm">
        <li v-for="beneficio in plan.beneficios" :key="beneficio">✓ {{ beneficio }}</li>
      </ul>
      <RouterLink
        :to="{ name: 'pago', query: { plan: plan.id } }"
        class="btn btn-block"
        :class="plan.destacado ? 'btn-neutral' : 'btn-primary'"
      >
        Elegir
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { formatoPrecio } from '@/utils/formato'

export default {
  name: 'PlanCard',
  props: {
    plan: { type: Object, required: true }
  },
  computed: {
    precioFormateado() {
      return formatoPrecio(this.plan.precio)
    }
  }
}
</script>
