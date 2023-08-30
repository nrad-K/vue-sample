<script setup lang="ts">
interface Props {
  color: string
}
const props = defineProps<Props>()

const { color } = props
</script>

<template>
  <div :class="['card', 'mb-3', `border-${color}`, 'text-center', 'shadow']">
    <div :class="['card-header', `bg-${color}`]">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div :class="['card-footer', `bg-${color}`]">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
