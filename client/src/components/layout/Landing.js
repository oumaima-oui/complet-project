import React, { Component } from "react";
import { Link } from "react-router-dom";



class Landing extends Component {
  render() {
    return (
      <div style={{ height: "70vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <span style={{ fontFamily: "monospace" ,"font-size":'35px', "color":'gray',backgroundColor:'yellow'}}>YOUR IMAGE, OUR PASSION</span> 
            </h4>
            <p style={{ fontFamily: "monospace" ,"font-size":'25px', "color":'gray', backgroundColor:'yellow'}}>
            STRATEGY,CREATIVITY,MATKETING,ADS
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable bleu accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable bleu accent-3"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
