<script setup lang="ts">
import { getUsers } from '@/utils/mocks'
import UserCard from '@/components/templates/card/UserCard.vue'
import LayoutView from './LayoutView.vue'
const users = getUsers()
</script>
<template>
  <LayoutView>
    <div class="row">
      <div v-for="user in users" :key="user.id" class="col-sm-4 my-2">
        <UserCard v-bind:user="user" />
      </div>
    </div>
  </LayoutView>
</template>
