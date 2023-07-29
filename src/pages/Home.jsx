import React from "react";
import Products from "../components/Products";
import Banner from "../components/Banner";
import HomeCover from "../components/HomeCover";

function Home() {
  return (
    <>
      <Banner />
      <HomeCover />
      <Products />
    </>
  );
}

export default Home;
