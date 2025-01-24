import React, { useEffect, useState } from "react";
import axios from "axios";
// import style from './../../assets/styles';

// Reusable Loading Component
const Loading = () => <>Loading...</>;

// Clock In Form Component
const ClockInForm = ({ handleClockIn }) => {
  const [clockInTime, setClockInTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clockInTime) {
      alert("Please select a clock-in time.");
      return;
    }
    handleClockIn(clockInTime);
  };

  return (
    <div style={{ width: "100%", marginTop: "100px", padding: "20px", textAlign: "center" }}>
      <h1>Clock In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="clock-in">Select Clock-In Time:</label>
        <br />
        <input
          type="datetime-local"
          id="clock-in"
          value={clockInTime}
          onChange={(e) => setClockInTime(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Clock In</button>
      </form>
    </div>
  );
};

// Clock Out Form Component
const ClockOutForm = ({ handleClockOut }) => {
  const [clockOutTime, setClockOutTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clockOutTime) {
      alert("Please select a clock-out time.");
      return;
    }
    handleClockOut(clockOutTime);
  };

  return (
    <div style={{ width: "100%", margin: "150px", padding: "20px", textAlign: "center" }}>
      <h1>Clock Out</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="clock-out">Select Clock-Out Time:</label>
        <br />
        <input
          type="datetime-local"
          id="clock-out"
          value={clockOutTime}
          onChange={(e) => setClockOutTime(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Clock Out</button>
      </form>
    </div>
  );
};

// Main Attendance Component
const Attendance = () => {
  const [isClockedIn, setIsClockedIn] = useState(null);

  // Check initial clock-in status
  useEffect(() => {
    const checkClockInStatus = async () => {
      try {
        const response = await axios.get("http://localhost/attendance.php/status"); // Example API endpoint
        setIsClockedIn(response.data.isClockedIn);
      } catch (error) {
        console.error("Error fetching clock-in status:", error);
      }
    };
    checkClockInStatus();
  }, []);

  // Handle Clock In
  const handleClockIn = async (clockInTime) => {
    try {
      const response = await axios.post("http://localhost/attendance.php/clockin", { clockInTime });
      alert(response.data.message);
      setIsClockedIn(true); // Update status to Clocked In
    } catch (error) {
      console.error("Error during clock-in:", error);
    }
  };

  // Handle Clock Out
  const handleClockOut = async (clockOutTime) => {
    try {
      const response = await axios.post("http://localhost/attendance.php/clockout", { clockOutTime });
      alert(response.data.message);
      setIsClockedIn(false); // Update status to Clocked Out
    } catch (error) {
      console.error("Error during clock-out:", error);
    }
  };

  if (isClockedIn === null) {
    return <Loading />;
  }

  return isClockedIn ? (
    <ClockOutForm handleClockOut={handleClockOut} />
  ) : (
    <ClockInForm handleClockIn={handleClockIn} />
  );
};

export default Attendance;
