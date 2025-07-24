"use client";

import Link from "next/link";
import { GrMoney } from "react-icons/gr";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { TbArrowDownFromArc, TbArrowDownToArc } from "react-icons/tb";

const navLinks = [
  {
    href: "/",
    icon: <RiDashboardHorizontalFill />,
    label: "Dashboard",
  },
  {
    href: "/spending",
    icon: <TbArrowDownFromArc />,
    label: "Spending"
  },
  {
    href: "/earning",
    icon: <TbArrowDownToArc />,
    label: "Earning"
  }
];

export default function Sidebar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md z-50 flex justify-around items-center py-2">
      {/* Logo */}
      <Link href="/">
        <GrMoney className="text-3xl text-blue-600" />
      </Link>

      {/* Navigation Links */}
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="flex flex-col items-center text-sm text-gray-700 hover:text-blue-600 transition"
        >
          {link.icon}
          <span className="text-xs mt-1">{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
