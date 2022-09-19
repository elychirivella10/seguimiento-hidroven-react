import React, {useEffect, useState} from 'react'
import Chart from 'react-apexcharts'

const Area =({color, height, data})=>{
    const [serie, guardarSerie] = useState(null)

    useEffect(() => {
        if (data.length>0) {
    
          const array = [
            {
              name: "Tomas eliminadas",
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
            show:false
        },
        chart: {
        sparkline: {
            enabled: true,
        },
        height: 400,
        type: 'area',
        toolbar:{
            show:false
          }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width:3,
            curve: 'smooth'
        },
        grid: {
            show:false
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.70,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show:false
            },
            labels:{
                show:false
            },
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        },
        yaxis: {
            show:false,          
        }
      }
    return (
        <div id="chart">
            <Chart options={options} series={serie} type="area" height={height} />
        </div>
    )
}
export default Area

    