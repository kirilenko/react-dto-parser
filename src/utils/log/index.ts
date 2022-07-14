import lodashTemplate from 'lodash/template'

import env from 'constants/env'
import { logCases, PaletteName, timeToLive } from './log.constants'

type CacheRecord = {
  repetitionsCount: number
  timestamp: number
}

const cache: Record<string, CacheRecord> = {}

type Log = (key: string, paletteName?: PaletteName) => (...p: unknown[]) => void

const log: Log = (key, paletteName = 'default') => {
  if (!env.debugLogEnabled || !key) {
    return () => {}
  }

  const timestamp = Date.now()
  const repeated: boolean =
    !!cache[key] && timestamp - cache[key].timestamp < timeToLive

  const repetitionsCount = repeated ? cache[key].repetitionsCount + 1 : 0
  cache[key] = { repetitionsCount, timestamp }

  const currentRepetitionsCount = repetitionsCount > 2 ? 2 : repetitionsCount
  const currentCase = logCases[paletteName][currentRepetitionsCount]
  return (...args) => {
    const argsAsString = args.length
      ? ` ⟶ ${args.map((p) => `${p}`).join(', ')}`
      : ''

    const currentCaseMessage =
      currentCase.message ||
      (currentCase.template
        ? lodashTemplate(currentCase.template)({ repetitionsCount })
        : '')

    const message: [string, string] = [
      `%c • ${key + currentCaseMessage + argsAsString}`,
      `color:${currentCase.color}`,
    ]

    console.log(...message) // eslint-disable-line no-console
  }
}

export default log
