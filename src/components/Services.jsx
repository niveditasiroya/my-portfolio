import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";

const Services = forwardRef(({ myref }) => {
  const serviceRef = useRef(null);
  const [serviceData, setServiceData] = useState([
    {
      id: 1,
      title: "Frontend Development",
      description: `I'm a full-stack developer with a focus on utilizing front-end and back-end technologies to create dynamic web apps. I employ HTML, CSS, React.js, and well-known CSS frameworks like Bootstrap and Tailwind CSS to create aesthetically pleasing and responsive user interfaces on the front end. I guarantee a smooth user experience and interactivity throughout the program thanks to my expertise with JavaScript.`,
      actionButton: {
        title: "Check",
        link: "/check",
      },
    },
    {
      id: 2,
      title: "Backend Development",
      description: `To create reliable server-side logic and data storage solutions, I use Node.js on the backend in conjunction with MongoDB as the database. I manage server-side operations well with Node.js, and versatile and scalable data storage is made possible via MongoDB. With my knowledge of frontend and backend technologies, you may create end-to-end solutions that satisfy the various needs of your clients by producing web apps that are both functional and easy to use.`,
      actionButton: {
        title: "Check",
        link: "/check",
      },
    },
    {
      id: 3,
      title: "UI UX Designer",
      description: ` Creating fluid and aesthetically pleasing user interfaces for websites and applications is my responsibility as a UI/UX designer. I leverage tools like Adobe XD or Figma to do user research, build wireframes, and refine prototypes depending on feedback. My experience guarantees that every interaction is simple to understand, improving overall user happiness and usability across a range of platforms and devices.`,
      actionButton: {
        title: "Check",
        link: "/check",
      },
    },
  ]);

  useImperativeHandle(
    myref,
    () => {
      return {
        scrollMyDivToBottom() {
          serviceRef.current.scrollIntoView();
        },
      };
    },
    []
  );

  return (
    <>
      <div className="services-container pb-14" ref={serviceRef}>
        <h1 className="pt-14 pb-14 text-3xl font-bold text-center underline">
          My Services
        </h1>

        <div className="flex flex-col md:flex-row gap-6 ml-8 mr-8">
          {serviceData.map((serdata) => {
            return (
              <div className="p-6 cursor-pointer hover:bg-gray-300 rounded-3xl shadow-xl bg-gray-100 text-center">
                {/* <i className="text-3xl mb-3 fa-brands fa-react"></i> */}
                <h2 className="mb-3 text-2xl font-bold">{serdata.title}</h2>
                <p className="mb-5">{serdata.description}</p>
                <a
                  className="px-3 py-2 bg-orange-400 rounded-full shadow-lg"
                  href={serdata.actionButton.link}
                >
                  {serdata.actionButton.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default Services;
