import { apiConfigs } from 'api/config'
import { mockAdapter } from 'utils/axios'
import { withDelay } from 'utils/delay'
import { CaseDto } from './cases.dto'

const cases: CaseDto[] = [
  {
    additional: {
      date: 'Fri, 02 Feb 1996 03:04:05 GMT',
    },
    id: 3,
    subject: 'Third case',
  },
  {
    additional: {
      date: 'Fri, 02 Feb 1996 03:04:05 GMT',
    },
    id: 2,
    subject: 'Second case',
  },
  {
    additional: {
      date: 'Fri, 02 Feb 1996 03:04:05 GMT',
      desc: "Let's go!",
    },
    id: 1,
    subject: 'First case',
  },
]

apiConfigs.casesReading &&
  mockAdapter
    .onGet(apiConfigs.casesReading.url)
    .reply(
      withDelay([200, { cases }], apiConfigs.casesReading.mock.timeout || 0),
    )
