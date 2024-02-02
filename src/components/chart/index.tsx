'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale, //x axis
  LinearScale, //y axis 
  PointElement,
  Legend,
  Tooltip
)
// how to put legends in a div in chartjs
const ChartExercise = () => {
  const data = {
    labels: ['Monday', 'Tue', 'Wed'],
    datasets: [
      {
        label: 'Sales of the week',
        data: [6, 3, 9],
        backgroundColor: 'aqua',
        borderColor: 'black',
        poinBorderColor: 'aqua',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Sales of the Month',
        data: [3, 6, 2],
        backgroundColor: 'red',
        borderColor: 'red',
        poinBorderColor: 'aqua',
        fill: true,
        tension: 0.4
      }
    ]
  }
  const options: any = {
    plugins: {
      legends: true,
    },
    scales: {
      y: {
        // min: 3,
        // max: 6
      }
    }
  }
  // const htmlLegendPlugin = {
  //   id: "htmlLegend",
  //   afterUpdate(chart: any) {
  //     const itemsss = chart.options.plugins.legend.labels.generateLabels(chart);
  //     const ul = document.createElement("ul");
  //     itemsss.forEach((item: any) => {
  //       const li = document.createElement("li");
  //       const boxSpan = document.createElement("span");
  //       boxSpan.style.background = item.fillStyle;
  //       li.appendChild(boxSpan);
  //       li.appendChild(document.createTextNode(item.text));
  //       ul.appendChild(li);
  //     });
  //     const jsLegend = document.getElementById("js-legend");
  //     jsLegend.appendChild(ul);
  //   }
  // };

  const generateLegend = () => {
    //get the selected location
    const chartBox = document.querySelector('.chartBox')

    //create div
    const div = document.createElement('div')
    div.setAttribute('id', 'customLegend')

    //creae ul
    const ul = document.createElement('ul')


    //insert div into chartBox
    chartBox?.appendChild(div)
  }
  // generateLegend()
  return (
    <div className='chartBox w-[500px] h-[300px] bg-blue-200 p-4'>
      {/* <div id='js-legend' className='whatever you wanna add'>hello world</div> */}
      <Line data={data} options={options} />


    </div>
  )
}

export default ChartExercise