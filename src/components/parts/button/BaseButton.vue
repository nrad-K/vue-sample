<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  message: String
  color: String
}>()
const { message, color } = props
const emit = defineEmits(['onClickEvent'])
const isHover = ref(false)
const hoverAction = () => {
  isHover.value = !isHover.value
}
</script>
<template>
  <button
    @click.prevent="emit('onClickEvent')"
    type="button"
    :class="['btn', 'fw-bold', isHover ? 'btn-light text-black' : `btn-${color} text-white`]"
    @mouseover="hoverAction"
    @mouseleave="hoverAction"
  >
    {{ message }}
  </button>
</template>
