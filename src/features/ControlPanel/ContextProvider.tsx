import React, { createContext, useState } from 'react'
import { BarValueType } from '../../components/BarChart'
import data, { InspectionType } from '../../data/Index'

type ControlPanelData = {
  scheduledInspections?: Array<InspectionType>
  eventHistory?: Array<BarValueType<string, number>>
}

export const ControlPanelContext = createContext<ControlPanelData>({})

type ProviderProps = {
  children?: React.ReactNode
}

export default function ControlPanelContextProvider({
  children,
}: ProviderProps): JSX.Element {
  const [inspections] = useState(data.inspections)
  const [eventHistory] = useState(data.eventHistory)

  return (
    <ControlPanelContext.Provider
      value={{
        scheduledInspections: inspections,
        eventHistory,
      }}
    >
      {children}
    </ControlPanelContext.Provider>
  )
}
