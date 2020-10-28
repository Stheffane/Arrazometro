import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Body from "../Body";

import useWindowDimensions from "../../hooks/useWindowDimentions"

const Layout = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Header />
      <Body />

      { width >= 870 && <Footer />}
      
    </>
  );
};

export default Layout;
