import React, { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import Wrapper from "@/components/Wrapper";

export default function Home() {

    return (
      <div style={{ background: `linear-gradient(to top, rgba(0, 128, 128, 0.196), white)`, padding:'20px' }}>
        <Navbar />
        <Slider />
        <Wrapper />
        <Products  filters={{}} sort="" />
        <Footer />
      </div>      
    );
  }
