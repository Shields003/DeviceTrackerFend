import React from 'react';
import { useParams } from 'react-router-dom';

function DeviceDetail() {
  const { deviceId } = useParams();

  // You can use the device ID to fetch the device data from your API
  // and render it on the page

  return (
    <div>
      <h1>Device Detail Page</h1>
      <p>Device ID: {deviceId}</p>
      {/* Render other device details here */}
    </div>
  );
}

export default DeviceDetail;
