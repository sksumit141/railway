import React from "react";
import railway from "../assets/railway.png";
import clw from "../assets/clw.png";
import ministry from "../assets/ministry.png";

const Header = () => {
  return (
    <>
      <div className="w-full h-20 bg-transparent  flex items-center justify-between px-4">
        <div>
          <img className="w-40 pt-10" src={railway} alt="Indian Railway" />
        </div>
        <div>
          <img className="w-50 h-30 pt-10" src={clw} alt="CLW" />
        </div>
        <div>
          <img
            className="w-40 pt-10"
            src={ministry}
            alt="Ministry of railway"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
