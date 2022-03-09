import React, { Fragment } from 'react'
import { useLocation } from 'react-router'
import { userType } from '../commonTypes/userType';

export const User = () => {
  const location = useLocation();
  const user = location.state as userType;
   return (
    <Fragment>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {user.name.first} {user.name.last}
          </p>
          <button className="card-header-icon" aria-label="Edit">
            <span className="icon">
              <i className="fas fa-pen" aria-hidden="true" />
            </span>
          </button>
        </header>
        <div className="card-content">
          <div className="content">
          <div className="field">
      <label className="label">Firstname</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="first" placeholder={user.name.first} value={user.name.first} />
            <span className="icon is-small is-left">
              <i className="fas fa-id-card" />
            </span>
        </p>
      </div>
      <div className="field">
      <label className="label">Lastname</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="last" placeholder={user.name.last} value={user.name.last} />
            <span className="icon is-small is-left">
              <i className="fas fa-id-card" />
            </span>
        </p>
      </div>
      <div className="field">
      <label className="label">Email</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" name="email" placeholder={user.email} value={user.email} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
        </p>
      </div>
      <div className="field">
      <label className="label">Number</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="number" name="number" value={user.location.street.number} />
            <span className="icon is-small is-left">
              <i className="fas fa-map-location-dot" />
            </span>
        </p>
      </div>
      <div className="field">
      <label className="label">Street</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="street" placeholder={user.location.street.name} value={user.location.street.name} />
            <span className="icon is-small is-left">
              <i className="fas fa-map-location-dot" />
            </span>
        </p>
      </div>
      <div className="field">
      <label className="label">City</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="city" placeholder={user.location.city} value={user.location.city} />
            <span className="icon is-small is-left">
              <i className="fas fa-map-location-dot" />
            </span>
        </p>
      </div>
      <div className="field">
      <label className="label">Country</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="country" placeholder={user.location.country} value={user.location.country} />
            <span className="icon is-small is-left">
              <i className="fas fa-earth-europe" />
            </span>
        </p>
      </div>

          </div>
        </div>
        <footer className="card-footer">
          <a href="" className="card-footer-item">Save</a>
          <a href="" className="card-footer-item">Edit</a>
        </footer>
      </div>
      
      {/* <div className="field">
      <label className="label">Firstname</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="first" placeholder={user.name.first} value={user.name.first} />
            <span className="icon is-small is-left">
              <i className="fas fa-id-card" />
            </span>
        </p>
      </div>
      <div className="field">
      <label className="label">Lastname</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="last" placeholder={user.name.last} value={user.name.last} />
            <span className="icon is-small is-left">
              <i className="fas fa-id-card" />
            </span>
        </p>
      </div>
      <div className="field">
      <label className="label">Email</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" name="email" placeholder={user.email} value={user.email} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
        </p>
      </div>
      <div className="field">
      <label className="label">Number</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="number" name="number" value={user.location.street.number} />
            <span className="icon is-small is-left">
              <i className="fas fa-map-location-dot" />
            </span>
        </p>
      </div>
      <div className="field">
      <label className="label">Street</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="street" placeholder={user.location.street.name} value={user.location.street.name} />
            <span className="icon is-small is-left">
              <i className="fas fa-map-location-dot" />
            </span>
        </p>
      </div>
      <div className="field">
      <label className="label">City</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="city" placeholder={user.location.city} value={user.location.city} />
            <span className="icon is-small is-left">
              <i className="fas fa-map-location-dot" />
            </span>
        </p>
      </div>
      <div className="field">
      <label className="label">Country</label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="country" placeholder={user.location.country} value={user.location.country} />
            <span className="icon is-small is-left">
              <i className="fas fa-earth-europe" />
            </span>
        </p>
      </div>
        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={handleClick}>
              Save
            </button>
          </p>
        </div> */}
  </Fragment>
  )
}
