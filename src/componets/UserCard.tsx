import { User } from '../commonTypes/user';

function UserCard(user:User):JSX.Element {
  console.log(user)
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
            <button className=" card-footer-item button is-success">
              <span className="icon is-small">
                <i className="fas fa-pen"></i>
              </span>
              <span>Edit</span>
              </button>
          </footer>
        </div>
    </div>
   
  )
}
export default UserCard
