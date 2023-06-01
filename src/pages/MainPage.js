import React, { useState } from 'react';
import DeviceList from '../DeviceDetails/DeviceList';

const MainPage = () => {
  const [fetchingData, setFetchingData] = useState(false);

  const handleFetchData = async () => {
    setFetchingData(true);
    try {
      const response = await fetch('http://localhost:5000/api/maas360');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.devices);
    } catch (error) {
      console.error(error);
    }
    setFetchingData(false);
  };

  return (
    <div>
      <h1>MaaS360 Dashboard</h1>
      <button onClick={handleFetchData} disabled={fetchingData}>
        {fetchingData ? 'Fetching Data...' : 'Fetch Data'}
      </button>
      <DeviceList />
    </div>
  );
};

export default MainPage;
