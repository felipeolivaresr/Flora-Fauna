<template>
    <div class="not-found">
      <div class="container py-5 text-center">
        <h1 class="display-1">404</h1>
        <p class="lead mb-4">Página no encontrada</p>
        <router-link to="/" class="btn btn-primary">
          Volver al inicio
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>

  