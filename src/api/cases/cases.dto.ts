export type CaseDto = {
  additional: {
    date: string
    desc?: string
  }
  id: number
  subject: string
}

export type CasesDto = {
  data: CaseDto[]
}
