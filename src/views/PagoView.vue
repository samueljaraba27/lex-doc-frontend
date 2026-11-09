<template>
  <section class="mx-auto grid max-w-5xl gap-8 px-6 py-12 lg:grid-cols-[1fr_20rem]">
    <div>
      <PageHeader titulo="Finalizar compra" subtitulo="Pago seguro con datos cifrados." />

      <div v-if="pagado" class="alert alert-success">
        <span>¡Pago registrado! Ya puedes ver tus documentos.</span>
        <RouterLink to="/cuenta" class="btn btn-sm">Ir a mi cuenta</RouterLink>
      </div>

      <form v-else class="space-y-4" @submit.prevent="pagar">
        <div role="tablist" class="tabs tabs-boxed w-fit bg-base-200">
          <button
            v-for="m in metodos"
            :key="m.valor"
            type="button"
            role="tab"
            class="tab"
            :class="{ 'tab-active': metodo === m.valor }"
            @click="metodo = m.valor"
          >
            {{ m.texto }}
          </button>
        </div>

        <div class="form-control">
          <label class="label" for="nombre"><span class="label-text">Nombre completo</span></label>
          <input id="nombre" v-model="form.nombre" type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label" for="correo"><span class="label-text">Correo electrónico</span></label>
          <input id="correo" v-model="form.correo" type="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label" for="dato"><span class="label-text">{{ etiquetaMetodo }}</span></label>
          <input id="dato" v-model="form.dato" type="text" class="input input-bordered" />
        </div>

        <p v-if="error" class="text-sm text-error" role="alert">{{ error }}</p>
        <button type="submit" class="btn btn-primary w-full sm:w-auto">Pagar ahora</button>
      </form>
    </div>

    <aside class="card h-fit border border-secondary bg-base-200">
      <div class="card-body">
        <h2 class="font-serif text-lg font-bold">Resumen</h2>
        <div v-if="item" class="flex justify-between text-sm">
          <span>{{ item.nombre }}</span>
          <span>{{ precioFormateado }}</span>
        </div>
        <p v-else class="text-sm text-base-content/70">No hay productos seleccionados.</p>
        <div class="divider my-1"></div>
        <div class="flex justify-between font-bold text-primary">
          <span>Total</span>
          <span>{{ precioFormateado }}</span>
        </div>
        <p class="mt-2 text-center text-xs text-base-content/60">Pago cifrado · Tus datos están protegidos</p>
      </div>
    </aside>
  </section>
</template>

<script>
import documentos from '@/data/documentos'
import planes from '@/data/planes'
import PageHeader from '@/components/PageHeader.vue'
import { formatoPrecio } from '@/utils/formato'

export default {
  name: 'PagoView',
  components: { PageHeader },
  data() {
    return {
      metodo: 'tarjeta',
      metodos: [
        { valor: 'tarjeta', texto: 'Tarjeta' },
        { valor: 'pse', texto: 'PSE' },
        { valor: 'nequi', texto: 'Nequi' }
      ],
      form: { nombre: '', correo: '', dato: '' },
      error: '',
      pagado: false
    }
  },
  computed: {
    // Lo que se compra: un documento (?doc=) o un plan (?plan=)
    item() {
      const { doc, plan } = this.$route.query
      if (doc) return documentos.find((d) => d.id === doc)
      if (plan) return planes.find((p) => p.id === plan)
      return null
    },
    precioFormateado() {
      return this.item ? formatoPrecio(this.item.precio) : formatoPrecio(0)
    },
    etiquetaMetodo() {
      const etiquetas = { tarjeta: 'Número de tarjeta', pse: 'Banco', nequi: 'Número de celular' }
      return etiquetas[this.metodo]
    }
  },
  methods: {
    pagar() {
      if (!this.item) {
        this.error = 'Primero elige un documento o un plan.'
        return
      }
      if (!this.form.nombre || !this.form.correo || !this.form.dato) {
        this.error = 'Completa todos los campos.'
        return
      }
      this.error = ''
      // TODO: conectar con la pasarela de pagos (la tarjeta nunca debe guardarse en el frontend)
      this.pagado = true
    }
  }
}
</script>
