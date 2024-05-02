import React, { useEffect, useState } from "react";
import { ArrowRightOutlined,LeftOutlined,RightOutlined } from "@ant-design/icons";

function FirstSlide() {
  const items = [
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/7Imo9dLHKBnqUO6aWwOyni/6a842852ce91de8e786a9e0f930237e9/Aesop_Gifting_2024_Mothers_Day_Web_Homepage_Primary_Full_Bleed_Desktop_5120x1856px.jpg",
      imgWidth: "100%",
      divWidth: "0%",
      firstQuote:"Mother's Day",
      secondQuote:"For the discerning",
      thirdQuote:"Our range of products provides ample options for even the most particular of gift-givers and recipients—fitting choices to reciprocate maternal guidance.",
      leftColor: '#fffef2',
      buttonQuote:"Discover Mother's Day gifts",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/2U9uhIgSFJ82Uke7M3Zgle/5f095af534b8acee7b6c97c144499630/Aesop_Exfoliating_Replenishing_Duo_HK_Web_Homepage_Secondary_50-50_Desktop_1440x1500px.jpg",
      imgRight: 0,
      leftColor: '#000',
      divWidth:'50%',
      imgWidth:'50%',
      firstQuote:"Warm weather companions",
      secondQuote:"Exfoliating and Replenishing Duo",
      thirdQuote:"Support the skin as humidity rises by polishing away dead skin cells with a cream exfoliant and following with a hydrating, refreshing gel-based masque twice weekly.",
      bgColor:'#F6F5E8',
      buttonQuote:'Discover the duo',
      bgBorderColor: 'rgba(51,51,51,.2)'
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/7rQmw3i6gAn6z5s7QMsVD3/8cf186888ddd1c6da615a7d2d3ce71ec/Aesop_IFT_2024_Web_Homepage_3_GL_Primary_50-50_Desktop_1440x1500px.jpg",
      imgRight: 0,
      leftColor: '#000',
      divWidth:'50%',
      imgWidth:'50%',
      firstQuote:"Skin Care",
      secondQuote:"Vitamin-enriched skin care",
      thirdQuote:"With generous measures of efficacious botanicals and skin-supportive ingredients, the Skin Care+ range was designed to provide optimal replenishment.",
      buttonQuote:'Discover the range',
      bgColor:'#F6F5E8',
      bgBorderColor: 'rgba(51,51,51,.2)'
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);


  const handleNext = () =>{
    setCurrentSlide((currentSlide + 1) % items.length);
  }

  const handlePrev = () =>{
    setCurrentSlide((currentSlide - 1 + items.length) % items.length);
  }


  return (
    <div style={{ position: "relative" }}>
    
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: items[currentSlide].divWidth,backgroundColor: items[currentSlide].bgColor,height: 500,position:'absolute'}}></div>
          <img
            src={items[currentSlide].img}
            alt=""
            style={{
              position: "absolute",
              width: items[currentSlide].imgWidth,
              height: 500,
              right: items[currentSlide].imgRight,
              objectFit: "cover",
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </div>
      

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          height: 500,
          flexDirection: "row",
          gap: 60,
          marginLeft: "5%",
          alignItems: "center",
          color:items[currentSlide].leftColor,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: 500,
            marginTop: 150,
          }}
        >
          <div
            style={{
              fontSize: 42,
              color:items[currentSlide].leftColor,
            }}
          >
            Aesop
          </div>
        </div>

        <div
          style={{
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "calc(33.3333333333% - 80px)",
            gap: 15,
          }}
        >
            
          <div style={{ fontSize: ".875rem", fontWeight: 700,color:items[currentSlide].leftColor, }}>
          {items[currentSlide].firstQuote}
          </div>
          <div style={{ fontSize: "1.875rem" }}>          {items[currentSlide].secondQuote}</div>
          <div style={{ lineHeight: 1.7, fontSize: "1rem", fontWeight: 500 }}>
          {items[currentSlide].thirdQuote}
          </div>
          <div
            style={{
                borderWidth: 1,
                borderStyle:'solid',
              borderColor: '{items[currentSlide].bgBorderColor}',
              width: 250,
              display: "flex",
              gap: 25,
             height: 60,
             alignItems: "center",
             padding: '0 12px',
             justifyContent:'space-between'
            }}
          >
            <div>{items[currentSlide].buttonQuote}</div>
            <div>
              <ArrowRightOutlined />
            </div>
          </div>
        </div>
      </div>
      <div style={{textAlign:'center',display:'flex',gap:20,justifyContent:'center',marginTop:8,alignItems:'center',fontSize:14,color:'#333'}}>
      <LeftOutlined onClick={handlePrev}/>
      {currentSlide + 1} / {items.length}
      <RightOutlined onClick={handleNext}/>
      </div>
    </div>
  );
}

export default FirstSlide;
