import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12321341"
            title="Coutgo Women's One Strap Heeled Sandals Open Toe Bow Knot Satin Ankle Buckle Stiletto Summer Shoes"
            price={39.69}
            rating={4}
            image="https://m.media-amazon.com/images/I/31UfzDHNwaL._AC_SR400,600_.jpg"
          />
          <Product
            id="49538094"
            title="Professional Makeup Kit Set, All in One Makeup Kit for Women Full Kit, includes 12 Colors Eyeshadow Palette, Liquid Foundation & Concealer, Liquid Lipstick, Face Blush, Makeup Brush, Makeup Sponge, Eyebrow Soap, Winged Eyeliner Stamp, Makeup Gift Set for Women, Girls & Teens"
            price={23.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71MqzfRattL._SX466_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Michael Kors Women's Ritz Watch"
            price={225.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/91fFXUtLGnL._AC_UY741_.jpg"
          />
          <Product
            id="99903850"
            title="Apple iPad Pro 12.9-inch(6th Generation): with M2 chip, Liquid Retina XDR Display, 128GB, Wi-Fi 6E, 12 MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life-Space Gray"
            price={1049.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX522_.jpg"
          />
          <Product
            id="3254354345"
            title="Beats Solo3 Wireless On-Ear Headphones-Apple W1 Headphone Chip, class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone-Rose Gold(Latest Model"
            price={129.0}
            rating={4}
            image="	https://m.media-amazon.com/images/I/51PbyjVSxsL._AC_SX522_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="SAMSUNG CJ79 Series 34-Inch ViewFinity Ultrawide QHD (344X1440)Computer Monitor, 100 HZ, Thunderbolt 3 Daisy Chain,QLED,HDMI,USB Hub,Height Adjustable Stand(LC34J791WTNAXZA)"
            price={485.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/81oADRhNq2L._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
