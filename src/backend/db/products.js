import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    title: "Treadmill Pro X1000",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 45000, 
    categoryName: "Gym",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskDRlsqXxnylMBSfDMjm_eo5-WRw35Wxgug&s"
  },
  {
    _id: uuid(),
    title: "Dumbbell Set (10kg - 50kg)",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 8000,
    categoryName: "Gym",
    image: "https://www.bullrockfitness.com/wp-content/uploads/2021/12/Hex-Dumbbells-1-1.jpg"
  },
  {
    _id: uuid(),
    title: "Adjustable Bench Press",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 12000,
    categoryName: "Gym",
    image: "https://firefit.in/wp-content/uploads/2024/04/31dF8-l4yKL.jpg"
  },
  {
    _id: uuid(),
    title: "Exercise Bike Elite 9000",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 22000,
    categoryName: "Gym",
    image: "https://m.media-amazon.com/images/I/610mdeTfu5L._AC_UF894,1000_QL80_.jpg"
  },
  {
    _id: uuid(),
    title: "Resistance Bands Set",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 1500,
    categoryName: "Gym",
    image: "https://images-cdn.ubuy.co.in/674b75aab9ed6271a71f1c32-bodylastics-resistance-band-set.jpg"
  },
  {
    _id: uuid(), 
    title: "Boxing Gloves Pro",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 3000,
    categoryName: "Sports",
    image: "https://www.phantom-athletics.com/cdn/shop/files/Phantom_Athletics_Boxhandschuhe_RIOT_Pro_fuer_harte_Trainingseinheiten.jpg?v=1737829355"
  },
  {
    _id: uuid(),
    title: "Yoga Mat Premium",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 2000, 
    categoryName: "Gym",
    image: "https://www.jiomart.com/images/product/original/rv5uliyz12/yogwise-premium-yoga-mat-for-men-women-6mm-lightweight-travel-yoga-mat-with-bag-wine-product-images-orv5uliyz12-p602962566-0-202309221457.jpg?im=Resize=(420,420)"
  },
  {
    _id: uuid(),
    title: "Kettlebell 20kg",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 5000,
    categoryName: "Gym",
    image: "https://image.alza.cz/products/SPTiron45/SPTiron45.jpg?width=500&height=500"
  },
  {
    _id: uuid(),
    title: "Jump Rope Steel Wire",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 800,
    categoryName: "Gym",
    image: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1536,b_rgb:f8f8f8/catalog/Conditioning/Jump%20Ropes%20/Training%20Ropes/FOAMROPES/FOAMROPES-WEB1_fsd7t3.png"
  },
  {
    _id: uuid(),
    title: "Foam Roller for Recovery",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 1700,
    categoryName: "Gym",
    image: "https://euvenice.com/cdn/shop/files/euvenice-muscle-recovery-foam-roller-4_98428c8e-63b5-47f1-b186-b4e45e963cb6.jpg?v=1716211118"
  },
  {
    _id: uuid(),
    title: "Soccer Ball Pro League",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 2500,
    categoryName: "Sports",
    image: "https://images-cdn.ubuy.co.in/664cd79638d3cb3f8f304548-adidas-uefa-champions-league-pro-void.jpg"
  },
  {
    _id: uuid(),
    title: "Basketball Spalding",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 3200,
    categoryName: "Sports",
    image: "https://andscape.com/wp-content/uploads/2021/07/74876E_LS_4-e1626124022792.jpg?w=700"
  },
  {
    _id: uuid(),
    title: "Tennis Racket Carbon Fiber",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 7000,
    categoryName: "Sports",
    image: "https://images-na.ssl-images-amazon.com/images/I/71ANPxT7LML.jpg"
  },
  {
    _id: uuid(),
    title: "Badminton Set (Racket + Shuttle)",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 3500,
    categoryName: "Sports",
    image: "https://www.jiomart.com/images/product/original/rvdujeph9t/triumph-badminton-racket-badminton-shuttle-cock-badminton-racquet-triumph-passion-1-pc-with-12-pc-triumph-neo-5000-shuttlecock-synthetic-nylon-full-cover-product-images-orvdujeph9t-p593535978-0-202208281749.jpg?im=Resize=(1000,1000)"
  },
  {
    _id: uuid(),
    title: "Cricket Bat English Willow",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 8500,
    categoryName: "Sports",
    image: "https://m.media-amazon.com/images/I/61gz0sLo14L.jpg"
  },
  {
    _id: uuid(), 
    title: "Table Tennis Paddle Set",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 1800,
    categoryName: "Sports",
    image: "https://m.media-amazon.com/images/I/81TGD7WSCoL.jpg"
  },
  {
    _id: uuid(),
    title: "Punching Bag Heavy Duty",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 9500,
    categoryName: "Gym",
    image: "https://i5.walmartimages.com/asr/6f6a76a2-d70f-403e-adda-a8b3cbbda1d8.c21d9d428d3467da56161cbaebb9b567.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
  },
  {
    _id: uuid(),
    title: "trekking Bag",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 9500,
    categoryName: "Sports",
    image: "https://m.media-amazon.com/images/I/71IWcTxsI6L._AC_UY1100_.jpg"
  },
  {
    _id: uuid(),
    title: "Cricket Ball",
    rating: `${(Math.random() * 2.5 + 2.5).toFixed(1)}`,
    price: 9500,
    categoryName: "Sports",
    image: "https://a2cricket.com/cdn/shop/files/a2cricket52_800x.jpg?v=1711780962"
  },
];
