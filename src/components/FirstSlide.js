import React, { useEffect, useState } from "react";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
  CaretRightOutlined,
  PauseOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "@mui/material";
import Navbar from "./Navbar";

function FirstSlide() {
  const isMobile = useMediaQuery("(max-width:640px");
  const isLaptop = useMediaQuery("(max-width:1024px");

  const items = [
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/7Imo9dLHKBnqUO6aWwOyni/6a842852ce91de8e786a9e0f930237e9/Aesop_Gifting_2024_Mothers_Day_Web_Homepage_Primary_Full_Bleed_Desktop_5120x1856px.jpg",
      imgWidth: "100%",
      divWidth: "0%",
      firstQuote: "Mother's Day",
      secondQuote: "For the discerning",
      thirdQuote:
        "Our range of products provides ample options for even the most particular of gift-givers and recipients—fitting choices to reciprocate maternal guidance.",
      leftColor: "#fffef2",
      bgColor: "#333",
      buttonQuote: "Discover Mother's Day gifts",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/2U9uhIgSFJ82Uke7M3Zgle/5f095af534b8acee7b6c97c144499630/Aesop_Exfoliating_Replenishing_Duo_HK_Web_Homepage_Secondary_50-50_Desktop_1440x1500px.jpg",
      imgRight: 0,
      leftColor: "#000",
      divWidth: "50%",
      imgWidth: "50%",
      firstQuote: "Warm weather companions",
      secondQuote: "Exfoliating and Replenishing Duo",
      thirdQuote:
        "Support the skin as humidity rises by polishing away dead skin cells with a cream exfoliant and following with a hydrating, refreshing gel-based masque twice weekly.",
      bgColor: "#F6F5E8",
      buttonQuote: "Discover the duo",
      bgBorderColor: "#333",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/7rQmw3i6gAn6z5s7QMsVD3/8cf186888ddd1c6da615a7d2d3ce71ec/Aesop_IFT_2024_Web_Homepage_3_GL_Primary_50-50_Desktop_1440x1500px.jpg",
      imgRight: 0,
      leftColor: "#000",
      divWidth: "50%",
      imgWidth: "50%",
      firstQuote: "Skin Care+",
      secondQuote: "Vitamin-enriched skin care",
      thirdQuote:
        "With generous measures of efficacious botanicals and skin-supportive ingredients, the Skin Care+ range was designed to provide optimal replenishment.",
      buttonQuote: "Discover the range",
      bgColor: "#F6F5E8",
      bgBorderColor: "#333",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + items.length) % items.length);
  };

  const togglePause = () => {
    setIsPaused((prevState) => !prevState);
  };

  return (
    <>
      {!isLaptop && !isMobile ? (
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                width: items[currentSlide].divWidth,
                backgroundColor: items[currentSlide].bgColor,
                height: 600,
                position: "absolute",
              }}
            ></div>
            <img
              src={items[currentSlide].img}
              alt=""
              style={{
                position: "absolute",
                width: items[currentSlide].imgWidth,
                height: 600,
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
              height: 600,
              flexDirection: "row",
              gap: 60,
              marginLeft: "5%",
              alignItems: "center",
              color: items[currentSlide].leftColor,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: 600,
                marginTop: 150,
              }}
            >
              <div
                style={{
                  fontSize: 42,
                  color: items[currentSlide].leftColor,
                }}
              >
                Aesop
              </div>
            </div>

            <div
              style={{
                height: 600,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "calc(33.3333333333% - 80px)",
                gap: 15,
              }}
            >
              <div
                style={{
                  fontSize: ".875rem",
                  fontWeight: 700,
                  color: items[currentSlide].leftColor,
                }}
              >
                {items[currentSlide].firstQuote}
              </div>
              <div style={{ fontSize: "1.875rem" }}>
                {" "}
                {items[currentSlide].secondQuote}
              </div>
              <div
                style={{ lineHeight: 1.7, fontSize: "1rem", fontWeight: 500 }}
              >
                {items[currentSlide].thirdQuote}
              </div>
              <div
                style={{
                  boxShadow: "0px 0px 2px 0",
                  boxShadowColor: "{items[currentSlide].bgBorderColor}",
                  borderColor: "{items[currentSlide].bgBorderColor}",
                  width: 250,
                  display: "flex",
                  gap: 25,
                  height: 60,
                  alignItems: "center",
                  padding: "0 12px",
                  justifyContent: "space-between",
                }}
              >
                <div>{items[currentSlide].buttonQuote}</div>
                <div>
                  <ArrowRightOutlined />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              gap: 15,
              justifyContent: "center",
              marginTop: 8,
              alignItems: "center",
              fontSize: 14,
              color: "#333",
            }}
          >
            <LeftOutlined onClick={handlePrev} />
            {currentSlide + 1} / {items.length}
            <RightOutlined onClick={handleNext} />
            {!isPaused ? (
              <PauseOutlined onClick={togglePause} />
            ) : (
              <CaretRightOutlined onClick={togglePause} />
            )}
          </div>
        </div>
      ) : !isMobile ? (
        // For Laptop

        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                width: items[currentSlide].divWidth,
                backgroundColor: items[currentSlide].bgColor,
                height: 600,
                position: "absolute",
              }}
            ></div>
            <img
              src={items[currentSlide].img}
              alt=""
              style={{
                position: "relative",
                width: "100%",
                height: 600,
                right: 0,
                objectFit: "cover",
                transition: "opacity 0.5s ease-in-out",
              }}
            />
          </div>
          <div
            style={{
              backgroundColor: items[currentSlide].bgColor,
              textAlign: "center",
              display: "flex",
              gap: 15,
              justifyContent: "center",
              paddingTop: 8,
              alignItems: "center",
              fontSize: 14,
              color: "#333",
            }}
          >
            <LeftOutlined
              onClick={handlePrev}
              style={{ color: items[currentSlide].leftColor }}
            />
            <div style={{ color: items[currentSlide].leftColor }}>
              {currentSlide + 1} / {items.length}{" "}
            </div>
            <RightOutlined
              onClick={handleNext}
              style={{ color: items[currentSlide].leftColor }}
            />
            {!isPaused ? (
              <PauseOutlined
                onClick={togglePause}
                style={{ color: items[currentSlide].leftColor }}
              />
            ) : (
              <CaretRightOutlined
                onClick={togglePause}
                style={{ color: items[currentSlide].leftColor }}
              />
            )}
          </div>

          <div
            style={{
              zIndex: 1,
              display: "flex",
              height: 600,
              flexDirection: "row",
              gap: 60,
              paddingLeft: "5%",
              alignItems: "flex-start",
              backgroundColor: items[currentSlide].bgColor,
              color: items[currentSlide].leftColor,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: 600,
                marginTop: 50,
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  fontSize: 42,
                  color: items[currentSlide].leftColor,
                }}
              >
                Aesop
              </div>
            </div>

            <div
              style={{
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "25%",
                width: "50%",
                gap: 15,
              }}
            >
              <div
                style={{
                  fontSize: ".875rem",
                  fontWeight: 700,
                  color: items[currentSlide].leftColor,
                }}
              >
                {items[currentSlide].firstQuote}
              </div>
              <div style={{ fontSize: "1.875rem" }}>
                {" "}
                {items[currentSlide].secondQuote}
              </div>
              <div
                style={{ lineHeight: 1.7, fontSize: "1rem", fontWeight: 500 }}
              >
                {items[currentSlide].thirdQuote}
              </div>

              <div
                style={{
                  boxShadow: "0px 0px 2px 0",
                  boxShadowColor: "{items[currentSlide].bgBorderColor}",
                  borderColor: "{items[currentSlide].bgBorderColor}",
                  width: 250,
                  display: "flex",
                  gap: 25,
                  height: 60,
                  alignItems: "center",
                  padding: "0 12px",
                  justifyContent: "space-between",
                }}
              >
                <div>{items[currentSlide].buttonQuote}</div>
                <div>
                  <ArrowRightOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // For Mobile

        <div style={{ position: "relative" }}>
          <div><Navbar color={items[currentSlide].leftColor}/></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
           
            <img
              src={items[currentSlide].img}
              alt=""
              style={{
                position: "relative",
                width: "100%",
                height: 600,
                right: 0,
                objectFit: "cover",
                transition: "opacity 0.5s ease-in-out",
              }}
            />
          </div>
          <div
            style={{
              backgroundColor: items[currentSlide].bgColor,
              textAlign: "center",
              display: "flex",
              gap: 15,
              justifyContent: "center",
              paddingTop: 8,
              alignItems: "center",
              fontSize: 14,
              color: "#333",
            }}
          >
            <LeftOutlined
              onClick={handlePrev}
              style={{ color: items[currentSlide].leftColor }}
            />
            <div style={{ color: items[currentSlide].leftColor }}>
              {currentSlide + 1} / {items.length}{" "}
            </div>
            <RightOutlined
              onClick={handleNext}
              style={{ color: items[currentSlide].leftColor }}
            />
            {!isPaused ? (
              <PauseOutlined
                onClick={togglePause}
                style={{ color: items[currentSlide].leftColor }}
              />
            ) : (
              <CaretRightOutlined
                onClick={togglePause}
                style={{ color: items[currentSlide].leftColor }}
              />
            )}
          </div>

          <div
            style={{
              zIndex: 1,
              display: "flex",
              height: "fit-content",
              flexDirection: "row",
              gap: 60,
              paddingLeft: "5%",
              alignItems: "flex-start",
              backgroundColor: items[currentSlide].bgColor,
              color: items[currentSlide].leftColor,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: 600,
                marginTop: 50,
                position: "absolute",
                top: 0,
              }}
            ></div>

            <div
              style={{
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                gap: 15,
              }}
            >
              <div
                style={{
                  fontSize: ".875rem",
                  fontWeight: 700,
                  color: items[currentSlide].leftColor,
                }}
              >
                {items[currentSlide].firstQuote}
              </div>
              <div style={{ fontSize: "1.875rem" }}>
                {" "}
                {items[currentSlide].secondQuote}
              </div>
              <div
                style={{ lineHeight: 1.7, fontSize: "1rem", fontWeight: 500 }}
              >
                {items[currentSlide].thirdQuote}
              </div>

              <div
                style={{
                  boxShadow: "0px 0px 2px 0",
                  boxShadowColor: "{items[currentSlide].bgBorderColor}",
                  borderColor: "{items[currentSlide].bgBorderColor}",
                  display: "flex",
                  gap: 25,
                  height: 60,
                  alignItems: "center",
                  width: "90%",
                  padding: "0 2%",
                  justifyContent: "space-between",
                }}
              >
                <div>{items[currentSlide].buttonQuote}</div>
                <div>
                  <ArrowRightOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FirstSlide;
