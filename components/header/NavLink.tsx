import Link from 'next/link';
import type { ReactNode } from 'react';
const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href} className="w-1/12 text-center py-10 uppercase">
      {children}
    </Link>
  );
};

export default NavLink;
