import React, { useRef, useState } from "react";
import SideTextComponent from "../components/SideTextComponent";
import ItemsSlide from "../components/ItemsSlide";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
function FifthPage() {
    const [numberOfClick, setNumberOfClick] = useState(1);
  
    const ItemArray = [
      {
        img: "https://www.aesop.com/u1nb1km7t5q7/3NERkrIn0dOcjmOMTiqDlv/70be9f433dc806b809b4fa3cd73559b0/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Front_Large_900x916px.png",
        medName: "Immaculate Facial Tonic",
        medQuote: "Exfoliating tonic with a light finish",
      },
      
      {
        img: "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
        medName: "Lucent Facial Concentrate",
        medQuote: "A Vitamin C-rich layering serum",
      },
      {
        img: "https://www.aesop.com/u1nb1km7t5q7/7L3YKrc4RiwBlGCmIs6W6U/9274d84adce052caa7715ca62701c103/Aesop_Skin_Protective_Facial_Lotion_SPF50_50mL_Web_Front_Large_900x916px.png",
        medName: "Protective Facial Lotion SPF50",
        medQuote: "Offers protection from UVA and UVB rays",
      },
      {
        img: "https://www.aesop.com/u1nb1km7t5q7/4hQAXgS0eGue4ds2OyZOIK/5557c667d029da695fd286e5c39f75b1/Aesop-Geranium-Leaf-Duet-with-Product-Large-1584x962px.png",
        medName: "Geranium Leaf Duet",
        medQuote: "A gentle cleanser and aromatic balm",
      },
      {
        img: "https://www.aesop.com/u1nb1km7t5q7/3diH0GAnUrFpI7JU19ZfMQ/99b51cbd41d6c18c3e75cd225ec22674/Aesop_Fragrance_Rozu_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
        medName: "Rozu Eau de Parfum",
        medQuote: "Floral, green and woody",
      },
      {
        img: "https://www.aesop.com/u1nb1km7t5q7/3jqPva1xtBadadHegSTGmm/15e2abea6103475fc23442370737331b/Aesop_Bundle_Cleansing_and_Hydration_for_Dry_Skin_Web_Large_960x1090px.png",
        medName: "Cleansing & Hydration for Dry Skin",
        medQuote: "Ideal for those who favor cream-based formulations",
      },
      {
        img: "https://www.aesop.com/u1nb1km7t5q7/3Nhd8WCdxq9zWNMs3uvOBC/f74a12b5ff26a9a6d845a68e0e115dd7/Aesop_Bundle_Resurrection_Hand_Care_Duo_Web_Large_960x1090px.png",
        medName: "Resurrection Hand Care Duo",
        medQuote: "Two staples for deserving hands",
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

export default FifthPage
