import { useState } from 'react';
import TimeForm from '@/components/TimeForm'
import TimeChart from '@/components/TimeChart';
const Home = () => {
    
    const [data, setData] = useState<{activity:string;hours:number;color: string}[]>([]);
    const handleAdd = (activity:string, hours:number, color:string) =>{
        setData((prev) => [...prev, {activity,hours,color}] );
    };
    const totalHours = data.reduce((sum, d) => sum + d.hours, 0);



  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded shadow space-y-6">
      <h1 className="text-2xl font-bold">Time Tracker</h1>
      <div className="text-lg">
  Total: {totalHours} hours
  {totalHours > 24 && (
    <span className="text-red-500 font-semibold ml-2">⚠️ Exceeds 24 hours!</span>
  )}
</div>

      <TimeForm onAdd={handleAdd}/>
      <TimeChart data={data}/>
    </div>
  )
}

export default Home