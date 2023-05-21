import './Wishlist.css'
import img1 from '../../assets/sneakers-shoes-adidas-shoes.jpg';
import { Navigation } from '../../components/Navigation'

export default function Wishlist() {
  return (
    <>
      <Navigation />
      <h1 class="wishlist-heading center">My Wishlist</h1>
      <div class="wishist-cart flex flex-wrap">
        <div class="card-container">
          <h4 class="card-with-badge"><i class="fas fa-heart"></i></h4>
          <img class="image-card" src={img1} alt="Jacket" />
            <div class="description">
              <p class="card-heading">Adidas Shoe</p>
              <p class="price">Price : ₹3000</p>
              <button class="cart-button">Move to Cart</button>
            </div>
        </div>
      </div>
    </>
  )
}