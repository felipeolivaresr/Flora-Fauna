<template>
  <div class="container py-5">
    <!-- Btn Volver -->
    <router-link to="/principal" class="btn btn-secondary mb-4">
      ← Volver a la lista
    </router-link>

    <!-- Ldng  -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="!especieSeleccionada" class="alert alert-danger">
      Especie no encontrada
    </div>
    
    <!-- Detalle -->
    <template v-else>
      <DetalleEspecie :especie="especieSeleccionada" />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DetalleEspecie from '@/components/DetalleEspecie.vue'

export default {
  name: 'PaginaDetalle',
  components: {
    DetalleEspecie
  },
  computed: {
    ...mapState(['especieSeleccionada', 'loading'])
  },
  mounted() {
    const id = this.$route.params.id
    this.$store.dispatch('fetchEspecieById', id)
  }
}
</script>