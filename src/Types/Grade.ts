import { Subject } from '@/Types/Subject'

export interface Grade {
  id: number
  name: string
  subjects: Array<Subject>
}