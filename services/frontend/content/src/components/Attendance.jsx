import React, { useEffect, useState } from "react";
import api from 'axios';

const Loading = () => (<>Loading...</>);

const ClockInForm = () => {
  return (
    <>
      <div style={{ Width: "100%", margin: "150px", padding: "20px", textAlign: "center" }}>
        {/* <h1>Welcome to Attendance page</h1> */}

        {/* <h1><label for="clock-in">{massege}</label></h1><br />
        <input type="datetime-local" name="date-time" onChange={(e) => setClockIn(e.target.value)} /><br /><br />
        <button onClick={handleSubmit} type="submit" value="Clock-In">Clock-In</button> */}
        Clock in form here


      </div>
    </>
  );
}

const ClockOutForm = () => {
  return (
    <>
      Clock out form
    </>
  );
}


function Attendance() {
  const [isClockedId, setIsClockedIn] = useState(true);
  // const [attendanceData, setAttendanceData] = useState({ clockInTime: null, clockOutTime: null });
  // const [massege, setMassege] = useState('');

  useEffect(() => {
    const checkIsClockedIn = () => {

    }
    checkIsClockedIn();
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (!clockIn) {
  //     setMassege('Please clock-in');
  //     return;
  //   }
  //   const reqData = {
  //     clockIn,
  //   };
  //   api.post('http://localhost/attendance.php', reqData)
  //     .then(function (response) {
  //       console.log(response);
  //       alert(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  if (isClockedId === null) {
    return <Loading />
  }

  if (isClockedId) {
    return <ClockOutForm/>
  }

  return <ClockInForm/>;
}

export default Attendance;