import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLoaderData } from "react-router";
import Banner from "../components/Banner";
import WhyChooseUs from "../components/WhyChooseUs";
import CallToAction from "../components/CallToAction";
import NewFoundRoommate from "./NewFoundRoommate";

const Home = () => {
  const roommates = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <NewFoundRoommate roommates={roommates}></NewFoundRoommate>
       <Outlet></Outlet>
      <WhyChooseUs></WhyChooseUs>
      <CallToAction></CallToAction>
     
    </div>
  );
};

export default Home;
