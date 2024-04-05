import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Contact = forwardRef(({ myref }) => {
  const contactRef = useRef(null);

  useImperativeHandle(
    myref,
    () => {
      return {
        scrollMyDivToBottom() {
          contactRef.current.scrollIntoView();
        },
      };
    },
    []
  );

  return (
    <>
      <div className="bg-gray-100 " ref={contactRef}>
        <h2 className="pt-14 pb-14 text-3xl font-bold text-center underline">
          Feel Free To Contact Me
        </h2>
        <div className="md:mx-8 flex flex-col md:flex-row">
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9471620276527!2d70.7728361761586!3d22.279991279701214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbc00054cdfb%3A0x28d1e1fa756e7b2!2sReliance%20Smart%20Bazaar!5e0!3m2!1sen!2sin!4v1710764583327!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className=""
            ></iframe>
          </div>

          {/* <form
        action="#"
        className="pt-10 pb-10 w-full flex flex-col items-center gap-5"
      >
        <div>
          <label
            for="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your name
          </label>
          <input
            type="text"
            id="username"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="User name"
            required
          />
        </div>
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form> */}

          <div className="w-full pt-10 pb-10">
            <form
              action="https://formspree.io/f/xeqylknv"
              method="POST"
              className="flex flex-col justify-center items-center gap-5"
            >
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="User name"
                  autoComplete="off"
                  required
                  className="w-full border-2 bg-gray-300 text-center px-10 py-3 rounded-md"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="User email"
                  autoComplete="off"
                  required
                  className="w-full border-2 bg-gray-300 text-center px-10 py-3 rounded-md"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Message"
                  autoComplete="off"
                  required
                  className="w-full border-2 bg-gray-300 text-center pl-5 rounded-md"
                ></textarea>
              </div>

              <div>
                <input
                  type="submit"
                  value="Send"
                  className="border border-slate-300 hover:border-slate-400 px-14 py-2 rounded-full bg-orange-400"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
});

export default Contact;
