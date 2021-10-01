import faker from 'faker'
import { BarValueType } from '../components/charts/BarChart'
import { PizzaValueType } from '../components/charts/PizzaChart'
import { colors } from '../styles/constants'

export type ScheduledInspectionType = {
  name: string
  planned: number
  completed: number
  lastUpdate?: Date
}

let scheduledInspections: Array<ScheduledInspectionType> = []

for (let i = 0; i < 10; i++) {
  let planned = faker.datatype.number({ min: 10, max: 30 })
  scheduledInspections.push({
    name: faker.name.findName(),
    planned,
    completed: faker.datatype.number({ min: 1, max: planned }),
    lastUpdate: faker.date.soon(),
  })
}

let eventHistory = Array<BarValueType<string, number>>()

for (let i = 0; i < 10; i++) {
  let date = new Date(Date.now() - 24 * 3600 * 1000 * i)
  eventHistory.push({
    valueX: `${date.getDate()}/${('00' + date.getMonth()).slice(-2)}`,
    bars: [
      {
        barTypeId: 0,
        valueY: Math.round(Math.random() * 19 + 1),
      },
      {
        barTypeId: 1,
        valueY: Math.round(Math.random() * 19 + 1),
      },
      {
        barTypeId: 2,
        valueY: Math.round(Math.random() * 19 + 1),
      },
    ],
  })
}

let inspections: Array<PizzaValueType> = [
  { value: 23, label: 'Realizadas', color: colors.green },
  { value: 14, label: 'Em aberto', color: colors.orange },
  { value: 4, label: 'Não realizadas', color: colors.red },
]

const data = {
  scheduledInspections,
  eventHistory: {
    barTypes: [
      { id: 0, label: 'Label 1', color: colors.blue },
      { id: 1, label: 'Label 2', color: colors.red },
      { id: 2, label: 'Label 3', color: colors.lilac },
    ],
    arrayData: eventHistory,
  },
  inspections,
}

export default data
