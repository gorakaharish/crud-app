import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [id, setiId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setemail] = useState("");

  const naviget = useNavigate();

  useEffect(() => {
    setiId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setemail(localStorage.getItem("email"));
  }, []);

  const handelUpdate = (event) => {
    event.preventDefault();
    axios.put(`https://65ca1b603b05d29307dfb486.mockapi.io/crud/${id}`, {
      e_name: name,
      e_age: age,
      e_email: email,
    }).then(() => {
       naviget('/')
    }).catch((error) => {
      alert("Same Error in this Put API please chesk",error);

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
            <h1>Update Data</h1>
          </div>
          <form onSubmit={handelUpdate}>
            <div className="form-group">
              <label htmlFor="">Enter Name:</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Enter Age:</label>
              <input
                type="number"
                placeholder="Age"
                value={age}
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Enter email:</label>
              <input
                type="email"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="Update" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;
