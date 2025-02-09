<template>
  <nav class="navbar navbar-expand-lg navbar-fauna">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        Flora & Fauna <img width="48" height="48" src="https://img.icons8.com/color/48/fox.png" alt="fox" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/">Inicio</router-link>
          <router-link class="nav-link" to="/principal">Especies</router-link>
          <router-link class="nav-link" to="/contacto">Contacto</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar-fauna {
  background-color: #2E7D32;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  color: white !important;
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.nav-link {
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 500;
  margin: 0 10px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: white !important;
  transform: translateY(-2px);
}

.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.5);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.router-link-active {
  color: white !important;
  position: relative;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .nav-link {
    padding: 10px 0;
    margin: 5px 0;
  }
}
</style>