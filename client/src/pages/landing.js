// import React, {useState, useEffect} from "react";
import React from "react";
import { Link } from "react-router-dom";
// import Axios from "axios";
// import { Form, Input, Button, Segment, Grid ,Header} from "semantic-ui-react";
// import "./index.css";


const Landing =  () => {
  return (
  <div>
  <h1>This is Landing</h1>
  {/* <h2>User: {user}</h2> */}
  <Link to={"/login"}>
  <div className="links">Log In</div>
  </Link>
  </div>
  );
};

export default Landing;