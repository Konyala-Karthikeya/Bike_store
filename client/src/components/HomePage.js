import React from "react";

import Featured from "./Featured";
import Delivery from "./Delivery";
import TopPicks from "./TopPicks";
import Collection from "./Collection"
import Categories from "./Categories";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import TopNav2 from "./TopNav2";

const HomePage = () => {
  return (
    <div>
      <TopNav2 />
      <Featured />
      {/* <Delivery /> */}
      <TopPicks />
      <Collection />
      <Categories />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default HomePage;
