export const timeToLive = 500

export type PaletteName = 'default' | 'error' | 'success'

type LogCase = {
  color: string
  message?: string
  template?: string
}

type LogCases = [LogCase, LogCase, LogCase]

export const logCases: Record<PaletteName, LogCases> = {
  // for rendering case:
  default: [
    { color: 'lightgreen' },
    {
      color: 'lightgreen',
      message: ' - repeat by strict-mode',
    },
    {
      color: 'orange',
      template: ' - extra repeats (<%= repetitionsCount %>)!',
    },
  ],
  error: [{ color: 'red' }, { color: 'red' }, { color: 'red' }],
  success: [{ color: 'skyblue' }, { color: 'red' }, { color: 'red' }],
}
