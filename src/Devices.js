import React, { useState, useEffect } from "react";
import axios from "axios";

function Devices() {
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/maas360/devices")
      .then((response) => {
        setDevices(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else {
    return (
      <div>
        <h1>Devices</h1>
        <ul>
          {devices.map((device) => (
            <li key={device.ID}>
              {device.device_name} - {device.model}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Devices;
