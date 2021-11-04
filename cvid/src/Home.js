import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Home = props => {
	const [covidsData, setCovidData] = useState([]);
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
      {covidsData.map(covidData => {
        return (
          <div key={covidData.id}>
            {covidData.country}
            <Link
              to={{
                pathname: `/view-details/${covidData.id}`,
                state: { covidsData: covidData }
              }}
            >
              <button>View</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;