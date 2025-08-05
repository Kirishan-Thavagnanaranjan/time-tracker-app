import { Pie } from 'react-chartjs-2'
import { Chart as chartJS,ArcElement, Tooltip,Legend} from 'chart.js'

chartJS.register(ArcElement,Tooltip,Legend);

interface Props{
  data: {activity:string,hours:number}[]

}

const COLORS = [
  '#ff6384', '#36A2b3', '#ffce56', '#340399', '#a788fa',
  '#FF9F40', '#4BC0C0', '#9966FF', '#C9CBCF', '#FF6384',
]

const TimeChart = ({data}:Props) => {
    if (data.length === 0) {
    return <p className="text-gray-500 text-center">No activity data to display.</p>
  }
  const chartData = {
    labels: data.map((d) => d.activity),
    datasets: [
      {
        label:"hours",
        data: data.map((d) => d.hours),
        backgroundColor: data.map((_, i) => COLORS[i % COLORS.length]),
        borderWidth:1,
      },
    ],
  }
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  }

  return <Pie data={chartData} options={options}/>
}

export default TimeChart