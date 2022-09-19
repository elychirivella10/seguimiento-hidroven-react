import React from 'react'
import Chart from 'react-apexcharts'

class Donut extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        options:{
          colors:['#03c9d7', '#fb9678'],
          legend: {
            position:'bottom',
            horizontalAlign:'center',
            show:true,
            showForSingleSeries:false
          },
            series: [22, 55],
            labels: ['Operativos', 'Inoperativos'],
            chart: {
            type: 'pie',
            fontFamily:'DM Sans'
          },
          dataLabels: {
            enabled: false
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              
            }
          }]
          }
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
    <Chart options={this.state.options} series={this.props.data.length>0?[this.props.data.operatios[0].total, this.props.data.operatios[0].total]:this.state.options.series} type="donut" height={this.props.height} />
    </div> );
        }
      }
      export default Donut