import React, {useEffect, useState} from 'react'
import Chart from 'react-apexcharts'

const Bar =({height, data})=>{
  const [serie, guardarSerie] = useState(null)
  const series =[{
    name:'algo',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 55, 77, 77]
  }]

  useEffect(() => {
    if (data.length>0) {

      const array = [
        {
          name: "Lps recuperados",
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
    colors:['#fff'],
    tooltip:{
      theme:'dark'
    },
      chart: {
      
      type: 'bar',
      sparkline: {
          enabled: true,
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '25%',
        borderRadius:2,
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    },
    fill: {
      opacity: 0.5
    }
    
    }
  return (
    <div id="chart">
      <Chart options={options} series={serie} type="bar" height={height} />
    </div>
  )
}

export default Bar