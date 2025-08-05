import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface Props {
    onAdd: (activity:string, hours:number,color:string) => void
}

const TimeForm = ({onAdd}:Props) => {
    const [activity,setActivity] = useState("");
    const [hours, setHours] = useState("");
    const [color, setColor] = useState('#ff6384');


    const handleSubmit= () => {
        if(!activity.trim() || !hours) {
          alert("Please fill it");
          return;
        }

        onAdd(activity , Number(hours), color);

        setActivity("");
        setHours("");

    }


  return (
    <div className='space-y-3'>
        <Input
        placeholder='Activity (e.g sleep)'
        value={activity}
        onChange={(e) => setActivity(e.target.value)}/>

        <Input
        type='number'
        min={0}
        max={24}
        placeholder='Hours (e.g 5)'
        value={hours}
        onChange={(e) => setHours(e.target.value)}/>

        <label className="block">
  Color:
  <input
    type="color"
    value={color}
    onChange={(e) => setColor(e.target.value)}
    className="ml-2"
  />
</label>


        <Button className='w-full' onClick={handleSubmit}>Add Activity</Button>
        
    </div>
  )
}

export default TimeForm