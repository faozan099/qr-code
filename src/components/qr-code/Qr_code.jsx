import React from "react";
import PropTypes from "prop-types";
import img from "../../images/image-qr-code.png";
function Qr_code({ title, description }) {
  return (
    <>
      <div className="w-mobile mx-auto bg-White p-4 rounded-lg">
        <div className="">
          <img src={img} alt="" className="mx-auto rounded-lg" />
        </div>
        <div>
          <h1 className="text-title text-center font-bold pt-6 pb-3 text-DarkBlue leading-8">
            {title}
          </h1>
          <p className="text-center text-GrayishBlue text-base">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

Qr_code.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Qr_code.defaultProps = {
  title: "Improve your front-end skills by building projects",
  description:
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
};

export default Qr_code;
