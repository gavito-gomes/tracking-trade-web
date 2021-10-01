import faker from 'faker'
import { BarValueType } from '../components/charts/BarChart'
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
  inspections: [
    { value: 23, label: 'Realizadas', color: colors.green },
    { value: 14, label: 'Em aberto', color: colors.orange },
    { value: 4, label: 'Não realizadas', color: colors.red },
  ],
  inspectionsAverageTime: [
    { label: 'Hoje', value: '9 min' },
    { label: 'Últimos 7 dias', value: '10 min' },
    { label: 'Últimos 30 dias', value: '12 min' },
  ],
  generalActionPlanns: [
    { value: 43, label: 'Realizadas', color: colors.green },
    { value: 12, label: 'Em aberto', color: colors.orange },
    { value: 10, label: 'Não realizadas', color: colors.red },
  ],
  actionPlanns: [
    { value: 10, label: 'Realizadas', color: colors.green },
    { value: 11, label: 'Em aberto', color: colors.orange },
    { value: 5, label: 'Não realizadas', color: colors.red },
  ],
  actionPlannsAverageTime: [
    { label: 'Hoje', value: '8 min' },
    { label: 'Últimos 7 dias', value: '11 min' },
    { label: 'Últimos 30 dias', value: '10 min' },
  ],
}

export default data
