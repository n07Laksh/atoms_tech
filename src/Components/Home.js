import React from "react";
import "../Style/Home.css"
import Cards from "./Cards";

const Home = () => {
  return (
    <>
      <div className="home_main">
        <div className="home_fst_content">
          <div>
            <div className="what_sell">What we sell -----</div>
            <div className="product_offer">Products <span style={{color:"red"}}>on Offer</span></div>
          </div>
          <div className="atm-desc">
            Atoms Technology Consulting offers a bouquet of carefully selected
            products by renowned manufacturers who have stood the test of time.
            Our partnerships around the world have only one aim – to get
            products for our customers which are the most profitable in short as
            well as long run.
          </div>
        </div>

        <div className="home_sec_content">
          <Cards />
        </div>
        
        <div className="home_sec_content">
          <Cards />
        </div>


      </div>
    </>
  );
};

export default Home;
