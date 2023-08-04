// import './Profile.css';
import { NavLink, Outlet } from 'react-router-dom';

export const Profile = () => {
  const toggleActive = ({ isActive }) => {
    return isActive
      ? 'profile-nav-item nav-link-active'
      : 'profile-nav-item nav-link';
  };
  return (
    <div className='profile-outer-container'>
      <div className='profile-container'>
        <div className='profile-nav'>
          {/* <NavLink to={'/profile/details'} className={toggleActive}>
            Profile Information
          </NavLink>
          <NavLink to={'/profile/addresses'} className={toggleActive}>
            Addresses
          </NavLink>
          <NavLink to={'/profile/orders'} className={toggleActive}>
            Order History
          </NavLink> */}
          <h2>Account</h2>
        </div>
        <div className='profile-details'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
