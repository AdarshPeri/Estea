import React, {Component} from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Home extends Component {
	
	 render() {
   		 const options = {
   		 	theme: 'dark2',
      title: {
        text: "Travel Stats"
      },
      data: [{				
                type: "column",
                dataPoints: [
                    { label: "Ships",  y: 3  },
                    { label: "Buses", y: 39  },
                    { label: "Trains", y: 55  },
                    { label: "Flights",  y: 30  },
                    
                ]
       }]
   					}
		 const options2 = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Bounce Rate by Week of Year"
			},
			axisY: {
				title: "Bounce Rate",
				includeZero: false,
				suffix: "%"
			},
			axisX: {
				title: "Week of Year",
				prefix: "W",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 64 },
					{ x: 2, y: 61 },
					{ x: 3, y: 64 },
					{ x: 4, y: 62 },
					{ x: 5, y: 64 },
					{ x: 6, y: 60 },
					{ x: 7, y: 58 },
					{ x: 8, y: 59 },
					{ x: 9, y: 53 },
					{ x: 10, y: 54 },
					{ x: 11, y: 61 },
					{ x: 12, y: 60 },
					{ x: 13, y: 55 },
					{ x: 14, y: 60 },
					{ x: 15, y: 56 },
					{ x: 16, y: 60 },
					{ x: 17, y: 59.5 },
					{ x: 18, y: 63 },
					{ x: 19, y: 58 },
					{ x: 20, y: 54 },
					{ x: 21, y: 59 },
					{ x: 22, y: 64 },
					{ x: 23, y: 59 }
				]
			}]
						}

		 const options3 = {
			theme: "dark2",
			animationEnabled: true,
			
			exportEnabled: true,
			title:{
				text: "Customer Satisfaction"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 8, label: "Very Unsatisfied" },
					{ y: 24, label: "Unsatisfied" },
					{ y: 38, label: "Neutral" },
					{ y: 21, label: "Satisfied" },
					{ y: 9, label: "Very Satisfied" },
					
				]
			}]
		}				
   		return (
     	 <div className='w-70 flex flex-column center'>
     	 	<div className=' ma2'>
        	<CanvasJSChart options = {options}/> 
        	</div>
        	<div className='  ma2'>
        	<CanvasJSChart options = {options2} />
        	</div>
        	<div className=' ma2'>
        	<CanvasJSChart options = {options3} />
        	</div>
      	</div>
    );
  }
}

export default Home;