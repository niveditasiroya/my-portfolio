import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import bannerImage from "../Assets/pic6.jpg";

const About = forwardRef(({ myref }) => {
  const aboutRef = useRef(null);

  const [data, setData] = useState({
    image: bannerImage,
    title: `Frontend Developer`,
    desc1: `My main goal as a frontend developer is to create dynamic and aesthetically pleasing user interfaces for websites and web applications. I know how to organize content, style elements, and create dynamic functionality with HTML, CSS, and JavaScript.`,
    desc2: ` Additionally, I am knowledgeable about frontend frameworks and libraries like React.js, which facilitate productivity gains and optimize development procedures. Ensuring accessibility for all users, responsiveness on several devices, and cross-browser compatibility are among my duties. Another important part of my job is working together with other team members using version control systems like Git. My area of expertise is creating user-friendly, interesting websites that appeal to a wide range of audience needs and tastes.`,
    actionButton: {
      title: "Read More...",
      link: "/read-more",
    },
  });

  useImperativeHandle(
    myref,
    () => {
      return {
        scrollMyDivToBottom() {
          aboutRef.current.scrollIntoView();
        },
      };
    },
    []
  );

  return (
    <div className="about-container bg-gray-100" ref={aboutRef}>
      <h1 className="pt-14 mb-8 text-3xl font-bold underline text-center">
        About Me
      </h1>
      <div className=" flex flex-col md:flex-row items-center">
        <div className="about-image flex justify-center">
          <div className="w-1/2">
            <img className="rounded-full shadow-lg w-fit" src={data.image} />
          </div>
        </div>

        <div className="p-5 mb-14 about-content flex justify-center">
          <div className="sm:w-2/3 text-center sm:text-left">
            <h1 className="mb-3 text-3xl font-bold">{data.title}</h1>
            <p className="mb-3 ">{data.desc1}</p>
            <p className="mb-5 ">{data.desc2}</p>
            <a
              className="px-3 py-2 bg-orange-400 rounded-full shadow-lg"
              href={data.actionButton.link}
            >
              {data.actionButton.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
