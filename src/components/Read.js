import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://65ca1b603b05d29307dfb486.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      }).catch((error) => {
        alert("Same Error in this Get API please chesk",error);
  
      })
  };

  const handeldelete = (id) => {
    axios
      .delete(`https://65ca1b603b05d29307dfb486.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      }).catch((error) => {
        alert("Same Error in this Delete API please chesk",error);
  
      })
  };

  const setDataStorage = (id, name, age, email) => {
      localStorage.setItem('id',id);
      localStorage.setItem('name',name);
      localStorage.setItem('age',age);
      localStorage.setItem('email',email);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to="/create">
              <button className="btn btn-primary">Add New Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Emali</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.e_name}</td>
                      <td>{item.e_age}</td>
                      <td>{item.e_email}</td>
                      <td>
                        <Link to="/edit">
                          <button className="btn btn-primary" onClick={() => setDataStorage(item.id, item.e_name, item.e_age, item.e_email)}>Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (
                              window.confirm("Are You Sure To Delet Data!!")
                            ) {
                              handeldelete(item.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Read;
