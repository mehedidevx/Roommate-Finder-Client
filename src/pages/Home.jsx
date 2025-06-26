import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLoaderData } from "react-router";
import Banner from "../components/Banner";
import WhyChooseUs from "../components/WhyChooseUs";
import CallToAction from "../components/CallToAction";
import NewFoundRoommate from "./NewFoundRoommate";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const roommates = useLoaderData();
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <NewFoundRoommate roommates={roommates}></NewFoundRoommate>
       <Outlet></Outlet>
      {/* <WhyChooseUs></WhyChooseUs> */}
      <OurServices></OurServices>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
     
    </div>
  );
};

export default Home;
