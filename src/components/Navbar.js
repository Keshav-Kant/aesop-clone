import React from "react";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";
import { useMediaQuery } from "@mui/material";
function Navbar(props) {
  const isMobile = useMediaQuery("(max-width:640px)");
  return (
    <>
      {!isMobile ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            backgroundColor: "#fffef2",
            height: 80,
            alignItems: "center",
            paddingLeft: 20,
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                fontSize: ".875rem",
                color: "#333",
                fontWeight: 500,
              }}
            >
              {props.itemList.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>

            <div>
              <SearchOutlined />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              backgroundColor: "#fffef2",
              height: 80,
              alignItems: "center",
              paddingRight: 20,
            }}
          >
            <div>Log in</div>
            <div>Cabinet</div>
            <div>Cart</div>
          </div>
        </div>
      ) : (

        <div
          style={{
            position: "absolute",
            fontSize: 40,
            backgroundColor: "transparent",
            zIndex: 10,
            width: "100%",
            height:80,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", width: "100%",justifyContent:'space-between',alignItems:'center' }}>
            <div style={{color: props.color,fontSize:20,paddingLeft:25}}>Aesop</div>
            <div style={{ display: "flex",gap:10, flexDirection: "row",alignItems:'center',paddingRight:25,gap:20 }}>
              <SearchOutlined style={{color: props.color,width:20}}/>
              <HeartOutlined style={{color: props.color,width:20}}/>
              <div style={{color: props.color,fontSize:20,paddingBottom:5}}>Cart</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{ width: 20, height: 2, backgroundColor: props.color, }}
                ></div>
                <div
                  style={{ width: 20, height: 2, backgroundColor: props.color, }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
