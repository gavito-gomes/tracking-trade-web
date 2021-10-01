import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/constants'
import { FaAngleDown } from 'react-icons/fa'

type SelectProps = {
  options: Array<{
    label: string
    value?: number | string
  }>
}

const Select: React.FC<SelectProps> = ({ options }) => {
  return (
    <Container>
      <SelectInput>
        <SelectOption disabled>Selecione uma opção...</SelectOption>
        {options.map((item, i) => (
          <SelectOption key={i} value={item.value}>
            {item.label}
          </SelectOption>
        ))}
      </SelectInput>

      <SelectArrow>
        <FaAngleDown />
      </SelectArrow>
    </Container>
  )
}

export default Select

const Container = styled.div`
  position: relative;
  width: 100%;
`

const SelectInput = styled.select`
  width: 100%;
  background: ${colors.gray};
  padding: 6px 15px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 14px;

  -webkit-appearance: none; /* Remove estilo padrão do Chrome */
  -moz-appearance: none; /* Remove estilo padrão do FireFox */
  appearance: none; /* Remove estilo padrão do FireFox*/
`
const SelectArrow = styled.span`
  color: ${colors.dark};
  position: absolute;
  right: 10px;
  top: 5px;
`

const SelectOption = styled.option`
  background: ${colors.white};
`
