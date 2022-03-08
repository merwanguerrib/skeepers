import { UserType } from '../commonTypes/user';
import User from './User';

function UserCard(user:UserType):JSX.Element {
const handleClick = () => {
  return (
    <User {...user}/>
  )
}
  return (
    <div className="column is-one-fifth">
      <div className="card">
          <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{user.name.first} {user.name.last}</p>
              <p className="subtitle is-6"></p>
            </div>
          </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
            <button className="button" onClick={handleClick}>
              <span className="icon-text is-small">
                <i className="fas fa-pen"></i>
              </span>
              <span>Edit</span>
              </button>
            </div>
          </footer>
        </div>
    </div>
   
  )
}
export default UserCard
