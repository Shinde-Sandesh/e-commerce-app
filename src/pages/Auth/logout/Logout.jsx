import { useNavigate } from 'react-router-dom';
import './Logout.css'

const Logout = () => {
  const navigate = useNavigate();
  return (
    <div className='logout-container'>
      <main className='logout-main-container'>
        <div className='logout-text'>
          <h2>You are currently logged out</h2>
          <p>Don't miss out on the latest deals.</p>
          <button className='link-btn' onClick={() => navigate('/products')}>
            See products
          </button>
        </div>
        {/* <div className='img-responsive-container obj-pos-tp-ct logout-img-container'>
          <img
            className='img-responsive'
            src='https://blog-www.pods.com/wp-content/uploads/2019/10/29_4_Clothes_Drawer-1-1024x711.jpg'
            alt='logout image'
          />
        </div> */}
      </main>
    </div>
  );
};

export default Logout;
