import { Grade } from '@/Types/Grade'

export interface Department {
  id: number
  name: string
  grades: Array<Grade>
}