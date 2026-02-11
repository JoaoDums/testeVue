<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'

//foram feitos incrementos e decrementos no contador, e quando o valor é incrementado, uma notificação de sucesso é exibida.  Se o valor for decrementado para 0, uma notificação de aviso é mostrada.
const count = ref(0)
const toast = useToast()

function increment() {
  count.value++
  toast.success(`Valor incrementado para ${count.value}`)
}

function decrement() {

  if (count.value === 0) {
    toast.warning('O contador já está em 0!')
    return
  }
//---------------------------------------------------------------------------------------------------------------------
  count.value--
//   Além disso, se o valor for decrementado para menos de 5, o modal é fechado automaticamente.
  if (count.value < 5) {
    showModal.value = false
  }
  toast.info(`Valor decrementado para ${count.value}`)
}

const showModal = ref(false)

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

</script>


<template>


  <router-view /> 
  
  <div>Count is: {{ count }}</div>

  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>

  <!---------------------------------------------------------------------------------->
  <button v-if="count >= 5" @click="openModal">
    Abrir Modal
  </button>

  <div v-if="showModal" class="overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <h2>Meu Modal</h2>
      <p>Esse é um modal simples em Vue 3.</p>
      <button @click="closeModal">Fechar</button>
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 8px 15px;
  cursor: pointer;
}

/* Fundo escuro */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Caixa do modal */
.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
}
</style>