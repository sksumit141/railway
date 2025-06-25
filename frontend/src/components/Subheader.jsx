import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Subheader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pt-10">
        <header className="w-full bg-slate-900 text-white px-6 py-4 shadow-md flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide pl-7">LOCOS</h1>

          <div className="space-x-6">
            <button
              className="bg-white text-slate-800 font-semibold px-4 py-2 rounded-lg hover:bg-slate-200 transition duration-200"
              onClick={() => navigate("/login")}
            >
              Master Login
            </button>

            <button
              className="bg-white text-slate-800 font-semibold px-4 py-2 rounded-lg hover:bg-slate-200 transition duration-200"
              onClick={() => navigate("/shop")}
            >
              Shop Login
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Subheader;
