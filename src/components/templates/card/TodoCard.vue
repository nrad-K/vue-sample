<script setup lang="ts">
import BaseCard from '@/components/parts/card/BaseCard.vue'
import BaseButton from '@/components/parts/button/BaseButton.vue'
import type { Todos } from '@/types/todo'
import BaseForm from '@/components/parts/form/BaseForm.vue'
import { ref } from 'vue'
import { useStoreUser } from '@/stores/user'
import { postTodo } from '@/utils/mocks'

interface Props {
  todos: Todos
}

const props = defineProps<Props>()
const { todos } = props

const todoState = ref('')
const handleOnClick = () => {
  const userStore = useStoreUser()
  const { id } = userStore.user
  postTodo(id, todoState.value)
}
</script>
<template>
  <BaseCard color="primary">
    <template v-slot:header>
      <div class="fw-bold text-white">Todo List</div>
    </template>

    <template v-slot:body>
      <div>
        <BaseForm
          title="Todo"
          placeholder="Todo item todo item"
          id="todo"
          @change-input-event="todoState = $event"
        />
        <BaseButton color="danger" message="SAVE" @on-click-event="handleOnClick" />
      </div>

      <table class="table">
        <thead>
          <tr class="table-primary">
            <th scope="col">No.</th>
            <th scope="col">Todo item</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="py-5" v-for="todo in todos" :key="todo.id">
            <td scope="row">{{ todo.id }}</td>
            <td>{{ todo.title }}</td>
            <td>{{ todo.completed ? 'Finished' : 'In progress' }}</td>
            <td>
              <BaseButton v-show="!todo.completed" color="success" message="FINISHED" />
            </td>
          </tr>
        </tbody>
      </table>
    </template>

    <template v-slot:footer> </template>
  </BaseCard>
</template>

<style>
.table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
td {
  font-weight: 100;
}
th {
  font-weight: bold;
}
</style>
