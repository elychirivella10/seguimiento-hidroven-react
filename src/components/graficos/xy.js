import React, {useEffect, useState} from 'react'
import Chart from 'react-apexcharts'


const XY = ({color, legend, xAxis, showX, stroke, markersSize, showY, data, height}) =>{
  const [serie, guardarSerie] = useState(null)
  const series = [
    {
        name: "Fugas solventadas",
        data: []
      },
      
  ]

  useEffect(() => {
    if (data.length>0) {

      const array = [
        {
          name: "Fugas solventadas",
          data: []
        }
      ]
      
      data.map(d=>(
        array[0].data.push(d[1])
      ))

      guardarSerie(array)
    }

  }, [data])

  if (serie===null) {
    return null
  }
  
  const options = {
    colors: color,
    tooltip:{
      theme:'dark'
    },
    legend:{
      show:legend,
      fontWeight:500,
      fontSize:'14px',
      labels:{
        colors :['#fb9678', '#fb9678'],
        useSeriesColors:true
      }
    },
    chart: {
      height: 350,
      fontFamily:'DM Sans',
      type: 'area',
      foreColor: '#a6a6a6',
      toolbar:{
        show:false
      }
    },
    xaxis: {
      categories:['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      axisBorder: {
        show: showX
      },
      axisTicks: {
        show: showX,
      },
      labels:{
        show:showX
      }
    },
    stroke: {
      width: stroke,
      curve: 'smooth'
    },
    grid: {
      show:false
    },
    markers: {
      size: markersSize,
      colors:['#03c9d7', '#fb9678']
  },
    fill: {
      type: 'solid',
      colors:['#03c9d7']
    },
    yaxis: {
      show:showY
    }
  }
  return (
    <div id="chart">
      <Chart options={options} series={serie} type="line" height={height} />
    </div>
  )
}

export default XY

    