import React, { createContext, useState } from 'react'
import { BarType, BarValueType } from '../../components/charts/BarChart'
import { PizzaValueType } from '../../components/charts/PizzaChart'
import data, { ScheduledInspectionType } from '../../data/Index'

type ControlPanelData = {
  scheduledInspections: Array<ScheduledInspectionType>
  eventHistory: {
    arrayData: Array<BarValueType<string, number>>
    barTypes: Array<BarType>
  }
  inspections: Array<PizzaValueType>
}

export const ControlPanelContext = createContext<ControlPanelData>({
  scheduledInspections: [],
  inspections: [],
  eventHistory: {
    arrayData: [],
    barTypes: [],
  },
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

  return (
    <ControlPanelContext.Provider
      value={{
        scheduledInspections,
        eventHistory,
        inspections,
      }}
    >
      {children}
    </ControlPanelContext.Provider>
  )
}
