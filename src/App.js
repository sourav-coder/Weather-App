import React from "react";
import "./styles.css";
import Header from './components/header'

const API_KEY="c4276fa7ec1f370badcfdc02d105ec3b"

// api call api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function App() {

  const [city,setCity]=React.useState('')
  const [desc,setDesc]=React.useState('')
  const [cel,setCel]=React.useState('')
  const [min,setMin]=React.useState('')
  const [max,setMax]=React.useState('')

  const getTime = async ()=>{

    const api_call=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    const response= await api_call.json();
    console.log(response);
    console.log(response.weather.main);
    
    setDesc(response.weather[0].main);
    console.log(response.main);
    
    setCel(response.main.temp-273.15);
    setMax(response.main.temp_max-273.15)
    setMin(response.main.temp_min-273.15)

  }

  return (
    <div className="App">
    <h1>Weather App</h1>
    <div  style={{marginBottom:"10px"}} >

      <input className="form-control" type="text" name="city" onChange={(e)=>{setCity(e.target.value)}} placeholder="Name of any city" style={{width:"75%",marginTop:"3%",display:"inline-block",marginRight:"10px"}}></input>
      <button className="btn btn-primary " onClick={getTime}>Click</button>

    </div>
    <div className="card">
            <Header
             cityName={city}
             desc={desc}
              temp={Math.ceil(cel)}
              minTemp={Math.ceil(min)}
              maxTemp={Math.ceil(max)}
            
            ></Header>

    </div>
    </div>
  );
}
