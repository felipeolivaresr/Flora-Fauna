<template>
  <div class="inicio">
    <div class="container">
      <div class="row align-items-center min-vh-100">
        <div class="col-md-6">
          <h1 class="display-4 mb-4">Descubre la Flora y Fauna de Chile</h1>
          <p class="lead mb-4">
            Explora la diversidad de especies que habitan en nuestro territorio,
            desde la Cordillera de los Andes hasta el Océano Pacífico.
          </p>
          <router-link to="/principal" class="btn btn-fauna btn-lg">
            Explorar Especies
          </router-link>
        </div>
        <div class="col-md-6">
          <img src="@/assets/img/f-f-logo.jpg" alt="Flora y Fauna" class="inicio__imagen img-fluid rounded shadow">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inicio'
}
</script>

<style lang="scss" scoped>
.inicio {
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  align-items: center;

  &__imagen {
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.05);
    }
  }

  h1 {
    color: #2c3e50;
    font-weight: bold;
  }

  .lead {
    color: #34495e;
  }
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
}
</style>