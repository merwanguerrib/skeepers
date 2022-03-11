import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { userType } from "../commonTypes/userType";
import EditMode from "./EditMode";
import ViewMode from "./ViewMode";
import { Button } from "./sharedComponents/Button";

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
  const handleEdit = () => {
    setEditMode(true);
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
              <Button
                icon={"check"}
                success={"is-success"}
                handleClick={handleSave}
                text={"Save"}
              />
            ) : (
              <Button icon={"pen"} handleClick={handleEdit} text={"Edit"} />
            )}
          </footer>
        </div>
      </div>
    </Fragment>
  );
};
