import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function SamplePage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "red",
          height: "300px",
          width: "100%",
          position: "absolute",
        }}
      >
        <Carousel responsive={responsive} arrows>
          <div style={{ height: "300px" }}>item1</div>
          <div style={{ height: "300px" }}>item1</div>
          <div style={{ height: "300px" }}>item1</div>
          <div style={{ height: "300px" }}>item1</div>
          <div style={{ height: "300px" }}>item1</div>
          <div style={{ height: "300px" }}>item1</div>
          <div style={{ height: "300px" }}>item1</div>
          <div style={{ height: "300px" }}>item1</div>
        </Carousel>
      </div>
      <div
        style={{ backgroundColor: "yellow", width: "100%", height: "100%" }}
      ></div>
    </div>
  );
}
