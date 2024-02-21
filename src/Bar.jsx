// import React from 'react'
// import { Chart } from 'react-charts'
 
// function Bar() {
//   const data = React.useMemo(
//     () => [
//       {
//         label: 'Series 1',
//         data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
//       },
//     //   {
//     //     label: 'Series 2',
//     //     data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
//     //   }
//     ],
//     []
//   )

//   const series = React.useMemo(
//     () => ({
//       type: 'bar'
//     }),
//     []
//   )
 
//   const axes = React.useMemo(
//     () => [
//       { primary: true, type: 'linear', position: 'bottom' },
//       { type: 'linear', position: 'left' }
//     ],
//     []
//   )

//   return (
//     <div
//       style={{
//         width: '400px',
//         height: '300px'
//       }}
//     >
//       <Chart data={data} axes={axes} series={series}/>
//     </div>
//   )
// }

// export default Bar;

import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Bar = () => {
    const options = {
        title: {
          text: "Organization Lead Score"
        },
        data: [{
          type: "column",
          dataPoints: [
            { label: "Apple",  y: 10  },
            { label: "Orange", y: 15  },
            { label: "Banana", y: 25  },
            { label: "Mango",  y: 30  },
            { label: "Grape",  y: 28  }
          ]
        }]
      }

      return (
        <div>
          <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
}

export default Bar;