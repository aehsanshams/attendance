import React, { useState } from "react";

function Attendance() {

  const [clockIn, setClockIn] = useState('');
  const [clockOut, setClockOut] = useState('');
  const [massege, setMassege] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!clockIn) {
      massege('please clocked-in');
      return
    }else{
      massage('You are clocked-in');
      return
    }
  }
    return (
        <>
        <div style={{ Width: "100%", margin: "150px", padding: "20px", textAlign: "center" }}>
        {/* <h1>Welcome to Attendance page</h1> */}
      
        <h1><label for="clock-in">User Attendance</label></h1><br />
        <input type="datetime-local" name="date-time" onChange={(e) => setClockIn(e.target.value)}/><br /><br />
        <button onClick={handleSubmit} type="submit" value="Clock-In">Clock-In</button>
        

      </div>
      </>
    );
}

export default Attendance;