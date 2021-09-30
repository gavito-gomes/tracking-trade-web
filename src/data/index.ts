import faker from 'faker'
import { BarValueType } from '../components/BarChart'

export type InspectionType = {
  name: string
  planned: number
  completed: number
  lastUpdate?: Date
}

let inspections: Array<InspectionType> = []

for (let i = 0; i < 10; i++) {
  let planned = faker.datatype.number({ min: 10, max: 30 })
  inspections.push({
    name: faker.name.findName(),
    planned,
    completed: faker.datatype.number({ min: 1, max: planned }),
    lastUpdate: faker.date.soon(),
  })
}

let eventHistory = Array<BarValueType<string, number>>()

for (let i = 0; i < 20; i++) {
  eventHistory.push({
    valueX: `${new Date().getDate() - i}/${('00' + new Date().getMonth()).slice(
      -2
    )}`,
    bars: [
      {
        barTypeId: 0,
        valueY: Math.round(Math.random() * 20 + 1),
      },
      {
        barTypeId: 1,
        valueY: Math.round(Math.random() * 20 + 1),
      },
      {
        barTypeId: 2,
        valueY: Math.round(Math.random() * 20 + 1),
      },
    ],
  })
}

const data = {
  inspections,
  eventHistory,
}

export default data
