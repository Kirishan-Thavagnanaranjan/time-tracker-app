import { useEffect, useState } from 'react';
import TimeForm from '@/components/TimeForm'
import TimeChart from '@/components/TimeChart';
const Home = () => {
    
    const [data, setData] = useState<{activity:string;hours:number;color: string}[]>([]);

    useEffect(() => {
    const savedData = localStorage.getItem('timeData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

   useEffect(() => {
  if (data.length > 0) {
    localStorage.setItem('timeData', JSON.stringify(data));
  }
}, [data]);


  
    const handleAdd = (activity:string, hours:number, color:string) =>{
        setData((prev) => [...prev, {activity,hours,color}] );
    };

    const handleReset = () => {
    if (confirm('Are you sure you want to clear all activity data?')) {
      setData([]);
      localStorage.removeItem('timeData');
    }
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
      {data.length > 0 && (
        <button
          onClick={handleReset}
          className="w-full text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Reset All
        </button>
      )}
      
    </div>
  )
}

export default Home