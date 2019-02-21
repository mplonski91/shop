import React from "react";
import BigHeading from "./BigHeading";
import FeaturedProducts from "./FeaturedProducts";

const Home = () => (
  <div>
    <BigHeading text="WELCOME TO OUR STORE" />
    <FeaturedProducts heading="desktops" category="desktop" />
    <FeaturedProducts heading="tablets" category="tablet" />
  </div>
);

export default Home;
