import React, { useState } from "react";

const Header = ({ executeScroll }) => {
  const [brandName, setBrandName] = useState("Nivedita Siroya");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "home",
      link: "/home",
      id: 1,
    },
    {
      title: "about",
      link: "/about",
      id: 2,
    },

    {
      title: "service",
      link: "/service",
      id: 3,
    },
    {
      title: "projects",
      link: "/projects",
      id: 4,
    },
    {
      title: "contact",
      link: "/contact",
      id: 5,
    },
  ]);

  // const [actionButton, setActionButton] = useState({
  //   title: "Download CV",
  //   link: "/resume",
  // });

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <div className="h-20 md:flex md:justify-between md:items-center px-6 md:px-16 bg-gray-100">
        <div>
          <h1 className="mt-4 md:mt-0 cursor-pointer  text-2xl font-bold">
            {brandName}
          </h1>
        </div>

        <div
          className="absolute right-8 md:hidden top-6"
          onClick={() => setOpen(!open)}
        >
          <i className={`fa-solid fa-bars ${open ? "close" : "menu"}`}></i>
        </div>

        <div
          className={`flex gap-4 flex-col sm:flex-row ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0 `}
        >
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>

        <div
          className={`mt-5 sm:mt-0 ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0 `}
        >
          <a
            href="https://drive.google.com/file/d/1Bcf-92Ck1oULvwOsLEqKAg0KSun3DKoO/view?usp=drivesdk"
            className="px-4 py-2 bg-orange-400 rounded-full shadow-lg text-1xl"
          >
            Download CV
          </a>
        </div>
      </div> */}

      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <h1 className="mt-4 md:mt-0 cursor-pointer  text-2xl font-bold">
              {brandName}
            </h1>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center gap-4 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {menuLinks.map((link) => (
              <li className="mb-7 sm:mb-0">
                <div
                  onClick={executeScroll}
                  key={link.id}
                  className="hover:text-orange-600"
                >
                  {link.title}
                </div>
              </li>
            ))}
            <a
              href="https://drive.google.com/file/d/1KvA1msN5iZz4u5lBGROazRMdrlR47CBv/view?usp=drivesdk"
              className=" px-4 py-2 bg-orange-400 rounded-full shadow-lg text-1xl"
            >
              Download CV
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
