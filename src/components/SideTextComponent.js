import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
function SideTextComponent(props) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: props.thirdWidth || 400,
            display: "flex",
            gap: props.thirdGap || 10,
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: ".875rem",
              fontWeight: 700,
              color: "#000",
            }}
          >
            {props.firstQuote}
          </div>
          <div style={{ fontSize: "1.875rem" }}> {props.secondQuote}</div>
          <div style={{ lineHeight: 1.7, fontSize: "1rem", fontWeight: 500 }}>
            {props.thirdQuote}
          </div>
          <div
            style={{
              boxShadow: "0px 0px 2px 0",
              boxShadowColor: props.shadowColor,
              borderColor: props.bgBorderColor,
              width: 250,
              display: "flex",
              gap: 25,
              height: 60,
              alignItems: "center",
              padding: "0 12px",
              justifyContent: "space-between",
            }}
          >
            <div>{props.buttonQuote}</div>
            <div>
              <ArrowRightOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideTextComponent;
