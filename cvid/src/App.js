import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [covidData, setCovidData] = useState([]);

  const fetchCovidData = async () => {
    const { data } = await Axios.get(
      "https://corona.lmao.ninja/v2/countries?yesterday=&sort="
    );
    const covidData = data;
	
	for(let i=0; i < covidData.length; i++)
	{
		covidData[i]["id"] = uuidv4()
	}
	
    setCovidData(covidData);
    console.log(covidData);
  };

  useEffect(() => {
    fetchCovidData();
  }, []);

  return (
    <div>
      {covidData.map((covidData) => (
        <p key={covidData.id}>Country: {covidData.country} Deaths: {covidData.deaths}</p>
      ))}
    </div>
  );
}

export default App;

