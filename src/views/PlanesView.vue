<template>
  <section class="px-6 py-12 lg:px-12">
    <PageHeader titulo="Planes y precios" subtitulo="Elige la opción que mejor se ajusta a lo que necesitas." />
    <div class="grid gap-6 md:grid-cols-3">
      <PlanCard v-for="plan in planes" :key="plan.id" :plan="plan" />
    </div>
  </section>
</template>

<script>
import planes from '@/data/planes'
import PlanCard from '@/components/PlanCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'PlanesView',
  components: { PlanCard, PageHeader },
  data() {
    return { planes }
  }
}
</script>
