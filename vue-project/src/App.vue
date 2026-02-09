<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'

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

  count.value--
  toast.info(`Valor decrementado para ${count.value}`)
}
</script>

<template>
  <div>Count is: {{ count }}</div>

  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>