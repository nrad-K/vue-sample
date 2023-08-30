<script setup lang="ts">
interface Props {
  title: string
  placeholder: string
  id: string
}
const props = defineProps<Props>()
const { title, placeholder, id } = props

const emit = defineEmits(['changeInputEvent'])
</script>

<template>
  <div class="row mb-3">
    <label :for="id" class="fw-bold col-sm-4 col-form-label">{{ title }}</label>
    <div class="col-sm-8">
      <input
        type="text"
        class="form-control"
        :id="id"
        :placeholder="placeholder"
        @input="emit('changeInputEvent', ($event.target as HTMLInputElement).value)"
      />
    </div>
  </div>
</template>
