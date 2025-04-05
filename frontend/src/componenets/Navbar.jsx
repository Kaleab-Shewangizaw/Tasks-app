import React, { useState } from "react";
import ProfileInfo from "./cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };
  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearchQuery("");
  };
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow-md">
      <h1 className="text-xl font-extrabold text-black py-2">Tasks</h1>
      <SearchBar
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
