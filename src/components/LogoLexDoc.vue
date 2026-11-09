<template>
  <RouterLink to="/" class="flex items-center gap-2 text-primary">
    <IconBalanza :size="tamano" />
    <span class="font-serif text-2xl font-bold">LexDoc</span>
  </RouterLink>
</template>

<script>
import IconBalanza from './IconBalanza.vue'

export default {
  name: 'LogoLexDoc',
  components: { IconBalanza },
  props: {
    tamano: { type: Number, default: 32 }
  }
}
</script>
