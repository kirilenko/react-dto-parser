import { Dayjs } from 'dayjs'

export type CasesItemModel = {
  details: {
    description: string | null
  }
  id: number
  subject: string
  timestamp: Dayjs
}

export type CasesModel = CasesItemModel[]
