<template>
  <div class="filtros mb-4">
    <div class="row g-3">
      <!-- Filtro por Tipo -->
      <div class="col-md-3">
        <label class="form-label">Tipo</label>
        <select 
          v-model="filtrosLocales.tipo" 
          class="form-select"
          @change="aplicarFiltros"
        >
          <option value="">Todos</option>
          <option value="Flora">Flora</option>
          <option value="Fauna">Fauna</option>
        </select>
      </div>

      <!-- Filtro por Estado de Conserv. -->
      <div class="col-md-3">
        <label class="form-label">Estado de Conservación</label>
        <select 
          v-model="filtrosLocales.estadoConservacion" 
          class="form-select"
          @change="aplicarFiltros"
        >
          <option value="">Todos</option>
          <option value="En Peligro">En Peligro</option>
          <option value="Vulnerable">Vulnerable</option>
          <option value="Preocupación Menor">Preocupación Menor</option>
        </select>
      </div>

      <!-- Filtro por Ubic. -->
      <div class="col-md-3">
        <label class="form-label">Región de Hábitat</label>
        <select 
          v-model="filtrosLocales.ubicacion" 
          class="form-select"
          @change="aplicarFiltros"
        >
          <option value="">Todas</option>
          <option v-for="ubicacion in ubicacionesUnicas" 
                  :key="ubicacion" 
                  :value="ubicacion">
            {{ ubicacion }}
          </option>
        </select>
      </div>

      <!-- Orden -->
      <div class="col-md-3">
        <label class="form-label">Ordenar por</label>
        <select 
          v-model="filtrosLocales.ordenamiento" 
          class="form-select"
          @change="aplicarFiltros"
        >
          <option value="nombreAsc">Nombre (A-Z)</option>
          <option value="nombreDesc">Nombre (Z-A)</option>
          <option value="estadoConservacion">Estado de Conservación</option>
          <option value="tipo">Tipo</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filtros',
  props: {
    especies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filtrosLocales: {
        tipo: '',
        estadoConservacion: '',
        ubicacion: '',
        ordenamiento: 'nombreAsc'
      }
    }
  },
  computed: {
    ubicacionesUnicas() {
      return [...new Set(this.especies.map(e => e.ubicacion))]
    }
  },
  methods: {
    aplicarFiltros() {
      this.$emit('filtrar', { ...this.filtrosLocales })
    }
  }
}
</script>