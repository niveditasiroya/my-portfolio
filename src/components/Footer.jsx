import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-5 pl-4 flex flex-col-reverse sm:flex-row sm:justify-around">
        <div>
          <p>
            @2023 Alice Nobel <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a className="hover:underline" href="/about">
            About
          </a>
          <a className="hover:underline" href="/about">
            Privacy Policy
          </a>
          <a className="hover:underline" href="/about">
            Licensing
          </a>
          <a className="hover:underline mb-3" href="/about">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
