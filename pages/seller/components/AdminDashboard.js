import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AdminNavbar from "./AdminNavbar";
import Members from "./Members";
import Photography from "./Photography";
import CreateEvents from "./CreateEvents";
import Messages from "./Messages";
const AdminDashboard = ({ adminAuth, isAdminAuth }) => {
  // State
  const [toggle, setToggle] = useState(false);
  const [tab, setTab] = useState("Photography");

  //  toggle function to toggle sidebar
  const sideToggle = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <div className="flex w-screen h-[100vh] overflow-x-hidden scroll-smooth">
      <AdminNavbar
        isAdminAuth={isAdminAuth}
        toggle={toggle}
        setToggle={setToggle}
        sideToggle={sideToggle}
        tab={tab}
        setTab={setTab}
      />
      <div className="border-lg w-fit flex flex-col">
        <div className={` p-3`}>
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={sideToggle}
          />
        </div>

        {/* content of main dashboard */}
        {/* <div>{tab == "Members" ? <Members /> : <CreateBlogs />}</div> */}
        <div>
          {tab == "Events" ? (
            <CreateEvents />
          ) : tab == "Photography" ? (
            <Photography />
          ) : tab == "Messages" ? (
            <Messages />
          ) : (
            <Members />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
