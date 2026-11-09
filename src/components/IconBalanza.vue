<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="grosor"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3v18M5 21h14M6 7h12M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
  </svg>
</template>

<script>
// Balanza de la justicia (símbolo de la abogacía)
export default {
  name: 'IconBalanza',
  props: {
    size: { type: Number, default: 32 },
    grosor: { type: Number, default: 1.6 }
  }
}
</script>
