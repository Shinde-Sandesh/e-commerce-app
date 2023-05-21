import React from 'react'
// import { useState, useEffect } from 'react';
import { Navigation } from '../../components/Navigation'
import { Link } from 'react-router-dom'
import img1 from '../../assets/sneakers-shoes-adidas-shoes.jpg';
import img2 from '../../assets/backpack.jpg';
import img3 from '../../assets/cycles.png';
import './Landing.css'

export default function LandingPage() {

  const categories = [
    {
      _id: 1,
      categoryName: "Shoes",
      description:
        "literature in the form of prose, especially novels, that describes imaginary events and people",
      image : img1
    },
    {
      _id: 2,
      categoryName: "Backpacks",
      description:
        "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
      image : img2
    },
    {
      _id: 3,
      categoryName: "Cycles",
      description:
        "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      image : img3
    },
  ];

  function Categories() {
    return (
      <div>
        <h2>Categories</h2>
        <ul>
        {categories.map((category) => 
          <li style={{ listStyle: "none" }}>
            <div>
              <a href='/'><img src={category.image} alt='img' class="shoe"></img></a>
            </div>
            {category.categoryName}
            <p> {category.description} </p>
          </li>
        )}
        </ul>;
      </div>)
  }

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
        <div class="image-card">
          <img src={img1} alt='img' class="shoe"/>
          <img src={img1} alt='img' class="shoe"/>
          <img src={img1} alt='img' class="shoe"/>
          <img src={img1} alt='img' class="shoe"/>
          {/* <div>
             {categories &&
              categories.map(({ _id, categoryName, description }) => {
                return (
                  <div className="box" key={_id} onClick={() => categoryHandler(categoryName)}>
                    <div className="detail-box text-center">
                      <h4>{categoryName}</h4>
                      <p className="paragraph-sm">{description}</p>
                    </div>
                  </div>
                );
              })}
          </div> */}
        </div>
        <Categories />
      </section>
    </>
  )
}


