export default function Footer() {
  return (
    <footer className="bg-gray-100 px-4 py-12 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Shop and Learn */}
        <div>
          <h3 className="font-semibold mb-4">Shop and Learn</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mac
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                iPad
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                iPhone
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Watch
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AirPods
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                TV & Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AirTag
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accessories
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        {/* Apple Wallet */}
        <div>
          <h3 className="font-semibold mb-4">Apple Wallet</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Wallet
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Manage Your Apple Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apple Store Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                iCloud.com
              </a>
            </li>
          </ul>
        </div>

        {/* Entertainment */}
        <div>
          <h3 className="font-semibold mb-4">Entertainment</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Apple One
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apple TV+
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apple Music
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apple Arcade
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apple Podcasts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apple Books
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                App Store
              </a>
            </li>
          </ul>
        </div>

        {/* Apple Store */}
        <div>
          <h3 className="font-semibold mb-4">Apple Store</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Find a Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Genius Bar
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Today at Apple
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apple Camp
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apple Trade In
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shopping Help
              </a>
            </li>
          </ul>
        </div>

        {/* About Apple */}
        <div>
          <h3 className="font-semibold mb-4">About Apple</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Newsroom
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apple Leadership
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career Opportunities
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Investors
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ethics & Compliance
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Apple
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-300">
        <p className="text-xs">
          More ways to shop:{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue-600 hover:underline">
            other retailer
          </a>{" "}
          near you. Or call 000800 040 1966.
        </p>
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs">
            Copyright © 2025 Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <a href="#" className="text-xs hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-xs hover:underline">
              Terms of Use
            </a>
            <a href="#" className="text-xs hover:underline">
              Sales Policy
            </a>
            <a href="#" className="text-xs hover:underline">
              Legal
            </a>
            <a href="#" className="text-xs hover:underline">
              Site Map
            </a>
          </div>
          <p className="text-xs mt-4 md:mt-0">India</p>
        </div>
      </div>
    </footer>
  );
}
