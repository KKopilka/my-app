import Link from "next/link";
import Image from "next/image";
import React from "react";
// import { NavLinks } from "@/constant";
import AuthProviders from "../../AuthProviders";
import SearchBar from "../SearchBar/Search";
import * as Style from "./index.styled";
const Navbar = () => {
  const session = null;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/logo_2.svg"
            width={200}
            height={100}
            alt="Logo"
          />
        </Link>
        {/* <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul> */}
      </div>
      <div className="flexCenter gap-4">
        <SearchBar />
        {session ? (
          <>
            UserPhoto

            <Link href="/create-project">
              Share work
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;