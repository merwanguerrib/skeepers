import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { userType } from '../commonTypes/userType';

export const User = () => {
  const location = useLocation();
  const user = location.state as userType;
  const [editMode, setEditMode] = useState(false)

  const handleSave = () => {
    setEditMode(false)
  }

  const editModeTrue = () => {
    return (
  <div className="">
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

    )
  } 

  const editModeFalse = () => {
    return (
      <div className="">
      <span className="icon-text">
        <span className="icon">
          <i className="fas fa-envelope" />
        </span>
        <span>{user.email}</span>
      </span>
      <br />
      <span className="icon-text">
        <span className="icon">
          <i className="fas fa-location-arrow" />
        </span>
        <span>{user.location.city}</span>
      </span>
      <span className="icon-text">
        <span className="icon">
          <i className="fas fa-home" />
        </span>
        <span>{user.location.street.number} {user.location.street.name}</span>
      </span>
      <br />
      <span className="icon-text">
        <span className="icon">
          <i className="fas fa-globe" />
        </span>
        <span>{user.location.country}</span>
      </span>
    </div>
    )
  } 

  useEffect(() => {
    console.log(editMode)
  }, [editMode])
  

   return (
    <Fragment>
      <div className="card vc-center ">
        <header className="card-header">
          <p className="card-header-title">
            {user.name.first} {user.name.last}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            { editMode ? editModeTrue() : editModeFalse() }
          </div>
        <footer className="card-footer">
            <div className="field is-grouped">
              <p className=" card-footer-item">
              <button className="button is-success" onClick={()=> handleSave()}>
                <span className="icon ">
                  <i className="fas fa-check"></i>
                </span>
                <span>Save</span>
              </button>
              </p>
              <p className=" card-footer-item">
              <button className="button" onClick={()=> setEditMode(true)}>
                <span className="icon ">
                  <i className="fas fa-pen"></i>
                </span>
                <span>Edit</span>
              </button>
              </p>
            </div>
        </footer>
      </div>
    </div>
  </Fragment>
  )
}
