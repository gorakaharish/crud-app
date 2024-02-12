import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Create() {
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);
  const [email, setEmail] = useState([]);

  const navegate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://65ca1b603b05d29307dfb486.mockapi.io/crud", {
        e_name: name,
        e_age: age,
         e_email: email,
      })
      .then(() => {
        navegate("/");
      }).catch((error) => {
        alert("Same Error in this Post API please chesk",error);
  
      })
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary p-2 text-white text-center ">
            <h1>Create Data</h1>
          </div>
          <form onSubmit={handelSubmit}>
            <div className="form-group">
              <label >Enter Name:</label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label >Enter Age:</label>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label >Enter Email:</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
