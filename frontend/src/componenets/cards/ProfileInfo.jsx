import React from "react";
import { getInitials } from "../../utils/util";

const ProfileInfo = ({ onLogout }) => {
  const { initials, name } = getInitials("Name here");
  return (
    
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-300 hover:bg-slate-100 hover:text-primary cursor-pointer text">
        {initials}
      </div>
      <div className="">
        <p className="text-sm font-medium">{name}</p>
        <button
          className="text-sm text-slate-700 hover:underline"
          onClick={onLogout}
        >
          Log-out{" "}
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
