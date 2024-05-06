import React, { useRef, useState } from "react";
import SideTextComponent from "../components/SideTextComponent";
import ItemsSlide from "../components/ItemsSlide";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
function SeventhPage() {
    const [numberOfClick, setNumberOfClick] = useState(1);
  
    const ItemArray = [
      {
        img: "https://www.aesop.com/u1nb1km7t5q7/7L3YKrc4RiwBlGCmIs6W6U/9274d84adce052caa7715ca62701c103/Aesop_Skin_Protective_Facial_Lotion_SPF50_50mL_Web_Front_Large_900x916px.png",
        medName: "Protective Facial Lotion SPF50",
        medQuote: "Offers protection from UVA and UVB rays",
      },
      {
        img: "https://www.aesop.com/u1nb1km7t5q7/7rQwKlCTwpQ5vNOQBwg7KA/8c79ad1019aa5dfe09583f5a02c77701/Aesop_Skin_Protective_Facial_Lotion_SPF25_Asia_EU_Web_Large_782x796px.png",
        medName: "Protective Facial Lotion SPF25",
        medQuote: "Broad-spectrum protection and hydration",
        
      },
      {
        img: "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
        medName: "Lucent Facial Concentrate",
        medQuote: "A Vitamin C-rich layering serum",
      },
      {
        img: "https://images.ctfassets.net/u1nb1km7t5q7/3EfM6zrFfHbrUaVxQSoR7A/f40aa3b013d2b7a62645644891a33b38/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Medium_535x522px.png",
        medName: "Exalted Eye Serum",
        medQuote: "Lightweight, vitamin-rich serum",
      },
      {
        img: "https://images.ctfassets.net/u1nb1km7t5q7/7rW6gSSdQaKEYUYCzvyUAO/bbe51282897aa259c0943a39f92fe996/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Large_901x478px.png",
        medName: "Sublime Replenishing Night Masque",
        medQuote: "Richly nourishing hydration for overnight use",
      },
      {
        img: "https://www.aesop.com/u1nb1km7t5q7/53Q5a81QFoAlk9fqyzPRWi/ff703aa4abdc6d0fa3479da1347a19a7/Aesop_Skin_Damascan_Rose_Facial_Treatment_25mL_Web_Large_684x668px.png",
        medName: "Damascan Rose Facial Treatment",
        medQuote: "A blend of vitamin-rich botanical extracts",
      },
    ];
  
    const scrollContainerRef = useRef(null);
  
    const scrollToRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
      }
      if(numberOfClick > 3){
        setNumberOfClick(4);
      }
      else
      setNumberOfClick(numberOfClick + 1);
    };
  
    const scrollToLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
  
        
      }
      if(numberOfClick < 2){
        setNumberOfClick(1);
      }
      else
      setNumberOfClick(numberOfClick - 1);
    };
  
    return (
      <div
        style={{ display: "flex", flexDirection: "column", position: "relative" }}
      >
        <div
          style={{
            paddingLeft: 100,
            display: "flex",
            height: 700,
            flexDirection: "row",
            alignItems: "center",
            overflowX: "auto", // Changed to auto to enable horizontal scrolling
          }}
          ref={scrollContainerRef}
        >
          <SideTextComponent
            shadowBg={"none"}
            firstQuote={"Sun Care and SPF"}
            secondQuote={"Pair time in the sun with intelligent care"}
                        thirdQuote={
              "Daily protection from damaging UVA and UVB sun rays is key to sustaining healthy, supple skin. In addition to protection, Aesop SPF formulations deliver hydration and skin-softening nourishment."
            }
            buttonQuote={"Browse formulations"}
          />
          <ItemsSlide ItemArray={ItemArray} />
        </div>
  
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            width: 70,
            height: 70,
            backgroundColor: "#333",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={scrollToLeft}
        >
          <ArrowLeftOutlined style={{ color: "white" }} />
        </div>
  
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            width: 70,
            height: 70,
            backgroundColor: "#333",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={scrollToRight}
        >
          <ArrowRightOutlined style={{ color: "white" }} />
        </div>
  
  
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div
    style={{
      height: 5,
      backgroundColor: "rgba(0,0,0,.2)",
      position: "relative",
      width: "90%",
      display: "flex",
      flexDirection: "row",
      transition: "width 0.5s ease", // Apply transition to width property
    }}
  >
    {numberOfClick === 1 && (
      <div
        style={{
          width: "25%",
          backgroundColor: "rgba(0,0,0,.6)",
          height: "100%",
          position: "relative",
          left: 0,
          transition: "left 0.5s ease", // Also apply transition to left property if you want smooth movement
        }}
      ></div>
    )}
  
    {numberOfClick === 2 && (
      <div
        style={{
          width: "25%",
          backgroundColor: "rgba(0,0,0,.6)",
          height: "100%",
          left: "25%",
          position: "relative",
          transition: "left 0.5s ease",
        }}
      ></div>
    )}
  
    {numberOfClick === 3 && (
      <div
        style={{
          width: "25%",
          backgroundColor: "rgba(0,0,0,.6)",
          height: "100%",
          left: "50%",
          position: "relative",
          transition: "left 0.5s ease",
        }}
      ></div>
    )}
  
    {numberOfClick === 4 && (
      <div
        style={{
          width: "25%",
          backgroundColor: "rgba(0,0,0,.6)",
          height: "100%",
          position: "relative",
          left: "75%",
          transition: "left 0.5s ease",
        }}
      ></div>
    )}
  </div>
  
        </div>
      </div>
    );
  }

export default SeventhPage
