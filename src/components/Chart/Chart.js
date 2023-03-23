import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

function Chart(props) {
  const dataPointValues = props.dataPoints.map(datapoint=>datapoint.value);
  const totalMaxi = Math.max(...dataPointValues)
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint)=>(<ChartBar
      key={dataPoint.label}
      value={dataPoint.value}
      // maxvalue={null}
      maxvalue={totalMaxi}
      label={dataPoint.label}
      ></ChartBar>))}
    </div>
  )
}

export default Chart
