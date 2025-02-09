<template>
  <div class="row">
    <div class="col-md-4 mb-4" v-for="especie in especies" :key="especie.id">
      <div class="card h-100">
        <img 
          :src="especie.imagen" 
          class="card-img-top"
          :alt="especie.nombre"
          style="height: 200px; object-fit: cover;"
        >
        <div class="card-body">
          <h5 class="card-title">{{ especie.nombre }}</h5>
          <p class="card-text">
            <span class="badge" 
                  :class="estadoClass(especie.estadoConservacion)">
              {{ especie.estadoConservacion }}
            </span>
          </p>
          <p class="card-text">{{ especie.tipo }}</p>
          <router-link 
            :to="`/detalle/${especie.id}`" 
            class="btn btn-fauna"
          >
            Ver más
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaEspecies',
  props: {
    especies: {
      type: Array,
      required: true
    }
  },
  methods: {
    estadoClass(estado) {
      switch(estado) {
        case 'En Peligro':
          return 'bg-danger'
        case 'Vulnerable':
          return 'bg-warning'
        default:
          return 'bg-success'
      }
    }
  }
}
</script>

<style scoped>
.btn-fauna {
  background-color: #2E7D32; /* Verde oscuro */
  border-color: #2E7D32;
  color: white;
}

.btn-fauna:hover {
  background-color: #1B5E20; /* Verde más oscuro al hover */
  border-color: #1B5E20;
  color: white;
}
</style>