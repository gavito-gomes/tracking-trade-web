import React from 'react'
import View from './View'
import ContextProvider from './ContextProvider'

export default function ControlPanel(): JSX.Element {
  return (
    <ContextProvider>
      <View />
    </ContextProvider>
  )
}
