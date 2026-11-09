<template>
  <span class="badge gap-1" :class="configuracion.clase">● {{ configuracion.texto }}</span>
</template>

<script>
export default {
  name: 'StatusBadge',
  props: {
    estado: { type: String, required: true } // 'listo' | 'borrador' | 'revision'
  },
  computed: {
    configuracion() {
      const opciones = {
        listo: { texto: 'Listo', clase: 'badge-primary' },
        borrador: { texto: 'Borrador', clase: 'badge-ghost' },
        revision: { texto: 'En revisión', clase: 'badge-success' }
      }
      return opciones[this.estado] || opciones.borrador
    }
  }
}
</script>
