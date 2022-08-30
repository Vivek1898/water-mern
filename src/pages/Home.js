// import React from "react";
// import Jumbotron from "../components/cards/Jumbotron";
// import NewArrivals from "../components/home/NewArrivals";
// import BestSellers from "../components/home/BestSellers";
// import CategoryList from "../components/category/CategoryList";
// import SubList from "../components/sub/SubList";

// const Home = () => {
//   const mystyle={
//     "backgroundColor":"black"
//   }
//   return (
//     <>
//      <div >
//      <div  className="jumbotron text-danger h1 font-weight-bold text-center">
//         <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
//       </div>

//       <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
//         New Arrivals
//       </h4>
//       <NewArrivals />

//       <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
//         Best Sellers
//       </h4>
//       <BestSellers />

//       <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
//         Categories
//       </h4>
//       <CategoryList />

//       <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
//         Sub Categories
//       </h4>
//       <SubList />

//       <br />
//       <br />
//      </div>
//     </>
//   );
// };

// export default Home;


import './home.css'

import { AboutUs } from "../components/home/AboutUs";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import { Footer } from "../components/footer/Footer";
import Hero from "../components/home/Hero";
import { ImageExp } from "../components/home/ImageExp";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import React from "react";
import SubList from "../components/sub/SubList";
import { WhyWe } from "../components/home/WhyWe";
const Home = () => {
  const mystyle = {
    "backgroundColor": "black"
  }
  return (
    <div div className="">

      <Hero />


      <WhyWe />

      <AboutUs />
      <div className="bg-light">
        <div className="text-center container">
          <h5 className="text-warning pt-5">Premium Quality</h5>
          <h1>Our Bestseller</h1>
        </div>
        <BestSellers />
      </div>



      <ImageExp />
      <div className="bg-light">
        <div className="text-center container">
          <h5 className="text-warning pt-5">Premium Quality</h5>
          <h1>New Arrivals</h1>
        </div>
        <NewArrivals />
      </div>


      {/* 
      <div className="jumbotron text-danger bg-white h1 font-weight-bold text-center">
        <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
      </div>
      <div > */}

      {/* 
      <CategoryList /> */}

      {/* <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
          Sub Categories
        </h4>
        <SubList /> */}

      {/* </div> */}
      <Footer />

    </div >
  );
};

export default Home;