import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import './styles/home.css'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
  
  /*
  return (
    <div>
      {covidsData.map(covidData => {
        return (
		<li key={covidData.id}>
            {covidData.country}
            <Link
              to={{
                pathname: `/view-details/${covidData.id}`,
                state: { covidsData: covidData }
              }}
            >
      <Button variant="contained">View</Button>
            </Link>
		  </li>
        );
      })}
    </div>
  );
  */
  return (
  <Grid container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}>
  <Typography variant="h1" component="h1">
	Covid data
	</Typography>
    <List>
      {covidsData.map(covidData => {
        return (
		<div key={covidData.id}>
		<ListItem >
            <ListItemText primary={covidData.country} />
            <Link className="link-details" 
              to={{
                pathname: `/view-details/${covidData.id}`,
                state: { covidsData: covidData }
              }}
            >
      <Button style={{marginLeft: '0.5em', height:'1.8em'}} variant="contained">View</Button>
            </Link>
		  </ListItem>
		  <Divider />
		  </div>
        );
      })}
	  
    </List>
	</Grid>
  );
 
};

export default Home;