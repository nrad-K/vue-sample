export interface User {
  id: number
  username: string
  email: string
  password: string
  phone: string
  company: string
  website: string
}

export type Users = User[]
