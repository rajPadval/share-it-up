import React from "react";
import { CgClose } from "react-icons/cg";

const AdminNavbar = ({ isAdminAuth ,toggle,sideToggle,tab,setTab}) => {

  const logout = () => {
    isAdminAuth(false);
    localStorage.clear()
  };

  

  return (
    <div
      className={`fixed overflow-hidden z-50 flex flex-col border-lg bg-gray-700 m-2 rounded-lg text-white w-[230px] h-[97vh] transition-transform ${
        !toggle ? `translate-x-0` : `-translate-x-[250px]`
      }`}
    >
      <div className="border border-b-gray-400 py-5 px-3 text-xl font-bold">
        Ad Astra
        <CgClose
          className="absolute top-4 text-2xl left-[190px] text-purple-500 cursor-pointer"
          onClick={sideToggle}
        />
      </div>
      <div className="flex flex-col gap-5 py-3">
        <div className="flex flex-col gap-2 px-5 py-3 text-start list-none">
          <a className={`px-2 py-1 rounded-lg hover:bg-purple-400 font-bold transition-all cursor-pointer ${tab == "Events"? "text-purple-400 scale-110" : "text-white"}`} onClick={()=>{setTab("Events")}}>
            Events
          </a>
          <a className={`px-2 py-1 rounded-lg hover:bg-purple-400 font-bold transition-all cursor-pointer ${tab == "Messages"? "text-purple-400 scale-110" : "text-white"}`} onClick={()=>{setTab("Messages")}}>
            Messages
          </a>
          <a className={`px-2 py-1 rounded-lg hover:bg-purple-400 font-bold transition-all cursor-pointer ${tab == "Photography"? "text-purple-400 scale-110" : "text-white"}`} onClick={()=>{setTab("Photography")}}>
            Photography
          </a>
          <a className={`px-2 py-1 rounded-lg hover:bg-purple-400 font-bold transition-all cursor-pointer ${tab == "Members"? "text-purple-400 scale-110" : "text-white"}`} onClick={()=>{setTab("Members")}}>
            Members
          </a>
          <button
            className="px-2 py-1 rounded-lg bg-purple-600 my-5 hover:bg-red-400 font-bold transition-all"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
