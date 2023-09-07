import React from "react";
import logoMSN from "../../../assets/images/logo-raffa.png";
import { Link } from 'react-router-dom'
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {ButtonWa} from "../../../components";

const Footer = () => {
  return (
    <div>
      <footer className="p-20 footer text-base-100"
        style={{ backgroundColor: "#e5e7eb" }}
      >
        <div>
          <Link to='/'><img src={logoMSN} alt="Raffa Parabola Logo" className="w-32 sm:w-46" /></Link>
          <h1 className="text-2xl font-bold text-black ">Raffa Parabola</h1>
          <span className="text-accent">
            Bandung, <br />
            Jawa Barat, 40233.</span>
          <div className="flex items-center my-1">
            <FaPhoneAlt className="mr-6 text-2xl text-accent"></FaPhoneAlt>
            <h3 className="font-medium text-accent">+62 811 222 1721</h3>
          </div>
          <div className="flex items-center my-1">
            <MdEmail className="mr-6 text-2xl text-accent"></MdEmail>
            <h3 className="font-medium text-accent">sbgyogi@gmail.com</h3>
          </div>
        </div>
        {/* Tautan */}
        <div>
          <span className="font-bold text-black">Tautan</span>
          <Link
            to="/"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Beranda</span>
          </Link>
          <Link
            to="/tentang"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Tentang</span>
          </Link>
          <Link
            to="/paket"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Paket</span>
          </Link>
          <Link
            to="/kontak"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Kontak</span>
          </Link>
          <Link
            to="/blog"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Blog</span>
          </Link>
        </div>
        {/* Fokus & Layanan */}
        <div>
          <span className="font-bold text-accent">Layanan</span>
          <Link
            to="/paket"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Antena Digital</span>
          </Link>
          <Link
            to="/paket"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Parabola mini TV Islam</span>
          </Link>
          <Link
            to="/paket"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Parabola mini K-Vision</span>
          </Link>
          <Link
            to="/paket"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Nex Parabola mini</span>
          </Link>
          <Link
            to="/paket"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Parabola jaring</span>
          </Link>
          <Link
            to="/paket"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Parabola solid</span>
          </Link>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="https://www.linkedin.com/in/raffaparabola/"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://www.facebook.com/raffaparabola/"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaFacebookSquare></FaFacebookSquare>
          </a>
          <a
            href="https://twitter.com"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaTwitterSquare></FaTwitterSquare>
          </a>
          <a
            href="https://www.instagram.com/raffa_parabola/"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaInstagramSquare></FaInstagramSquare>
          </a>
        </div>
      </footer>
      <footer className="px-10 py-6 text-sm text-center text-base-100 border-base-300 bg-neutral ">
        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col items-center justify-center mt-6 md:flex-row text-accent">
          <p>&copy; Copyright 2023, Raffa Parabola - React</p>
        </div>

      </footer>
      <ButtonWa />
    </div>
  );
};

export default Footer;