import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import AddressForm from '../../components/AddressForm/AddressForm';
import './Profile.css'

export const Profile = () => {

  const [check, setChecked] = useState(true);
  const { currUser: user, logoutHandler, token } = useAuth();
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(false);
  // const [addressForm, setAddForm] = useState(formValue);
  const navigate = useNavigate();


  const formValue = {
    street: "Malabar Hill",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    zipCode: "54321",
    mobile: "1234567890",
  };

  const handleClose = () => {
    console.log("closed")
    setShow(false);}
  const handleShow = () => {
    console.log("Address button clicked")
    setShow(true);
  }

  const handleAddressForm = () => {
    console.log("Address button clicked")
  }
  const ProfileLogoutHandler = () => {
    logoutHandler();
    navigate('/logout');
  };
  return (
    <>
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
              <div className="tab" style={{ display: check ? "" : "none" }}>
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
              <div className="tab" style={{ display: !check ? "" : "none" }}>
                <h3 className="details-header">My Addresses</h3>
                <div className="address-container">
                  <p className="paragraph-md">{user?.firstName} {user?.lastName}</p>
                  <div>
                    <p className="paragraph-sm">
                      {formValue["street"]}, {formValue['city']}, {formValue['state']}, {formValue['country']} {formValue['zipCode']}
                    </p>
                    <p className="paragraph-sm">{formValue['country.']}</p>
                    <p className="paragraph-sm">Phone Number : {formValue['mobile']}</p>
                  </div>
                  <div className="address-btn">
                    <button className="btn1 outline-default address-edit">Edit</button>
                    <button className="btn1 outline-danger address-remove">Remove</button>
                  </div>
                </div>
                <button
                  onClick={handleShow}
                  className={`btn default address-add`}
                >
                  + Add New Address
                </button>
              </div>
            </div>
          </div>
        </div>
        <AddressForm show={show} close={handleClose} />
      </div>
    </>
  );
};
