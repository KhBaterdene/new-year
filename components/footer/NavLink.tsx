import Link from "next/link";
import type { ReactNode } from "react";
const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a
      href={href}
      className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer text-1xl"
    >
      {children}
    </a>
  );
};

export default NavLink;
