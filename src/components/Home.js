import React from "react";

function Home() {
    const current = new Date();
    // const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    const day = `${current.toDateString()}`
  
    return (
  <div className="date">
    <h1>Today is {day}</h1>
  </div>
  );
}

export default Home;

