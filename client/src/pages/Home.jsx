import React from "react";
import NavBar from "../components/NavBar";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <NavBar />
      <Search />
      <HomeContent />
      <Footer />
    </>
  );
};

export default Home;
