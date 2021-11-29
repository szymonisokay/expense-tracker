import React from "react"
import ChartBar from "./ChartBar"

const Chart = ({ dataPoints }) => {
  const values = dataPoints.map((dataPoint) => dataPoint.value)
  const totalMaximum = Math.max(...values)

  return (
    <div className="chart">
      {dataPoints.map((data) => (
        <ChartBar key={data.label} {...data} maxValue={totalMaximum} />
      ))}
    </div>
  )
}

export default Chart
