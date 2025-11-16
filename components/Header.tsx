
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItem from "@/components/NavItem"
import UserDropDown from "@/components/UserDropDown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={140}
            height={32}
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItem />
        </nav>
        <UserDropDown />
      </div>
    </header>
  );
};

export default Header;
