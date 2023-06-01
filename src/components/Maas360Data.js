import axios from "axios";

// Assuming this is in Maas360Data.js
export async function fetchMaaS360Data() {
  try {
    // Your fetch request code here...
    const response = await axios.get('http://localhost:5000/api/maas360');
    const data = response.data;
    console.log("fetchMaaS360Data: received data", data); // Debugging line
    if (Array.isArray(data)) {
      return data;
    } else {
      console.warn("fetchMaaS360Data: data is not an array", data); // Debugging line
      return [];
    }
  } catch (error) {
    console.error("fetchMaaS360Data: error fetching data", error); // Debugging line
    return []; // Ensure an array is returned even in case of an error
  }
}

export async function fetchTotalDevicesData() {
  try {
    const response = await axios.get('http://localhost:5000/api/maas360/total-devices');
    const data = response.data;
    console.log("fetchTotalDevicesData: received data", data); // Debugging line
    if (typeof data === 'number') {
      return data;
    } else if (typeof data === 'string') {
      const totalDevices = parseInt(data, 10);
      if (!isNaN(totalDevices)) {
        return totalDevices;
      }
    }
    console.warn("fetchTotalDevicesData: data is not a valid number", data); // Debugging line
    return null;
  } catch (error) {
    console.error("fetchTotalDevicesData: error fetching data", error); // Debugging line
    return null; // Ensure a number or null is returned even in case of an error
  }
}



