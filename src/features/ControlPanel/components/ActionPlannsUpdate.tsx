import React, {
  ChangeEvent,
  ChangeEventHandler,
  useContext,
  useState,
} from 'react'
import { FaCog } from 'react-icons/fa'
import styled from 'styled-components'
import Card, { CardSubtitle, CardTitle } from '../../../components/Card'
import Select from '../../../components/Select'
import { colors } from '../../../styles/constants'
import { ControlPanelContext } from '../ContextProvider'

const ActionPlannsUpdate: React.FC = () => {
  const { actionPlannsUpdates } = useContext(ControlPanelContext)

  const availableStatus = [
    { value: -1, label: 'Todas' },
    { value: 0, label: 'Realizado' },
    { value: 1, label: 'Pendente' },
    { value: 2, label: 'Não realizado' },
  ]

  const [statusFilter, setstatusFilter] = useState(1)
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
            <CardTitle>Planos de ação</CardTitle>
            <CardSubtitle>Atualizações</CardSubtitle>
          </Title>
          <Settings>
            <FaCog size={20} />
          </Settings>
        </Header>
        <Search
          placeholder='Pesquisar'
          style={{ marginBottom: 10 }}
          onChange={handleSearch}
        />
        <Select
          options={availableStatus}
          value={statusFilter}
          onSelect={setstatusFilter}
        />
        <ActionsList>
          {actionPlannsUpdates
            .filter(
              (item) =>
                statusFilter === -1 || item.status.value === statusFilter
            )
            .filter((item) =>
              seacrhIn(searchText, item.actionName, item.responsible)
            )
            .map((item, i) => (
              <ActionPlann key={i}>
                <div>
                  <p>{item.actionName}</p>
                  <p>Responsável: {item.responsible}</p>
                </div>
                <ActionInfo>
                  <StatusBadge color={item.status.color}>
                    {item.status.label}
                  </StatusBadge>
                  <p>{item.lastUpdate}</p>
                </ActionInfo>
              </ActionPlann>
            ))}
        </ActionsList>
      </Card>
    </Container>
  )
}

export default ActionPlannsUpdate

const Container = styled.div``

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 30px;
  grid-template-rows: auto auto;
  gap: 10px;
`

const Title = styled.div`
  grid-column: 1 / 2;
`
const Settings = styled.button`
  width: fit-content;
  grid-column: 2 / 3;
  background: transparent;
  justify-self: flex-end;
`

const Search = styled.input`
  border-radius: 100px;
  border: 1px solid ${colors.gray};
  width: 100%;
  padding: 5px 10px;
`

const ActionsList = styled.div`
  margin-top: 10px;
`

const ActionPlann = styled.div`
  font-size: 12px;
  border-top: 1px solid ${colors.gray};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 12px 0;
`
const ActionInfo = styled.div`
  text-align: right;
`

const StatusBadge = styled('label')<{ color?: string }>`
  color: ${(props) => props.color};
  font-size: 11px;
  padding: 0 8px;
  border-radius: 50px;
  border: 1px solid ${(props) => props.color};
  width: fit-content;
  height: fit-content;
  display: inline-block;
  margin-bottom: 2px;
`
