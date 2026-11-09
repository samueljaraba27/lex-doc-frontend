<template>
  <section class="grid gap-10 px-6 py-12 lg:grid-cols-[1.2fr_1fr] lg:px-12">
    <div>
      <PageHeader titulo="Preguntas frecuentes" />
      <FaqItem v-for="item in faq" :key="item.pregunta" :pregunta="item.pregunta" :respuesta="item.respuesta" />
    </div>

    <div class="space-y-6">
      <div class="card border border-secondary bg-base-200">
        <form class="card-body" @submit.prevent="enviar">
          <h2 class="font-serif text-xl font-bold">¿Necesitas ayuda?</h2>
          <p class="text-sm text-base-content/70">Escríbenos y te orientamos.</p>

          <div v-if="enviado" class="alert alert-success"><span>¡Mensaje enviado! Te responderemos pronto.</span></div>
          <template v-else>
            <label for="mensaje" class="sr-only">Mensaje</label>
            <textarea id="mensaje" v-model="mensaje" rows="4" placeholder="Cuéntanos tu duda…" class="textarea textarea-bordered"></textarea>
            <button type="submit" class="btn btn-primary">Enviar mensaje</button>
          </template>
        </form>
      </div>

      <div class="grid grid-cols-3 gap-3 text-center text-xs">
        <div v-for="sello in sellos" :key="sello" class="rounded-box border border-secondary p-3">{{ sello }}</div>
      </div>

      <p class="text-xs text-base-content/60">
        Los documentos son modelos de apoyo y no sustituyen la asesoría de un abogado.
      </p>
    </div>
  </section>
</template>

<script>
import faq from '@/data/faq'
import FaqItem from '@/components/FaqItem.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'AyudaView',
  components: { FaqItem, PageHeader },
  data() {
    return {
      faq,
      mensaje: '',
      enviado: false,
      sellos: ['Datos protegidos', 'Aviso legal', 'Contacto']
    }
  },
  methods: {
    enviar() {
      if (!this.mensaje.trim()) return
      // TODO: enviar el mensaje a la API
      this.enviado = true
    }
  }
}
</script>
