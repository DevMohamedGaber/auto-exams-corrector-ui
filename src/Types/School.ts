import { Department } from '@/Types/Department'

export interface School {
  id: number
  name: string
  departments: Array<Department>
}