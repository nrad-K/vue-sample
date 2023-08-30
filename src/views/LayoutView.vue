<script setup lang="ts"></script>
<template>
  <ul class="nav nav-tabs">
    <li class="nav-item active">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/users" class="nav-link">Users</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/todo" class="nav-link">Todo</RouterLink>
    </li>
  </ul>
  <slot></slot>
</template>
