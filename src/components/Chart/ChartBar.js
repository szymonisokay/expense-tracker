import React from "react"

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%"

  if (value > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%"
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  )
}

export default ChartBar