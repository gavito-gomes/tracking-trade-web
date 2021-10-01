import { BarValueType } from '../components/charts/BarChart'
import { colors } from '../styles/constants'

const faker = require('faker-br')

let scheduledInspections = []

for (let i = 0; i < 10; i++) {
  let date = new Date(Date.now() - 24 * 3600 * 1000 * i)
  let planned = Math.floor(Math.random() * 19 + 10)
  scheduledInspections.push({
    name: faker.name.findName(),
    planned,
    completed: Math.floor(Math.random() * (planned - 1) + 1),
    lastUpdate: date.toLocaleString(),
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

let actionPlannsUpdates = []

let status = [
  { value: 0, label: 'Realizado', color: colors.green },
  { value: 1, label: 'Pendente', color: colors.orange },
  { value: 2, label: 'Não realizado', color: colors.red },
]

for (let i = 10; i > 0; i--) {
  let date = new Date(Date.now() - 24 * 3600 * 1000 * (10 - i))
  actionPlannsUpdates.push({
    actionName: `Plano de ação ${i}`,
    responsible: faker.name.findName(),
    lastUpdate: date.toLocaleString(),
    status: status[Math.round(Math.random() * 2)],
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
  actionPlannsUpdates,
}

export default data
