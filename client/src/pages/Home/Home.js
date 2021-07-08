import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "./chat.jpg";
import "./HomeStyles.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Gamma's Team </h1>
        <p> Connect around the world</p>
        <Link to="/menu">
          <button> Let's start chat </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;