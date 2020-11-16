import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-white">
      <nav className="shadow">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
                  Dashboard
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
