import React from 'react'
import { IconType } from 'react-icons/lib'
import styled from 'styled-components'
import { colors, screen } from '../styles/constants'
import { FaBars, FaAngleLeft } from 'react-icons/fa'

export type SidebarProps = {
  options: Array<SidebarItemProps>
  active: boolean
  setActive: (active: boolean) => void
}

export type SidebarItemProps = {
  label: string
  path: string
  icon: IconType
}

const Sidebar: React.FC<SidebarProps> = ({ options, active, setActive }) => {
  const toggleActive = () => setActive(!active)

  return (
    <Container>
      <Bar>
        <Burguer onClick={toggleActive}>
          <FaBars size={18} />
        </Burguer>
      </Bar>

      {active && (
        <Menu>
          <CloseMenu onClick={toggleActive}>
            <FaAngleLeft />
          </CloseMenu>

          {options.map((item, i) => (
            <Item href={item.path} key={i}>
              {item.icon({ size: 25 })}
              {item.label}
            </Item>
          ))}
        </Menu>
      )}
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  background: ${colors.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  @media (${screen.md}) {
    width: fit-content;
    height: 100%;
    display: flex;
  }
`

const Bar = styled.div`
  width: 100%;
  height: 40px;
  background: ${colors.gradient1};

  @media (${screen.md}) {
    width: 40px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${colors.gradient1},
      ${colors.gradient2}
    );
  }
`
const Burguer = styled.button`
  height: 40px;
  width: 40px;
  background: transparent;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${screen.md}) {
    margin-top: 40px;
    background: ${colors.white};
    color: ${colors.dark};
    border-radius: 50px;
  }
`

const Menu = styled.div`
  width: 250px;
  padding: 10px 0;
  border: 0px solid ${colors.lightgray};
  border-bottom-width: 1px;
  @media (${screen.md}) {
    border-width: 0;
    border-right-width: 1px;
  }
`

const CloseMenu = styled.button`
  background: ${colors.primary};
  color: ${colors.light};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: none;

  @media (${screen.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0 20px;
    position: relative;
    left: calc(100% - 10px);
  }
`

const Item = styled.a`
  text-decoration: none;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${colors.primary};

  &:hover {
    background: ${colors.light};
  }
`
