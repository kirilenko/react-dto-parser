import {
  dtoParser,
  DtoParserRule,
  Parser,
  parseRequiredField,
  parseUtcDate,
} from 'utils/dtoParser'
import { CaseDto, CasesDto } from './cases.dto'
import { CasesItemModel, CasesModel } from './cases.model'

const caseDtoParserRules: DtoParserRule[] = [
  {
    from: 'additional.date',
    parser: parseUtcDate as Parser,
    to: 'timestamp',
  },
  {
    from: 'additional.desc',
    parser: (p = null) => p,
    to: 'details.description',
  },
  {
    from: 'id',
    parser: parseRequiredField,
    to: 'id',
  },
  {
    from: 'subject',
    parser: parseRequiredField,
    to: 'subject',
  },
]

const caseParser = (dtos: CaseDto[]): CasesModel => {
  if (!dtos || !Array.isArray(dtos)) {
    throw Error()
  }

  return dtos.map((dto) =>
    dtoParser<CasesItemModel, CaseDto>(
      dto,
      caseDtoParserRules as DtoParserRule[],
    ),
  ) as CasesModel
}

const casesDtoParserRules: DtoParserRule[] = [
  {
    from: 'cases',
    parser: caseParser as Parser,
    to: 'cases',
  },
]

type Model = { cases: CasesModel }
export const casesParser = (dto: CasesDto): Model =>
  dtoParser<Model, CasesDto>(dto, casesDtoParserRules as DtoParserRule[])
