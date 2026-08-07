import React, { useState } from "react";
import "./Project1.css";

// Import images
import bookCenter from "../../../assets/Project/Project1/Book_center.png";
import cover from "../../../assets/Project/Project1/cover.png";
import bookOpen from "../../../assets/Project/Project1/Book_open.png";
import backCover from "../../../assets/Project/Project1/backcover.png";
import spiralImg from "../../../assets/Project/Project1/spiral.png";
import page1Img from "../../../assets/Project/Project1/page1.png";
import page2Img from "../../../assets/Project/Project1/page2.png";
import page3Img from "../../../assets/Project/Project1/page3.png";
import page4Img from "../../../assets/Project/Project1/page4.png";

const Project1 = () => {
  const [state, setState] = useState("center");
  const [currentPage, setCurrentPage] = useState("page1");

  const handleBookClick = () => {
    const book = document.getElementById("bookImage");
    const spiral = document.getElementById("spiral");
    const pages = [page1Img, page2Img, page3Img, page4Img];

    if (state === "center") {
      book.src = cover;
      setState("cover");
    } else if (state === "cover") {
      book.src = bookOpen;
      spiral.style.display = "block";
      spiral.style.opacity = "1";
      setState("open");
    } else if (state === "open") {
      book.src = backCover;
      spiral.style.opacity = "0";
      setTimeout(() => (spiral.style.display = "none"), 600);
      setState("bcover");
    } else {
      book.src = bookCenter;
      spiral.style.opacity = "0";
      setTimeout(() => (spiral.style.display = "none"), 600);
      setState("center");
    }
  };

  const handleFlip = (page) => {
    const spiral = document.getElementById("spiral");
    spiral.style.zIndex = "1";
    setTimeout(() => (spiral.style.zIndex = "10"), 500);
    setCurrentPage(page);
  };

  return (
    <div className="book" id="book">
      <img src={bookCenter} alt="Center" className="book-center" id="bookImage" onClick={handleBookClick} />
      <div className="spiral" id="spiral" style={{ backgroundImage: `url(${spiralImg})` }}></div>

      <div className="page1" id="page1" onClick={() => handleFlip("page3")} style={{ backgroundImage: `url(${page1Img})` }}></div>
      <div className="page2" id="page2" onClick={() => handleFlip("page1")} style={{ backgroundImage: `url(${page2Img})` }}></div>
      <div className="page3" id="page3" onClick={() => handleFlip("page4")} style={{ backgroundImage: `url(${page3Img})` }}></div>
      <div className="page4" id="page4" onClick={() => handleFlip("page2")} style={{ backgroundImage: `url(${page4Img})` }}></div>
    </div>
  );
};

export default Project1;
