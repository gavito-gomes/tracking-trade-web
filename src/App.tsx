import React, { useState } from 'react'
import Sidebar, { SidebarItemProps } from './components/Sidebar'
import ControlPanel from './features/ControlPanel/Index'
import GlobalStyles from './styles/global'
import styled from 'styled-components'
import { BiBarChartSquare } from 'react-icons/bi'
import { screen } from './styles/constants'

function App() {
  const menuOptions: Array<SidebarItemProps> = [
    {
      label: 'Painel de controle',
      path: '',
      icon: BiBarChartSquare,
    },
  ]

  const [sidebarActive, setsidebarActive] = useState(false)

  return (
    <AppContainer sidebarActive={sidebarActive}>
      <Sidebar
        options={menuOptions}
        active={sidebarActive}
        setActive={setsidebarActive}
      />
      <ControlPanel />
      <GlobalStyles />
    </AppContainer>
  )
}

export default App

const AppContainer = styled('div')<{ sidebarActive: boolean }>`
  width: 100%;
  height: 100%;
  padding-top: 50px;

  @media (${screen.md}) {
    padding-left: ${(props) => (props.sidebarActive ? '290px' : '40px')};
    /* padding: 0;
    display: grid;
    grid-template-columns: fit-content(100px) 1fr; */
  }
`
