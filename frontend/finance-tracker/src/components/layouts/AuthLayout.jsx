import React from "react";

import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";
import { LuTrendingUp } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        {/* Changed gradient text to solid black */}
        <h2 className="font-brand text-2xl md:text-5xl font-semibold tracking-tight text-black flex items-center gap-3 -ml-12">
          <div className="flex items-center gap-1">
            <LuTrendingUp className="text-primary text-4xl md:text-5xl" />
            <LuTrendingUp className="text-primary text-4xl md:text-5xl" />
          </div>
          KACHING TRACKER
          <div className="flex items-center gap-1">
            <LuTrendingUp className="text-primary text-4xl md:text-5xl" />
            <LuTrendingUp className="text-primary text-4xl md:text-5xl" />
          </div>
        </h2>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5" />

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Keep Your Finances In Check"
            color="bg-primary"
          />
        </div>

        <img
          src={CARD_2}
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15"
          alt="Card graphic"
        />
      </div>
    </div>
  );
};

const StatsInfoCard = ({ icon, label, color }) => {
  return (
    <div className="flex items-center gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
      <div
        className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <span className="block text-2xl font-bold text-gray-800">
          {label}
        </span>
      </div>
    </div>
  );
};

export default AuthLayout;
