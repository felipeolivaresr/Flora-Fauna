<template>
  <div class="container py-5">
    <h1 class="text-center mb-4">Especies</h1>
    
    <Filtros 
      :especies="especies"
      @filtrar="aplicarFiltros"
    />
    
    <ListaEspecies :especies="especiesFiltradas" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ListaEspecies from '@/components/ListaEspecies.vue'
import Filtros from '@/components/Filtros.vue'

export default {
  name: 'PaginaPrincipal',
  components: {
    ListaEspecies,
    Filtros
  },
  data() {
    return {
      filtrosActivos: {
        tipo: '',
        estadoConservacion: '',
        ubicacion: '',
        ordenamiento: 'nombreAsc'
      }
    }
  },
  computed: {
    ...mapState(['especies']),
    especiesFiltradas() {
      let resultado = [...this.especies]

      // Aplica filtro por tipo
      if (this.filtrosActivos.tipo) {
        resultado = resultado.filter(e => e.tipo === this.filtrosActivos.tipo)
      }

      // Aplica filtro por estado de conservación
      if (this.filtrosActivos.estadoConservacion) {
        resultado = resultado.filter(
          e => e.estadoConservacion === this.filtrosActivos.estadoConservacion
        )
      }

      // Aplica filtro por ubi
      if (this.filtrosActivos.ubicacion) {
        resultado = resultado.filter(
          e => e.ubicacion === this.filtrosActivos.ubicacion
        )
      }

      // Aplica orden
      resultado.sort((a, b) => {
        switch (this.filtrosActivos.ordenamiento) {
          case 'nombreAsc':
            return a.nombre.localeCompare(b.nombre)
          case 'nombreDesc':
            return b.nombre.localeCompare(a.nombre)
          case 'estadoConservacion':
            return a.estadoConservacion.localeCompare(b.estadoConservacion)
          case 'tipo':
            return a.tipo.localeCompare(b.tipo)
          default:
            return 0
        }
      })

      return resultado
    }
  },
  methods: {
    aplicarFiltros(nuevosFiltros) {
      console.log('Nuevos filtros:', nuevosFiltros) // Para debugging
      this.filtrosActivos = { ...nuevosFiltros }
    }
  }
}
</script>