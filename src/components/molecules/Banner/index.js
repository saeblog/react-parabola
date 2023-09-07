import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import bannerImg from "../../../assets/images/banner.svg"
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";

const Banner = () => {
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-0 text-4xl font-bold">Raffa Parabola</h1>
        <h2 className="my-6 text-2xl font-bold text-primary">Antena Digital dan Parabola</h2>
        {/* </div> */}
        <p className="max-w-md mb-10 font-medium text-accent">
          Raffa Parabola adalah Layanan Pemasangan Antena TV Digital & Parabola. Dan Jual Antena Digital UHF, Parabola, Receiver, Set Top Box, LNB dan Parts lainnya.
        </p>

        <div className="flex items-center mb-20">
          <a
            href="https://wa.me/628112221721"
            target="blank"
          >
            <button className="primary-button">
              <span className="text-button-mobile">Whatsapp</span>
              <span>
                <FaAngleRight />
              </span>
            </button>
          </a>
          <Link to="/paket" className="ml-4">
            <SecondaryBtn>
              <span className="text-button-mobile ">Harga Penawaran</span>
              <span>
                <FaAngleRight />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="order-1 pt-10 lg:order-3 lg:pt-0 md:pt-0 sm:pt-0">
          <img src={bannerImg} alt="Banner Raffa Parabola"></img>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
