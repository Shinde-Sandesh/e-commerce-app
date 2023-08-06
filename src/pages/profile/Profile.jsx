import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Profile.css'

export const Profile = () => {

  const [check, setChecked] = useState(true);
  const { currUser: user, logoutHandler, token } = useAuth();
  const navigate = useNavigate();

  const formValue = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  };
  const [formDisplay, setFormDisplay] = useState(false);
  const [addressForm, setAddForm] = useState(formValue);

  const ProfileLogoutHandler = () => {
    logoutHandler();
    navigate('/logout');
  };
  return (
    <div className="profile-container">
      <div className="profile-main-container">
        <h2>Account</h2>

        <div className="profile-main">
          <div className="tabs">
            <input
              type="radio"
              className="tabs"
              id="profile"
              checked={check}
              onChange={() => setChecked(true)}
            />
            <label htmlFor="profile">Profile</label>
            <div className="tab" style={{display : check ? "" : "none"}}>
              <div className="profile-details">
                <h3 className="details-header">Profile Details</h3>

                <div className="profile-details-main">
                  <div className="title">
                    <p className="paragraph-md">Full Name</p>
                    <p className="paragraph-md">Email</p>
                  </div>
                  <div>
                    <p className="paragraph-md">{user?.firstName} {user?.lastName}</p>
                    <p className="paragraph-md"> {user?.email}</p>
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="details-header">Account Settings</h3>
                <button className="btn danger setting-logout" onClick={() => ProfileLogoutHandler()}>
                  Log Out
                </button>
              </div>
            </div>

            <input
              type="radio"
              className="tabs"
              id="address"
              checked={!check}
              onChange={() => setChecked(!check)}
            />
            <label htmlFor="address">Address</label>
            <div className="tab"  style={{display : !check ? "" : "none"}}>
              <h3 className="details-header">My Addresses</h3>
              <div className="address-container">
                    <p className="paragraph-md">name</p>
                    <div>
                      <p className="paragraph-sm">
                        street, city, state. zipCode
                      </p>
                      <p className="paragraph-sm">country.</p>
                      <p className="paragraph-sm">Phone Number : mobile</p>
                    </div>
                    <div className="address-btn">
                      <button className="btn1 outline-default address-edit">Edit</button>
                      <button className="btn1 outline-danger address-remove">Remove</button>
                    </div>
                  </div>
              <button
                onClick={() => {
                  setFormDisplay(true);
                  setAddForm(formValue);
                }}
                className={`btn default address-add ${formDisplay && "displayNone"}`}
              >
                + Add New Address
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <AddressForm
        addressForm={addressForm}
        setAddForm={setAddForm}
        formDisplay={formDisplay}
        setFormDisplay={setFormDisplay}
        formValue={formValue}
      /> */}
    </div>
  );
};
