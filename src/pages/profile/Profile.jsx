import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AddressForm from '../../components/AddressForm/AddressForm';
import './Profile.css'

export const Profile = () => {

  const formValue = {
    street: "Malabar Hill",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    zipCode: "54321",
    mobile: "1234567890",
  };

  const [check, setChecked] = useState(true);
  const { currUser: user, logoutHandler, token } = useAuth();
  const [show, setShow] = useState(false);
  const [addresses, setAddresses] = useState([formValue]);
  const navigate = useNavigate();

  const handleClose = () => {
    console.log("closed")
    setShow(false);
  }

  const handleRemoveAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };

  const handleShow = () => {
    setShow(true);
  }

  const handleAddressAdded = (newAddress) => {
    setAddresses([...addresses, newAddress]);
    handleClose(); // Close the address form modal
  };


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
                {addresses.map((address, index) => (
                  <div key={index} className="address-container">
                    {/* Display address details here */}
                    <p className="paragraph-md">{user?.firstName} {user?.lastName}</p>
                    <div>
                      <p className="paragraph-sm">
                        {address.street}, {address.city}, {address.state}, {address.country} {address.zipCode}
                      </p>
                      <p className="paragraph-sm">Phone Number : {address.mobile}</p>
                    </div>
                    <div className="address-btn">
                      <button className="btn1 outline-default address-edit">Edit</button>
                      <button
                        className="btn1 outline-danger address-remove"
                        onClick={() => handleRemoveAddress(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
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
        <AddressForm show={show} close={handleClose} onAddressAdded={handleAddressAdded} />
      </div>
    </>
  );
};