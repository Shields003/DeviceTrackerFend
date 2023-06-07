import axios from "axios";

export async function fetchMaaS360Data() {
  try {
    const response = await axios.get('http://localhost:5000/api/maas360/total-devices');
    const data = response.data;
    console.log("fetchMaaS360Data: received data", data); // Debugging line
    return data;
  } catch (error) {
    console.error("fetchMaaS360Data: error fetching data", error); // Debugging line
    return []; // Ensure an empty array is returned even in case of an error
  }
}

// Other functions...
