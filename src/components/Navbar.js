import React from "react";
import { SearchOutlined } from "@ant-design/icons";

function Navbar(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 20,
        backgroundColor: "#fffef2",
        height: 80,
        alignItems: "center",
        paddingLeft: 20,
        justifyContent: 'space-between'
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: 20,
      }}>
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

      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: 20,
        backgroundColor: "#fffef2",
        height: 80,
        alignItems: "center",
        paddingRight: 20,
      }}>
      <div>Log in</div>
      <div>Cabinet</div>
      <div>Cart</div>
      </div>
    </div>
  );
}

export default Navbar;
