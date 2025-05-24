import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Banner from "../components/Banner";
import WhyChooseUs from "../components/WhyChooseUs";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <CallToAction></CallToAction>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
