import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import errorImg from "../assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPages = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center text-center h-screen p-10 md:p-20 space-y-4">
        <img src={errorImg} />
        <h2 className="font-semibold text-2xl md:text-5xl text-[#001931]">
          Oops, page not found!
        </h2>
        <p className="text-sm md:text-xl text-[#627382]">
          The page you are looking for is not available.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="btn  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:from-[#ec612f] hover:to-[#f19736] text-white"
        >
          Go Back!
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPages;
