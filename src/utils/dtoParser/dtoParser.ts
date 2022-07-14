import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import get from 'lodash/get'
import set from 'lodash/set'

export type Parser = (p: unknown) => unknown

export type DtoParserRule = {
  from: string | string[]
  parser?: Parser
  to: string
}

// TODO: add error-type (parsing-error (in useApiListeners)):
export const dtoParser = <
  Model extends Record<string, unknown>,
  DTO extends Record<string, unknown>,
>(
  dto: DTO,
  rules: DtoParserRule[],
): Model =>
  rules.reduce((acc, cur: DtoParserRule) => {
    if (Array.isArray(cur.from)) {
      if (!cur.parser) {
        throw Error()
      }

      const dtoValues = cur.from.map((p) => get(dto, p))
      const newValue = cur.parser(dtoValues)
      return set(acc, cur.to, newValue)
    }

    const dtoValue = get(dto, cur.from)
    const newValue = cur.parser ? cur.parser(dtoValue) : dtoValue
    return set(acc, cur.to, newValue)
  }, {}) as Model

export const parseRequiredField = (dto: unknown): unknown => {
  if (dto === undefined) {
    throw Error()
  }

  return dto
}

export const parseUtcDate = (dto: string): Dayjs => {
  if (dto === undefined) {
    throw Error()
  }

  dayjs.extend(utc)
  const model = dayjs.utc(dto)
  if (!model.isValid()) {
    throw Error()
  }

  return model
}
