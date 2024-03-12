"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { saveAs } from "file-saver";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1hNiE3-Lk0132NoVP1hfgWIIJ3kgMibeR/view?usp=sharing",
      "Mateusz-Pawelec_CV.pdf"
    );
  };
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Mateusz", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base lg:w-full sm:w-[200px] sm:text-lg mb-6 lg:text-xl">
            Aspiring Full-Stack developer with a creative approach and
            willingness to learn new solutions.
          </p>
          <div>
            <Link href="#contact">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-400 via-orange-400 to-yellow-200 hover:bg-slate-200">
                Contact Me
              </button>
            </Link>
            <button
              onClick={saveFile}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-400 via-orange-400 to-yellow-200 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative  ">
            <Image
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              src="/images/profile-picture.jpg"
              alt="hero image"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
