import React, { useState, useEffect } from "react";
import {
  Hero,
  MiddleBannerQ,
  MiddleBannerA,
  Features,
  Carrousel,
  Layout,
  SomeArticles
} from "../../components";
import Splash from "../splash";


function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <Layout title="Iclinic | Home">
          <Hero /> 
          <Features /> 
          <MiddleBannerA /> 
          <MiddleBannerQ />
          <Carrousel />
          <SomeArticles/>
        </Layout>
      )}
    </>
  );
}

export default Home;
