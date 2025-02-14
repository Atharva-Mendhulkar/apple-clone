import Link from "next/link";

const ShopDropdown = () => {
  const menuSections = [
    {
      title: "Shop",
      items: [
        { name: "Shop the Latest", featured: true },
        { name: "Mac" },
        { name: "iPad" },
        { name: "iPhone" },
        { name: "Apple Watch" },
        { name: "Accessories" },
      ],
    },
    {
      title: "Quick Links",
      items: [
        { name: "Find a Store", featured: true },
        { name: "Order Status" },
        { name: "Ways to Buy" },
        { name: "Personal Setup" },
      ],
    },
    {
      title: "Shop Special Stores",
      items: [
        { name: "Education" },
        { name: "Business" },
        { name: "Government" },
        { name: "Veterans & Military" },
      ],
    },
  ];

  return (
    <div className="absolute top-11 left-0 w-full bg-[#1d1d1f] shadow-2xl z-50">
      <div className="w-full bg-[#161617]">
        <div className="max-w-[980px] mx-auto py-2 px-8">
          <input
            type="text"
            placeholder="Search apple.com"
            className="w-full bg-[#1d1d1f] text-white rounded-lg px-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>
      </div>
      <div className="max-w-[980px] mx-auto py-6 px-8">
        <div className="grid grid-cols-3 gap-12">
          {menuSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-[11px] text-white/60 font-semibold tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href="#"
                      className={`text-sm ${
                        item.featured
                          ? "text-white font-medium"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.name}
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
