<template>
  <section class="px-6 py-12 lg:px-12">
    <PageHeader titulo="Habla con un abogado" subtitulo="Resuelve dudas o pide la revisión de tu documento." />

    <div role="tablist" class="tabs tabs-boxed mb-6 w-fit bg-base-200">
      <button
        v-for="m in modalidades"
        :key="m.valor"
        role="tab"
        class="tab"
        :class="{ 'tab-active': modalidad === m.valor }"
        @click="modalidad = m.valor"
      >
        {{ m.texto }}
      </button>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <LawyerCard v-for="abogado in abogadosFiltrados" :key="abogado.id" :abogado="abogado" @agendar="abrirModal" />
    </div>

    <!-- Ventana para agendar -->
    <dialog class="modal" :class="{ 'modal-open': seleccionado }">
      <div class="modal-box bg-base-200">
        <h3 class="font-serif text-xl font-bold">Agendar con {{ seleccionado ? seleccionado.nombre : '' }}</h3>

        <div v-if="!confirmado" class="mt-4 space-y-3">
          <div class="form-control">
            <label class="label" for="fecha"><span class="label-text">Fecha y hora</span></label>
            <input id="fecha" v-model="fecha" type="datetime-local" class="input input-bordered" />
          </div>
          <p v-if="error" class="text-sm text-error" role="alert">{{ error }}</p>
          <div class="modal-action">
            <button class="btn btn-ghost" @click="cerrarModal">Cancelar</button>
            <button class="btn btn-primary" @click="confirmar">Confirmar</button>
          </div>
        </div>

        <div v-else class="mt-4">
          <div class="alert alert-success"><span>¡Listo! Tu cita quedó registrada.</span></div>
          <div class="modal-action">
            <button class="btn btn-primary" @click="cerrarModal">Cerrar</button>
          </div>
        </div>
      </div>
    </dialog>
  </section>
</template>

<script>
import abogados from '@/data/abogados'
import LawyerCard from '@/components/LawyerCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'AbogadosView',
  components: { LawyerCard, PageHeader },
  data() {
    return {
      abogados,
      modalidad: 'chat',
      modalidades: [
        { valor: 'chat', texto: 'Chat' },
        { valor: 'video', texto: 'Videollamada' },
        { valor: 'revision', texto: 'Revisión de documento' }
      ],
      seleccionado: null,
      fecha: '',
      confirmado: false,
      error: ''
    }
  },
  computed: {
    abogadosFiltrados() {
      return this.abogados.filter((a) => a.modalidades.includes(this.modalidad))
    }
  },
  methods: {
    abrirModal(abogado) {
      this.seleccionado = abogado
      this.fecha = ''
      this.error = ''
      this.confirmado = false
    },
    cerrarModal() {
      this.seleccionado = null
    },
    confirmar() {
      if (!this.fecha) {
        this.error = 'Elige una fecha y hora.'
        return
      }
      // TODO: enviar la cita a la API
      this.confirmado = true
    }
  }
}
</script>
