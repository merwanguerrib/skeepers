import React, { Fragment, useState } from "react";
import { useLocation } from "react-router";
import { userType } from "../commonTypes/userType";
import EditMode from "./EditMode";
import ViewMode from "./ViewMode";

export const User = (): JSX.Element => {
  const location = useLocation();
  const user = location.state as userType;
  const [editMode, setEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState<userType>(user);

  const handleChange = (e: { target: HTMLInputElement }) => {
    setUserDetails(
      (prevUser): userType => ({
        name: {
          ...prevUser.name,
          [e.target.name]: e.target.value,
        },
        location: {
          ...prevUser.location,
          [e.target.name]: e.target.value,
          street: {
            ...prevUser.location.street,
            [e.target.name]: e.target.value,
          },
        },
        email: e.target.name !== "email" ? prevUser.email : e.target.value,
      })
    );
  };

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <Fragment>
      <div className="card vc-center ">
        <header className="card-header">
          <p className="card-header-title">
            {userDetails.name.first} {userDetails.name.last}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {editMode ? (
              <EditMode userDetails={userDetails} handleChange={handleChange} />
            ) : (
              <ViewMode userDetails={userDetails} />
            )}
          </div>
          <footer className="card-footer">
            {editMode ? (
              <p className=" card-footer-item">
                <button
                  className="button is-success"
                  onClick={() => handleSave()}
                >
                  <span className="icon ">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="paddingLeft">Save</span>
                </button>
              </p>
            ) : (
              <p className=" card-footer-item">
                <button className="button" onClick={() => setEditMode(true)}>
                  <span className="icon ">
                    <i className="fas fa-pen"></i>
                  </span>
                  <span className="paddingLeft">Edit</span>
                </button>
              </p>
            )}
          </footer>
        </div>
      </div>
    </Fragment>
  );
};
