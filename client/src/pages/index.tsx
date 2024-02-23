import React, { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import CategoriesSl from "@/components/CategoriesSl";

export default function Home() {

    return (
      <div style={{ background: `linear-gradient(to top, rgba(0, 128, 128, 0.196), white)`, padding:'20px', overflow:'hidden' }}>
        <Navbar />
        <Slider />
        <CategoriesSl/>
        <Products  filters={{}} sort="" />
        <Footer />
      </div>      
    );
  }
