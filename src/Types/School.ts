import { Department } from '@/Types/Department'

export interface School {
  name: string
  departments: Array<Department>
}