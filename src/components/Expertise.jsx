import React from "react";
import bannerBackground from "../Assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="pt-14 pb-14 text-3xl font-bold underline">
          My Expertise
        </h1>

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="banner-container pt-5 pb-8 flex flex-col md:flex-row items-center"
        >
          <div className="sm:p-5 w-full flex justify-center text-white">
            <div className="w-2/3">
              <h1 className="mt-3 text-3xl">I love these technology</h1>
              <p className="mt-3 mb-5 hidden sm:block">
                As a front-end developer, I specialize in crafting immersive web
                experiences using HTML, CSS, and JavaScript. My portfolio
                demonstrates my expertise in creating responsive interfaces and
                dynamic applications that prioritize clean code and intuitive
                user interactions.
              </p>

              <a
                className="px-3 py-2 hidden sm:block bg-orange-400 rounded-full shadow-lg"
                href="/contact"
              >
                Hire Me
              </a>
            </div>
          </div>
          <div className="ml-32 mr-32 w-full space-x-3 space-y-3">
            <button className="px-3 py-2 cursor-pointer hover:bg-orange-400 rounded-full bg-gray-300">
              HTML
            </button>
            <button className="px-3 py-2 cursor-pointer hover:bg-orange-400 rounded-full bg-gray-300">
              CSS
            </button>
            <button className="px-3 py-2 cursor-pointer hover:bg-orange-400 rounded-full bg-gray-300">
              BOOTSTRAP
            </button>
            <button className="px-3 py-2 cursor-pointer hover:bg-orange-400 rounded-full bg-gray-300">
              JAVASCRIPT
            </button>
            <button className="px-3 py-2 cursor-pointer hover:bg-orange-400 rounded-full bg-gray-300">
              REACT JS
            </button>
            <button className="px-3 py-2 cursor-pointer hover:bg-orange-400 rounded-full bg-gray-300">
              TAILWIND CSS
            </button>
            <button className="px-3 py-2 cursor-pointer hover:bg-orange-400 rounded-full bg-gray-300">
              NODE JS
            </button>
            <button className="px-3 py-2 cursor-pointer hover:bg-orange-400 rounded-full bg-gray-300">
              MONGODB
            </button>

            <div className=" block sm:hidden">
              <p className="mt-3 mb-5 text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                illo velit iure nihil odit eius iste obcaecati deleniti minima
                repellendus! Ipsum, veniam pariatur! Doloribus quaerat nihil
                optio alias cumque illum.
              </p>
              <a
                className="px-3 py-2 bg-orange-400 rounded-full shadow-lg"
                href="/contact"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
