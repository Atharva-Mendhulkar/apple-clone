"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { useState } from "react";
import ShopDropdown from "./ShopDropdown";

export default function Navbar() {
  const [showShopDropdown, setShowShopDropdown] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-[#1d1d1f] backdrop-blur-none z-50">
        <div className="max-w-[980px] mx-auto h-11 flex items-center justify-between px-20 text-sm">
          <Link href="/" className="text-white mr-8">
            <svg
              height="44"
              viewBox="0 0 14 44"
              width="14"
              className="h-12 w-4"
            >
              <path
                d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setShowShopDropdown(true)}
              onMouseLeave={() => setShowShopDropdown(false)}
            >
              <Link href="/store" className="text-white/90 hover:text-white">
                Store
              </Link>
              {showShopDropdown && <ShopDropdown />}
            </div>
            <Link href="/mac" className="text-white/90 hover:text-white">
              Mac
            </Link>
            <Link href="/ipad" className="text-white/90 hover:text-white">
              iPad
            </Link>
            <Link href="/iphone" className="text-white/90 hover:text-white">
              iPhone
            </Link>
            <Link href="/watch" className="text-white/90 hover:text-white">
              Watch
            </Link>
            <Link href="/vision" className="text-white/90 hover:text-white">
              Vision
            </Link>
            <Link href="/airpods" className="text-white/90 hover:text-white">
              AirPods
            </Link>
            <Link
              href="/tv"
              className="text-white/90 hover:text-white whitespace-nowrap"
            >
              TV & Home
            </Link>
            <Link
              href="/entertainment"
              className="text-white/90 hover:text-white"
            >
              Entertainment
            </Link>
            <Link
              href="/accessories"
              className="text-white/90 hover:text-white"
            >
              Accessories
            </Link>
            <Link
              href="/support"
              className="text-white/90 hover:text-white mr-12"
            >
              Support
            </Link>
          </div>
          <div className="flex items-center space-x-6 ml-8">
            <button
              aria-label="Search"
              className="text-white/90 hover:text-white"
            >
              <Search className="h-3.5 w-3.5" />
            </button>
            <button
              aria-label="Shopping Bag"
              className="text-white/90 hover:text-white"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </nav>
      {showShopDropdown && (
        <div
          className="fixed top-11 left-0 w-full h-screen bg-black/40 
                     backdrop-blur-sm transition-opacity duration-300 z-40"
          onClick={() => setShowShopDropdown(false)}
        />
      )}
    </>
  );
}
