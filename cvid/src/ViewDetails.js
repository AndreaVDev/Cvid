import React from "react";
import { useLocation, Link } from "react-router-dom";

const ViewDetails = _ => {
  const { state } = useLocation();

  return (
    <div>
        <div>
          <div>
            <strong>Name:</strong> {state.covidsData.country}{" "}
          </div>
          <div>
            <strong>Today cases:</strong> {state.covidsData.todayCases}{" "}
          </div>
        </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ViewDetails;
