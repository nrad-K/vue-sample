import type { User } from '@/types/user'
import { getUsers } from './mocks'
import { useStoreUser } from '@/stores/user'

export const authUser = (username: string, password: string): User | undefined => {
  const users = getUsers()
  const matchUsers = users.filter((user) => {
    return user.username === username && user.password === password
  })
  if (matchUsers.length > 0) {
    const userStore = useStoreUser()
    userStore.$patch({
      isAuthenticated: true,
      user: matchUsers[0]
    })
    return matchUsers[0]
  }
  return undefined
}
