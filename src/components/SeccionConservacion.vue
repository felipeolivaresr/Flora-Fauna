<template>
    <div class="conservation">
      <h3 class="conservation__title">Iniciativas de Conservación</h3>
      
      <!-- comentarios -->
      <div class="conservation__comments">
        <div 
          v-for="comentario in comentarios" 
          :key="comentario.id"
          class="conservation__comment"
        >
          <p class="conservation__text">{{ comentario.texto }}</p>
          <small class="conservation__date">{{ comentario.fecha }}</small>
        </div>
      </div>
  
      <!-- Formulario de comentarios -->
      <form @submit.prevent="agregarComentario" class="conservation__form">
        <div class="mb-3">
          <label class="form-label">Nuevo comentario:</label>
          <textarea 
            v-model="nuevoComentario" 
            class="form-control conservation__input"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-success conservation__button">
          Agregar Comentario
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'SeccionConservacion',
    props: {
      especieId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        nuevoComentario: ''
      }
    },
    computed: {
      ...mapGetters(['getComentariosByEspecie']),
      comentarios() {
        return this.getComentariosByEspecie(this.especieId)
      }
    },
    methods: {
      agregarComentario() {
        if (this.nuevoComentario.trim()) {
          this.$store.dispatch('agregarComentario', {
            especieId: this.especieId,
            comentario: this.nuevoComentario
          })
          this.nuevoComentario = ''
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .conservation {
    &__title {
      margin-bottom: 1.5rem;
    }
  
    &__comments {
      margin-bottom: 2rem;
    }
  
    &__comment {
      padding: 1rem;
      border: 1px solid #dee2e6;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      background-color: #f8f9fa;
    }
  
    &__text {
      margin-bottom: 0.5rem;
    }
  
    &__date {
      color: #6c757d;
    }
  
    &__form {
      background-color: #f8f9fa;
      padding: 1.5rem;
      border-radius: 0.5rem;
    }
  
    &__button {
      width: 100%;
    }
  }
  </style>