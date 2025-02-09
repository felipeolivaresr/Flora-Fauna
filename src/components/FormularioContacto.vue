<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="enviarFormulario">
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input 
                type="text" 
                class="form-control" 
                id="nombre"
                v-model="formulario.nombre"
                required
              >
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Correo electrónico</label>
              <input 
                type="email" 
                class="form-control" 
                id="email"
                v-model="formulario.email"
                required
              >
            </div>

            <div class="mb-3">
              <label for="asunto" class="form-label">Asunto</label>
              <input 
                type="text" 
                class="form-control" 
                id="asunto"
                v-model="formulario.asunto"
                required
              >
            </div>

            <div class="mb-3">
              <label for="mensaje" class="form-label">Mensaje</label>
              <textarea 
                class="form-control" 
                id="mensaje"
                rows="5"
                v-model="formulario.mensaje"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormularioContacto',
  data() {
    return {
      formulario: {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      }
    }
  },
  methods: {
    enviarFormulario() {
      // simula envío
      console.log('Formulario enviado:', this.formulario)
      alert('Mensaje enviado con éxito')
      // Limpia form
      this.formulario = {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      }
    }
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border: none;
  border-radius: 15px;
  background-color: #f8f9f3;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #7ab55c, #3d8b40);
}

.form-control {
  border: 2px solid #a8c69f;
  border-radius: 8px;
  padding: 10px;
  background-color: #ffffff;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: #3d8b40;
  box-shadow: 0 0 0 0.2rem rgba(61, 139, 64, 0.25);
}

.form-label {
  color: #2c5530;
  font-weight: 600;
  font-size: 1.1em;
}

.btn-primary {
  background-color: #3d8b40;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  background-color: #2c5530;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(61, 139, 64, 0.2);
}

textarea.form-control {
  min-height: 120px;
}

@media (max-width: 768px) {
  .card {
    margin: 10px;
  }
}
</style>