"use client"

import Link from "next/link"
import { Search, ShoppingBag } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[rgba(255,255,255,0.8)] backdrop-blur-md z-50">
      <div className="max-w-[980px] mx-auto h-12 flex items-center justify-between px-4 text-sm">
        <Link href="/" className="text-gray-900">
          <svg height="44" viewBox="0 0 14 44" width="14" className="h-12 w-4">
            <path
              d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"
              fill="currentColor"
            />
          </svg>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/store" className="text-gray-900 hover:text-gray-600">
            Store
          </Link>
          <Link href="/mac" className="text-gray-900 hover:text-gray-600">
            Mac
          </Link>
          <Link href="/ipad" className="text-gray-900 hover:text-gray-600">
            iPad
          </Link>
          <Link href="/iphone" className="text-gray-900 hover:text-gray-600">
            iPhone
          </Link>
          <Link href="/watch" className="text-gray-900 hover:text-gray-600">
            Watch
          </Link>
          <Link href="/vision" className="text-gray-900 hover:text-gray-600">
            Vision
          </Link>
          <Link href="/airpods" className="text-gray-900 hover:text-gray-600">
            AirPods
          </Link>
          <Link href="/tv" className="text-gray-900 hover:text-gray-600">
            TV & Home
          </Link>
          <Link href="/entertainment" className="text-gray-900 hover:text-gray-600">
            Entertainment
          </Link>
          <Link href="/accessories" className="text-gray-900 hover:text-gray-600">
            Accessories
          </Link>
          <Link href="/support" className="text-gray-900 hover:text-gray-600">
            Support
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="text-gray-900 hover:text-gray-600">
            <Search className="h-4 w-4" />
          </button>
          <button aria-label="Shopping Bag" className="text-gray-900 hover:text-gray-600">
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  )
}

