<script setup lang="ts">
import BaseCard from '@/components/parts/card/BaseCard.vue'
import BaseForm from '@/components/parts/form/BaseForm.vue'
import BaseButton from '@/components/parts/button/BaseButton.vue'
import { reactive } from 'vue'
import { authUser } from '@/utils/auth'
import router from '@/router/index'

const userState = reactive({
  username: '',
  password: ''
})

const handleOnClick = () => {
  const auth = authUser(userState.username, userState.password)
  if (auth !== undefined) {
    router.push({ name: 'auth' })
  }
}
</script>
<template>
  <BaseCard color="light">
    <template v-slot:header>
      <p class="text-secondary fw-bold">USER LOGIN</p>
    </template>
    <template v-slot:body>
      <div class="text-secondary">
        <BaseForm
          title="User Name"
          placeholder="user name"
          id="username"
          @change-input-event="userState.username = $event"
        />
        <BaseForm
          title="Password"
          placeholder="password"
          id="password"
          @change-input-event="userState.password = $event"
        />
      </div>
    </template>
    <template v-slot:footer>
      <BaseButton @on-click-event="handleOnClick" message="Login" color="primary" />
    </template>
  </BaseCard>
</template>
