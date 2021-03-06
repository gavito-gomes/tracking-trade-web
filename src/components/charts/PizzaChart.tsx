import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export type PizzaValueType = {
  value: number
  label: string
  color?: string
}

type PizzaChartProps = {
  arrayData: Array<PizzaValueType>
  chartSize?: number
}

type ChartDash = {
  offset: number
  dasharray: number
  color?: string
}

function PizzaChart({
  arrayData,
  chartSize = 100,
}: PizzaChartProps): JSX.Element {
  const [chartDashes, setchartDashes] = useState<Array<ChartDash>>([])

  useEffect(() => {
    if (!arrayData) return
    let accOffset = 0
    let dashes = arrayData.map((item, i) => {
      let dasharray = item.value * 2 * Math.PI
      let dash = {
        dasharray,
        offset: accOffset,
        color: item.color,
      }
      accOffset += dasharray
      return dash
    })

    setchartDashes(dashes)
  }, [arrayData])

  return (
    <Container>
      <svg
        viewBox='0 0 100 100'
        width={chartSize}
        height={chartSize}
        transform='rotate(-90)'
      >
        {chartDashes.map((dash, i) => {
          return (
            <circle
              key={i}
              r={45}
              cx={50}
              cy={50}
              stroke={dash.color}
              strokeWidth={8}
              strokeDasharray={`${dash.dasharray * 45} 1000`}
              strokeDashoffset={-dash.offset * 45}
              fill='transparent'
            />
          )
        })}
      </svg>
    </Container>
  )
}

export default PizzaChart

const Container = styled.div`
  width: 100%;
`
