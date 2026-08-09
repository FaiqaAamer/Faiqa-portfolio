import React from "react";
import "./Project1.css";

const Project1 = () => {
  return (
    <div
      className="book-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <iframe
        src="/Book/index.html"
        title="Book"
        className="book-frame"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",     // makes it bigger
          transformOrigin: "center center", // keeps it centered
        }}
      ></iframe>
    </div>
  );
};

export default Project1;
