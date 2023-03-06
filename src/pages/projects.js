import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



const initialState = {
  title: "",
  projectDescription: "",
  sampleImage: "",
  dueDate1: "",
  dueDate2: "",
  compulsoryWordings: "",
  colors: ["Black", "Brown", "Silver", "White", "Blue"],
  leaderPhoto: "",
  status: "",
  approvedStatus: "",
  createdBy: ""
};

const ProjectCreate = () => {
  const [values, setValues] = useState(initialState);
  const { isAuthenticated, user } = useSelector(state => state.auth)

  // destructure
  const {
  title,
  projectDescription,
  sampleImage,
  dueDate1,
  dueDate2,
  compulsoryWordings,
  colors,
  leaderPhoto,
  status,
  approvedStatus,
  createdBy
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
  //   if (isAuthenticated === true && user.role !== 'superadmin') {
  //     return <Navigate to="/" />
  // }
    console.log("Project", values)
    axios.post("http://localhost:5000/project", values )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
       
        <div className="col-md-10">
          <h4>Project create</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Project Description</label>
              <input
                type="text"
                name="projectDescription"
                className="form-control"
                value={projectDescription}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Sample Image</label>
              <input
                type="file"
                name="sampleImage"
                className="form-control"
                value={sampleImage}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Due Date 1</label>
              <input
                type="date"
                name="dueDate1"
                className="form-control"
                value={dueDate1}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Due Date 2</label>
              <input
                type="date"
                name="dueDate2"
                className="form-control"
                value={dueDate2}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Compulsory Wordings</label>
              <input
                type="text"
                name="compulsoryWordings"
                className="form-control"
                value={compulsoryWordings}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Color</label>
              <select
                name="color"
                className="form-control"
                onChange={handleChange}
              >
                <option>Please select</option>
                {colors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Leader Photo</label>
              <input
                type="file"
                name="leaderPhoto"
                className="form-control"
                value={leaderPhoto}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                onChange={handleChange}
                className="form-control"
                defaultValue={status}
                name="status"
              >
                
                <option value="Processing">Processing</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="form-group">
              <label>Approved Status</label>
              <input
                type="text"
                name="approvedStatus"
                className="form-control"
                value={approvedStatus}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Created By</label>
              <input
                type="text"
                name="createdBy"
                className="form-control"
                value={createdBy}
                onChange={handleChange}
              />
            </div>
           
            <button className="btn btn-outline-info">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreate;
