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
    <div className="lg:h-full h-10 w-full fixed bottom-0  lg:w-40 bg-white shadow-md z-50 flex flex-row lg:flex-col  lg:gap-20 justify-around lg:justify-start items-center py-2">
      <Link href="/">
        <GrMoney className="text-4xl text-blue-600" />
      </Link>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="flex flex-col gap-2 md:flex-row items-center text-sm text-gray-700 hover:text-blue-600 transition"
        >
          {link.icon}
          <span className="text-xs mt-1 hidden md:block">{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
