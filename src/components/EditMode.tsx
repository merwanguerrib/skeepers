import { userType } from "../commonTypes/userType";

type Props = {
  userDetails: userType;
  handleChange: (e: { target: HTMLInputElement }) => void;
};

const EditMode: React.FC<Props> = ({
  userDetails,
  handleChange,
}): JSX.Element => {
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
export default EditMode;
