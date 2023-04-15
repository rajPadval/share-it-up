import React, { use, useState } from "react";
// import "../App.css";
import { useRouter } from "next/router";
const AdminLogin = ({ isAdminAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // const navigate = useNavigate();
  const adminLogin = () => {
    const cemail = "dev@dev.com";
    const cpassword = "12345678";
    if (email === cemail && password === cpassword) {
      isAdminAuth(true);
      localStorage.setItem("isAdminAuth", true);
      console.log("Admin logged in");
    } else {
      router.push("/");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center text-center h-[100vh] my-auto bg-purple-700">
        <form
          method="post"
          className="flex w-[100vw] md:w-[40vw] flex-col  gap-5 justify-center items-center my-auto rounded-lg  "
          data-aos="zoom-out-up"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Admin Email"
            className="py-2 px-3 md:px-5 rounded-md  outline-none mt-8 text-2xl placeholder:text-lg text-center "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Admin Password"
            className="py-2 px-3 md:px-5 rounded-md outline-none text-2xl placeholder:text-lg text-center  
          "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="border border-purple-500 text-purple-500 font-bold hover:bg-purple-500 rounded-md shadow-md hover:text-black newfont text-2xl px-5 py-1  
      my-6 transition-all"
            onClick={adminLogin}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
