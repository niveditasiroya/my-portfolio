import React, { useEffect, useRef } from "react";
import bannerImage from "../Assets/pic6.jpg";
import bannerBackground from "../Assets/banner_wallpaper.svg";
import Typed from "typed.js";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer"], //string to display
      //speed settings, try diffrent value untill you got good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });
    //destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="mt-20 sm:mt-16 banner-container pt-5 pb-8 flex flex-col-reverse md:flex-row items-center"
    >
      <div className="p-5 w-full flex sm:items-center sm:justify-center text-white">
        <div className="sm:w-2/3">
          <h3 className="text-2xl font-semibold">Hi, I am</h3>
          <h1 className="mt-3 text-4xl font-bold">Nivedita Siroya</h1>
          <h2 className="mt-3 text-2xl">
            And I am <span className="underline font-semibold" ref={el}></span>
          </h2>
          <p className="mt-3">
            Driven by a passion for innovation and a desire to make a positive
            impact, I am committed to a successful career as a full-stack
            developer. With a strong foundation in both frontend and backend
            technologies, and a hunger for continuous learning and growth, I aim
            to collaborate with dynamic teams to create cutting-edge web
            applications that exceed user expectations while ensuring robust
            security measures.
          </p>
          <div className="mt-6 mb-9 icons-container space-x-5">
            <a
              href="linkedin.com/in/nivedita- siroya-3b1808235"
              className=" hover:bg-orange-400 border cursor-pointer px-3 py-3 w-14 rounded-full bg-black"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/niveditasiroya"
              className=" hover:bg-orange-400 border cursor-pointer px-3 py-3 w-14 rounded-full bg-black"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a className=" hover:bg-orange-400 border cursor-pointer px-3 py-3 w-14 rounded-full bg-black">
              <i className="text-1xl fa-solid fa-envelope"></i>
            </a>
            <a className=" hover:bg-orange-400 border cursor-pointer px-3 py-3 w-14 rounded-full bg-black">
              <i className="fa-brands fa-discord"></i>
            </a>
          </div>
          <a
            className="px-3 py-2 bg-orange-400 rounded-full shadow-lg"
            href="/contact"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-1/2">
          <img className="rounded-full shadow-lg w-fit" src={bannerImage} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
