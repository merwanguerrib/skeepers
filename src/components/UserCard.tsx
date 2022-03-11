import { Link } from "react-router-dom";
import { userType } from "../commonTypes/userType";
import { Button } from "./sharedComponents/Button";

function UserCard(user: userType): JSX.Element {
  return (
    <div className="column is-one-fifth">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {user.name.first} {user.name.last}
              </p>
              <p className="subtitle is-6"></p>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">
            <Link to={"/user"} state={user}>
              <Button icon={"info"} text={"View"} />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default UserCard;
