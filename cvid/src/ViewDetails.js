import React from "react";
import { useLocation, Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './styles/viewdetails.css'

const ViewDetails = _ => {
  const { state } = useLocation();

  return (
    <div>
	<Typography variant="h1" component="h1">
	Country: {state.covidsData.country}{" "} 
	</Typography>
	<img 
      src={state.covidsData.countryInfo.flag}
      alt="new"
      />
	<Typography variant="h2" component="h2">
	Today cases
	</Typography>
    <Typography variant="p" component="p">
	{state.covidsData.todayCases}
	</Typography>
      <Link to="/" className="back-to-list">
      <Button variant="contained">Back</Button>
      </Link>
    </div>
  );
};

export default ViewDetails;
