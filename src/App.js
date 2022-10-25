import { useEffect, useState } from 'react';
import './App.css';
import video from "./video.mp4"

function App() {
  const [activity,setActivity] = useState("")

  const getActivity = async()=> {
    const response = await fetch("https://www.boredapi.com/api/activity/")
    const result = await response.json()
    setActivity(result.activity)
  }

  useEffect(()=>{
    getActivity()
  },[])

  return (
    <div className="App">
       <video autoPlay muted loop>
            <source src={video} type="video/mp4"/>
          </video>
          <h1>Are you bored and have nothing to do? Let us advise!</h1>
          <button onClick={getActivity}> Get new activity!</button>
          <h2>{activity}</h2>
          
    </div>
  );
}

export default App;
