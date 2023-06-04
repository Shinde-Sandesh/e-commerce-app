import React, { useState, useEffect } from 'react'
import { Navigation } from '../../components/Navigation'
import { Link } from 'react-router-dom'
import img1 from '../../assets/sneakers-shoes-adidas-shoes.jpg';
import img2 from '../../assets/backpack.jpg';
import img3 from '../../assets/cycles.png';
import './Landing.css'

export default function LandingPage() {

  const[categoryData, setCategoryData] = useState([])

  const fetchData = async () => {
    const response = await fetch("/api/categories")
    const data = await response.json()
    console.log(data)
    setCategoryData(data.categories)
  }

    useEffect(() => {
      fetchData();
  }, []);

  // function Categories() {
  //   return (
      
  //   )
  // }

  return (
  <>
    <Navigation />
      <section class="hero">
        <div class="body-cart flex">
          <div class="body-cart-container flex">
            <div>
              <img src={img1} alt='img' class="body-cart-image" />
            </div>
            <div class="body-cart-description">
              <h4 class="body-cart-heading">SPORTING ESSENTIALS TO HELP YOU TRAIN LIKE A PRO</h4>
              <p class="para-description">
                The adidas range of men's shoes has got you covered, if you're striving to be the best or you just want the best fit for your daily life. With iconic designs and high-performance technologies, you can be sure that your shoes won't let you down.
              </p>
              <div class="btn-class">
                <Link to="product" className="btn round-button-1" type="button">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="hero flex">
        {/* <div class="image-card">
          <img src={img1} alt='img' class="shoe"/>
          <img src={img1} alt='img' class="shoe"/>
          <img src={img1} alt='img' class="shoe"/>
          <img src={img1} alt='img' class="shoe"/>
        </div> */}
        <div>
        <h2>Categories</h2>
        <ul>
          {categoryData.length > 0 && (
            <>
              {categoryData.map((category) => 
                <li style={{ listStyle: "none" }}>
                  <div>
                    <a href='/'><img src={category.image} alt='img' class="shoe"></img></a>
                  </div>
                  {category.categoryName}
                  <p> {category.description} </p>
                </li>
              )}
            </>
          )}
        </ul>;
      </div>
      </section>
    </>
  )
}


