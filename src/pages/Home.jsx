import React from "react";
import Products from "../components/Products";
import Banner from "../components/Banner";
import HomeCover from "../components/HomeCover";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Banner />
      <HomeCover />
      <Products />
      <Footer />
    </>
  );
}

export default Home;
