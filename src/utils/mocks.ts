import users from '@/mocks/users.json'
import todos from '@/mocks/todos.json'
import type { Users } from '@/types/user'
import type { Todos } from '@/types/todo'

export const getUsers = (): Users => {
  const result: Users = users.map((user) => {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      company: user.company,
      password: user.password,
      phone: user.phone,
      website: user.website
    }
  })
  return result
}

export const getTodo = (userId: number): Todos => {
  const result: Todos = todos.filter((todo) => {
    return userId === todo.userId
  })
  return result
}

const getLastTodoId = (): number => {
  return todos[todos.length - 1].id
}

export const postTodo = (userId: number, title: string): void => {
  const lastTodoId = getLastTodoId()
  const newTodo = {
    userId: userId,
    id: lastTodoId + 1,
    title: title,
    completed: false
  }
  todos.push(newTodo)
  // db insert
  console.log('DB INSERT:')
  console.log(newTodo)
}
