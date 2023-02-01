import React from 'react'
import {PieChart, Pie, Legend,Tooltip} from "recharts" //The Rechart library was previously intalled. 

const ChartUSA = () => {

//Setting the data that will be used in the chart.
let data=[
    {
     name: 'Cases' , value:42895046,

   },
{
    name: 'Deaths' , value: 691864
 },
 {
    name: 'Recovered' , value: 3250217,

  },
] 

    return (
        
        <div className='chart'>
            
            <PieChart width={730} height={250}>
            <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label

          />
          <Legend/>
          <Tooltip />
 
        </PieChart>

        </div>
    )
}

export default ChartUSA
