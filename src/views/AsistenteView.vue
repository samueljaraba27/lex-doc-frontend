<template>
  <section class="mx-auto max-w-3xl px-6 py-12">
    <div v-if="!documento" class="alert alert-warning">
      <span>No encontramos ese documento.</span>
      <RouterLink to="/catalogo" class="btn btn-sm">Volver al catálogo</RouterLink>
    </div>

    <div v-else>
      <p class="text-sm uppercase tracking-widest text-base-content/60">{{ documento.nombre }}</p>
      <h1 class="mb-6 font-serif text-3xl font-bold">{{ pasos[paso - 1] }}</h1>

      <StepsAsistente :pasos="pasos" :actual="paso" class="mb-8" />

      <form class="space-y-4" @submit.prevent="siguiente">
        <!-- Paso 1 -->
        <div v-if="paso === 1" class="space-y-4">
          <div class="form-control">
            <label class="label" for="nombre"><span class="label-text">Nombre completo</span></label>
            <input id="nombre" v-model="form.nombre" type="text" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label" for="cedula"><span class="label-text">Número de documento</span></label>
            <input id="cedula" v-model="form.cedula" type="text" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label" for="ciudad"><span class="label-text">Ciudad</span></label>
            <input id="ciudad" v-model="form.ciudad" type="text" class="input input-bordered" />
          </div>
        </div>

        <!-- Paso 2 -->
        <div v-if="paso === 2" class="space-y-4">
          <div class="form-control">
            <label class="label" for="entidad"><span class="label-text">¿A qué entidad va dirigido?</span></label>
            <input id="entidad" v-model="form.entidad" type="text" placeholder="Ej: Secretaría de Movilidad" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label" for="solicitud"><span class="label-text">¿Qué solicitas?</span></label>
            <textarea id="solicitud" v-model="form.solicitud" rows="4" placeholder="Cuéntalo con tus palabras…" class="textarea textarea-bordered"></textarea>
          </div>
        </div>

        <!-- Paso 3 -->
        <div v-if="paso === 3" class="form-control">
          <label class="label" for="hechos"><span class="label-text">Cuenta los hechos que motivan tu solicitud</span></label>
          <textarea id="hechos" v-model="form.hechos" rows="6" class="textarea textarea-bordered"></textarea>
        </div>

        <!-- Paso 4 -->
        <div v-if="paso === 4">
          <p class="mb-4 text-base-content/70">Revisa cómo quedó tu documento antes de finalizar.</p>
          <DocumentoPreview
            :titulo="documento.nombre"
            :nombre="form.nombre"
            :cedula="form.cedula"
            :ciudad="form.ciudad"
            :entidad="form.entidad"
            :solicitud="form.solicitud"
            :hechos="form.hechos"
          />
        </div>

        <p v-if="error" class="text-sm text-error" role="alert">{{ error }}</p>

        <div class="flex justify-between pt-4">
          <button type="button" class="btn btn-outline btn-primary" :disabled="paso === 1" @click="atras">Atrás</button>
          <button type="submit" class="btn btn-primary">{{ paso === pasos.length ? 'Finalizar' : 'Continuar' }}</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import documentos from '@/data/documentos'
import StepsAsistente from '@/components/StepsAsistente.vue'
import DocumentoPreview from '@/components/DocumentoPreview.vue'

export default {
  name: 'AsistenteView',
  components: { StepsAsistente, DocumentoPreview },
  data() {
    return {
      paso: 1,
      error: '',
      pasos: ['Tus datos', 'Entidad y solicitud', 'Hechos', 'Revisión'],
      // Campos obligatorios de cada paso
      camposObligatorios: {
        1: ['nombre', 'cedula', 'ciudad'],
        2: ['entidad', 'solicitud'],
        3: ['hechos'],
        4: []
      },
      form: { nombre: '', cedula: '', ciudad: '', entidad: '', solicitud: '', hechos: '' }
    }
  },
  computed: {
    documento() {
      return documentos.find((doc) => doc.id === this.$route.params.id)
    }
  },
  methods: {
    pasoValido() {
      const campos = this.camposObligatorios[this.paso]
      return campos.every((campo) => this.form[campo].trim() !== '')
    },
    siguiente() {
      if (!this.pasoValido()) {
        this.error = 'Por favor completa todos los campos para continuar.'
        return
      }
      this.error = ''
      if (this.paso < this.pasos.length) {
        this.paso++
      } else {
        this.finalizar()
      }
    },
    atras() {
      this.error = ''
      if (this.paso > 1) this.paso--
    },
    finalizar() {
      // Enviamos los datos a la pantalla "Listo" por la URL.
      // TODO: cuando exista la API, guardar el documento en el servidor.
      this.$router.push({ name: 'listo', query: { doc: this.documento.id, ...this.form } })
    }
  }
}
</script>
