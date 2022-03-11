import React from "react";
import { userType } from "../commonTypes/userType";

type Props = {
  userDetails: userType;
};

const ViewMode: React.FC<Props> = ({ userDetails }): JSX.Element => {
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

export default ViewMode;
