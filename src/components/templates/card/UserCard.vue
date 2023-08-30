<script setup lang="ts">
import type { User } from '@/types/user'
import BaseCard from '@/components/parts/card/BaseCard.vue'
type Props = { user: User }
const props = defineProps<Props>()

const { id, company, username, email, phone, website } = props.user
</script>

<template>
  <BaseCard color="light">
    <template v-slot:header>{{ company }}</template>
    <template v-slot:body>
      <ul class="list-group">
        <li class="fw-bold list-group-item d-flex justify-content-between align-items-center">
          ID
          <span class="badge bg-success rounded-pill">{{ id }}</span>
        </li>
        <li class="fw-bold list-group-item d-flex justify-content-between align-items-center">
          User Name
          <span class="badge bg-success rounded-pill">{{ username }}</span>
        </li>
        <li class="fw-bold list-group-item d-flex justify-content-between align-items-center">
          Email
          <span class="badge bg-success rounded-pill">{{ email }}</span>
        </li>
        <li class="fw-bold list-group-item d-flex justify-content-between align-items-center">
          Phone
          <span class="badge bg-success rounded-pill">{{ phone }}</span>
        </li>
      </ul>
    </template>
    <template v-slot:footer>
      <a :href="website" class="stretched-link">Go somewhere</a>
    </template>
  </BaseCard>
</template>
