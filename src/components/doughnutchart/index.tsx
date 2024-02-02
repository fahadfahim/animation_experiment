'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)
const HalfDoughNut = () => {
  const data = {
    labels: ['Show', 'Hide'],
    datasets: [
      {
        label: 'Shop 1',
        data: [3, 6],
        backgroundColor: ['red', 'transparent'],
        borderColor: ['red', 'transparent'],
        circumference: 180,
        rotation: 270
      }
    ]
  }
  const doughnutLabel = {
    id: 'doughnutLabel',
    afterDatasetsDraw(chart: any, args: any, pluginOptions: any) {
      const { ctx, data } = chart;
      console.log(chart.getDatasetMeta(0).data[0]);

      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.font = 'bold 30px sans-serif';
      ctx.fillStyle = 'rgba(54,12,235,1)';
      ctx.textAlign = 'center';
      ctx.fillText(data?.datasets[0].data[0], xCoor, yCoor)
    }
  }
  const options: any = {
    aspectRatio: 1,
    plugins:
    {
      tooltip: {
        enabled: false
      },
      legend: {
        display: false
      }
    }

  }
  return (
    <div className='h-[400px] w-[500px]'>
      <Doughnut data={data} options={options} plugins={[doughnutLabel]} />
    </div>
  )
}

export default HalfDoughNut