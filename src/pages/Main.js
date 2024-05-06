import React from "react";
import FirstSlide from "../components/FirstSlide";
import Navbar from "../components/Navbar";
import SpecialStrip from "../components/SpecialStrip";
import { useMediaQuery } from "@mui/material";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import SixthPage from "./SixthPage";
import SeventhPage from "./SeventhPage";

function Main() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isLaptop = useMediaQuery("(max-width:1024px)");

  return (
    <div>
      <div>
        <SpecialStrip
          MainText={
            "Purchase two eligible seasonal products to receive a Karst Eau De Parfum sample."
          }
          text={"Browse Formulations"}
          underline={true}
          bgColor={"#c2c2af"}
          isLaptop={isLaptop} // Pass isLaptop as prop
        />
        <SpecialStrip
          MainText={
            "Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on all orders."
          }
          text={"+"}
          bgColor={"#252525"}
          fontColor={"#fffef2"}
          isLaptop={isLaptop} // Pass isLaptop as prop
        />
      </div>
      <div style={{ position: "relative" }}>
        {!isLaptop && !isMobile ? (
          <Navbar
            itemList={[
              "Skin Care",
              "Body & Hand",
              "Hair",
              "Fragrance",
              "Home",
              "Kits & Travel",
              "Gifts",
              "Read",
              "Stores",
              "Facial Appointments",
            ]}
          />
        ) : !isMobile ? (
          <Navbar itemList={["shop", "Read", "Stores"]} />
        ) : (
         
            <div></div>
          
        )}
      </div>
      <FirstSlide />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage/>
      <SeventhPage />
    </div>
  );
}

export default Main;
