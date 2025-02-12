import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import mainImg from '../../assets/Sports-Logo-Designs-1280x720.jpg'
import './Landing.css'

export default function LandingPage() {

  const [categoryData, setCategoryData] = useState([])

  const fetchData = async () => {
    const response = await fetch("/api/categories")
    const data = await response.json()
    console.log(data)
    setCategoryData(data.categories)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <Navigation /> */}
      <section className="hero">
        <div className="body-cart flex">
          <div className="body-cart-container flex">
            <div>
              <img src={mainImg} alt='img' className="body-cart-image" />
            </div>
            <div className="body-cart-description">
              <h4 className="body-cart-heading">SPORTING ESSENTIALS TO HELP YOU TRAIN LIKE A PRO</h4>
              <p className="para-description">
                The adidas range of men's shoes has got you covered, if you're striving to be the best or you just want the best fit for your daily life. With iconic designs and high-performance technologies, you can be sure that your shoes won't let you down.
              </p>
              <div className="button-class">
                <Link to="/products" className="round-button-1" type="button">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero flex">
        <div>
          <h2>Categories</h2>
          <ul className='categories'>
            {categoryData.length > 0 && (
              <>
                {categoryData.map((category) =>
                  <li className='categoryCards' key={category._id}>
                    <div>
                      <a href='/'><img src={category.image} alt='img' className="shoe"></img></a>
                    </div>
                    <p style={{display: 'flex', justifyContent: 'center'}}> {category.categoryName} </p>
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


