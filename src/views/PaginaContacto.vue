<template>
  <div class="container py-5">
    <h1 class="text-center mb-4">Contacto</h1>
    <p class="text-center mb-5">
      ¿Tienes alguna pregunta o comentario? ¡Nos encantaría escucharte!
    </p>
    <FormularioContacto />
  </div>
</template>

<script>
import FormularioContacto from '@/components/FormularioContacto.vue'

export default {
  name: 'PaginaContacto',
  components: {
    FormularioContacto
  }
}
</script>