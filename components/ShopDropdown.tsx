import Link from "next/link";

const ShopDropdown = () => {
  const menuItems = {
    "Quick Links": [
      "Shop the Latest",
      "Mac",
      "iPad",
      "iPhone",
      "Apple Watch",
      "Accessories",
    ],
    "Shop Special Stores": [
      "Certified Refurbished",
      "Education",
      "Business",
      "Veterans & Military",
      "Government",
    ],
    "Shop by Product": [
      "Find a Store",
      "Order Status",
      "Shopping Help",
      "Apple Trade In",
      "Financing",
    ],
  };

  return (
    <div className="absolute top-12 left-0 w-full bg-white shadow-lg z-50">
      <div className="w-full bg-[#F5F5F7]">
        <div className="max-w-[980px] mx-auto py-3 px-8">
          <input
            type="text"
            placeholder="Search apple.com"
            className="w-full bg-white rounded-lg px-4 py-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="max-w-[980px] mx-auto py-8 px-8">
        <div className="grid grid-cols-3 gap-12">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xs text-gray-500 font-semibold tracking-wider uppercase">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-[#1D1D1F] hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopDropdown;
