import React, { Fragment, useState } from "react";
import { useLocation } from "react-router";
import { userType } from "../commonTypes/userType";

export const User = () => {
  const location = useLocation();
  const user = location.state as userType;
  const [editMode, setEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState(user);

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

  const editModeTrue = () => {
    return (
      <div className="">
        <div className="field">
          <label className="label">Firstname</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              name="first"
              placeholder={userDetails.name.first}
              value={userDetails.name.first}
              onChange={handleChange}
            />
            <span className="icon is-small is-left paddingLeft">
              <i className="fas fa-id-card" />
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label">Lastname</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              name="last"
              placeholder={userDetails.name.last}
              value={userDetails.name.last}
              onChange={handleChange}
            />
            <span className="icon is-small is-left paddingLeft">
              <i className="fas fa-id-card" />
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              name="email"
              placeholder={userDetails.email}
              value={userDetails.email}
              onChange={handleChange}
            />
            <span className="icon is-small is-left paddingLeft">
              <i className="fas fa-envelope" />
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label">Number</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="number"
              name="number"
              value={userDetails.location.street.number}
              onChange={handleChange}
            />
            <span className="icon is-small is-left paddingLeft">
              <i className="fas fa-home" />
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label">Street</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              name="name"
              placeholder={userDetails.location.street.name}
              value={userDetails.location.street.name}
              onChange={handleChange}
            />
            <span className="icon is-small is-left paddingLeft">
              <i className="fas fa-home" />
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label">City</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              name="city"
              placeholder={userDetails.location.city}
              value={userDetails.location.city}
              onChange={handleChange}
            />
            <span className="icon is-small is-left paddingLeft">
              <i className="fas fa-location-arrow" />
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label">Country</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              name="country"
              placeholder={userDetails.location.country}
              value={userDetails.location.country}
              onChange={handleChange}
            />
            <span className="icon is-small is-left paddingLeft">
              <i className="fas fa-globe" />
            </span>
          </p>
        </div>
      </div>
    );
  };

  const editModeFalse = () => {
    return (
      <div>
        <span className="icon-text">
          <span className="icon">
            <i className="fas fa-envelope" />
          </span>
          <span>{userDetails.email}</span>
        </span>
        <br />
        <span className="icon-text">
          <span className="icon">
            <i className="fas fa-location-arrow" />
          </span>
          <span>{userDetails.location.city}</span>
        </span>
        <span className="icon-text">
          <span className="icon">
            <i className="fas fa-home" />
          </span>
          <span>
            {userDetails.location.street.number}{" "}
            {userDetails.location.street.name}
          </span>
        </span>
        <br />
        <span className="icon-text">
          <span className="icon">
            <i className="fas fa-globe" />
          </span>
          <span>{userDetails.location.country}</span>
        </span>
      </div>
    );
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
            {editMode ? editModeTrue() : editModeFalse()}
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
