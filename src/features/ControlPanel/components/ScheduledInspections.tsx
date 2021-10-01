import React, {
  ChangeEvent,
  ChangeEventHandler,
  useContext,
  useState,
} from 'react'
import styled from 'styled-components'
import Card, { CardTitle } from '../../../components/Card'
import Select from '../../../components/Select'
import { colors, screen } from '../../../styles/constants'
import { ControlPanelContext } from '../ContextProvider'

const ScheduledInspections: React.FC = () => {
  const { scheduledInspections } = useContext(ControlPanelContext)

  const [searchText, setsearchText] = useState('')

  const seacrhIn = (...args: string[]) => {
    if (args.length <= 0) return
    let text = args.shift() || ''
    let result = false
    args.forEach((arg: string) => {
      if (arg.toLowerCase().indexOf(text.toLowerCase()) >= 0) result = true
    })
    return result
  }

  const handleSearch: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setsearchText(event.target.value)
  }

  return (
    <Container>
      <Card>
        <Header>
          <Title>
            <CardTitle>Inspeções agendadas</CardTitle>
          </Title>

          <Select options={[{ label: 'Diário' }]} />
        </Header>
        <Search
          placeholder='Pesquisar'
          style={{ marginBottom: 10 }}
          onChange={handleSearch}
        />
        <TableWrapper>
          <InspectionTable>
            <thead>
              <tr>
                <th>NOME</th>
                <th>PLANEJADO</th>
                <th>REALIZADO</th>
                <th>ÚLTIMA ATUALIZAÇÃO</th>
              </tr>
            </thead>
            <tbody>
              {scheduledInspections
                .filter((item) =>
                  seacrhIn(
                    searchText,
                    item.name,
                    item.planned + '',
                    item.completed + ''
                  )
                )
                .map((item, i) => (
                  <Inspection key={i}>
                    <td>{item.name}</td>
                    <td>{item.planned}</td>
                    <td>{item.completed}</td>
                    <td>{item.lastUpdate}</td>
                  </Inspection>
                ))}
            </tbody>
          </InspectionTable>
        </TableWrapper>
      </Card>
    </Container>
  )
}

export default ScheduledInspections

const Container = styled.div``

const Header = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  gap: 10px;

  @media (${screen.md}) {
  }
`

const Title = styled.div`
  grid-column: 1 / 2;
`
const Search = styled.input`
  border-radius: 100px;
  border: 1px solid ${colors.gray};
  width: 100%;
  padding: 5px 10px;
`

const TableWrapper = styled.div`
  width: fit-content(100%);
  overflow-x: auto;
  padding-bottom: 10px;
`

const InspectionTable = styled.table`
  width: 100%;
  margin-top: 10px;
  font-size: 12px;
  td,
  th {
    white-space: nowrap;
    text-align: left;
    padding: 2px;
    padding-right: 20px;
  }
  th {
    font-size: 10px;
    padding-bottom: 10px;
  }
`

const Inspection = styled.tr`
  border-bottom: 1px solid ${colors.gray};
`
