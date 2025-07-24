import Link from "next/link";
import { GrMoney } from "react-icons/gr";


import { RiDashboardHorizontalFill } from "react-icons/ri";
import { TbArrowDownFromArc } from "react-icons/tb";
import { TbArrowDownToArc } from "react-icons/tb";

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
    <div>
    <Link href="/">
  <GrMoney className="m-auto text-3xl mt-3" />
</Link>

    <div className="mt-10 ">
       {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`flex flex-row items-center gap-2 m-auto mt-5 justify-center md:justify-start p-2 hover:bg-blue-400 hover:text-white transition-1 `}
        >
          {link.icon}
          <p className="hidden md:block">{link.label}</p>
        </Link>
      ))}</div>
    </div>
  );
}