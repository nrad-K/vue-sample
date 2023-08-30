<script setup lang="ts">
import LayoutView from './LayoutView.vue'
import { useStoreUser } from '@/stores/user'
const userStore = useStoreUser()
const { username } = userStore.user
</script>
<template>
  <LayoutView>
    <div class="d-flex flex-column vh-100 justify-content-center align-items-center">
      <p class="h1 text-black">Hello {{ username }} !!</p>
      <p class="h3 text-danger">You are authenticated.</p>
    </div>
  </LayoutView>
</template>
