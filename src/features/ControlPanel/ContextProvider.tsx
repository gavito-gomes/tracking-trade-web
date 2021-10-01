import React, { createContext, useState } from 'react'
import { BarType, BarValueType } from '../../components/charts/BarChart'
import { PizzaValueType } from '../../components/charts/PizzaChart'
import data from '../../data/Index'

type ControlPanelData = {
  scheduledInspections: Array<{
    name: string
    planned: number
    completed: number
    lastUpdate: string
  }>
  eventHistory: {
    arrayData: Array<BarValueType<string, number>>
    barTypes: Array<BarType>
  }
  inspections: Array<PizzaValueType>
  inspectionsAverageTime: Array<{
    label: string
    value: string
  }>
  generalActionPlanns: Array<PizzaValueType>
  actionPlanns: Array<PizzaValueType>
  actionPlannsAverageTime: Array<{
    label: string
    value: string
  }>
}

export const ControlPanelContext = createContext<ControlPanelData>({
  scheduledInspections: [],
  eventHistory: {
    arrayData: [],
    barTypes: [],
  },
  inspections: [],
  inspectionsAverageTime: [],
  generalActionPlanns: [],
  actionPlanns: [],
  actionPlannsAverageTime: [],
})

type ProviderProps = {
  children?: React.ReactNode
}

export default function ControlPanelContextProvider({
  children,
}: ProviderProps): JSX.Element {
  const [scheduledInspections] = useState(data.scheduledInspections)
  const [eventHistory] = useState(data.eventHistory)
  const [inspections] = useState(data.inspections)
  const [inspectionsAverageTime] = useState(data.inspectionsAverageTime)
  const [generalActionPlanns] = useState(data.generalActionPlanns)

  const [actionPlanns] = useState(data.actionPlanns)
  const [actionPlannsAverageTime] = useState(data.actionPlannsAverageTime)

  return (
    <ControlPanelContext.Provider
      value={{
        scheduledInspections,
        eventHistory,
        inspections,
        inspectionsAverageTime,
        generalActionPlanns,
        actionPlanns,
        actionPlannsAverageTime,
      }}
    >
      {children}
    </ControlPanelContext.Provider>
  )
}
