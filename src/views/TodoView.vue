<script setup lang="ts">
import LayoutView from './LayoutView.vue'
import { useStoreUser } from '../stores/user'
import { getTodo } from '../utils/mocks'
import TodoCard from '@/components/templates/card/TodoCard.vue'

const userStore = useStoreUser()
const authUser = userStore.user
const todos = getTodo(authUser.id)
</script>
<template>
  <LayoutView>
    <TodoCard v-bind:todos="todos" />
  </LayoutView>
</template>
