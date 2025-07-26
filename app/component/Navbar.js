"use client";
import { useDispatch } from "react-redux";
import { logout } from "./authSlice";
import { useEffect, useState } from "react";

  
export default function Navbar() {
  const dispatch = useDispatch();
 
  const [showNav, setShowNav] = useState(true);
  
  const [user, setUser] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) || null)
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  return (
     <div
    className={`bg-white shadow-3xl flex items-center justify-between p-4 fixed min-w-full  top-0 z-20 transition-transform duration-300 ${
      showNav ? 'translate-y-0' : '-translate-y-full'
    }`}
  >
      <h1 className="text-xl font-bold ">Hello, {user?.username}</h1>
      <button
      onClick={() => dispatch(logout())}
      className="py-2 px-4 rounded-2xl mr-0 lg:mr-35 bg-gray-300 hover:bg-black hover:text-white cursor-pointer"
    >
      Logout
    </button></div>
);

}
