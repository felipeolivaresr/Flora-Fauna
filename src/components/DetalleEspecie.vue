<template>
    <div class="detalle-especie" v-if="especie">
      <div class="card">
        <div class="imagen-container">
          <img 
            :src="especie.imagen" 
            class="card-img-top imagen-detalle"
            :alt="especie.nombre"
          >
        </div>
        <div class="card-body">
          <h2 class="card-title">{{ especie.nombre }}</h2>
          <p class="card-text"><strong>Tipo:</strong> {{ especie.tipo }}</p>
          <p class="card-text"><strong>Ubicación:</strong> {{ especie.ubicacion }}</p>
          <p class="card-text">
            <strong>Estado de conservación:</strong> 
            <span class="badge" :class="estadoClass(especie.estadoConservacion)">
              {{ especie.estadoConservacion }}
            </span>
          </p>
          <p class="card-text">{{ especie.descripcion }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DetalleEspecie',
    props: {
      especie: {
        type: Object,
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
  .imagen-container {
    width: 100%;
    height: 400px; /* Altura fija para la imagen */
    overflow: hidden;
    position: relative;
  }
  
  .imagen-detalle {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    object-position: center; 
  }
  
  .card {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
  }
  
  .card-body {
    padding: 2rem;
  }
  
  .badge {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
  
  @media (max-width: 768px) {
    .imagen-container {
      height: 300px; 
    }
    
    .card-body {
      padding: 1rem;
    }
  }
  </style>