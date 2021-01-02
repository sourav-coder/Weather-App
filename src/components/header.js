import React from "react";

export default Header = (props) => {
  console.log(props.cityName);
  console.log(props.desc);
  
  const descClass="wi wi-day-"+props.desc.toLowerCase()+" display-1"
  console.log(descClass);
  console.log(props.temp);
  
  

  return (
    <>
      <div className="container">
        <div className="cards">
          <h1>{props.cityName}</h1>
          <h5 className="py-4">
            <i className={descClass}></i>
          </h5>
          <h1 className="px-2">{props.temp.toString()[0]} &deg;C</h1>
          {minMax(props.minTemp,props.maxTemp)}
          <h2 className="py-4">{props.desc}</h2>
        </div>
      </div>
    </>
  );
  function minMax(min, max){
    return (
      <h3>
        <span className="px-4">{min} &deg;</span>
        <span className="px-4">{max} &deg;</span>
      </h3>
    );
  };
};
