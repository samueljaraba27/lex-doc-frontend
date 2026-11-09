<template>
  <div class="card border border-secondary bg-base-200">
    <div class="card-body">
      <span class="text-xs font-semibold uppercase tracking-wider text-primary">{{ nombreArea }}</span>
      <h3 class="card-title font-serif">{{ documento.nombre }}</h3>
      <p class="text-sm text-base-content/70">{{ documento.descripcion }}</p>
      <span class="badge badge-outline badge-sm">Revisado por abogados</span>
      <div class="card-actions mt-2 items-center justify-between">
        <span class="font-semibold text-primary">{{ precioFormateado }}</span>
        <RouterLink :to="{ name: 'asistente', params: { id: documento.id } }" class="btn btn-primary btn-sm">
          Crear
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import areas from '@/data/areas'
import { formatoPrecio } from '@/utils/formato'

export default {
  name: 'DocumentCard',
  props: {
    documento: { type: Object, required: true }
  },
  computed: {
    nombreArea() {
      const area = areas.find((a) => a.id === this.documento.area)
      return area ? area.nombre : ''
    },
    precioFormateado() {
      return formatoPrecio(this.documento.precio)
    }
  }
}
</script>
