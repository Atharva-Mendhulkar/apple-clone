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
    <div
      className="absolute left-0 top-[44px] w-screen h-[45vh] min-h-[400px] 
                 bg-[#1d1d1f] rounded-b-2xl shadow-2xl z-50
                 animate-in fade-in duration-300 ease-in-out"
      style={{
        fontFamily: "SF Pro Display, Helvetica, sans-serif",
        transform: "translateY(0)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className="w-full border-b border-white/10">
        <div className="max-w-[980px] mx-auto py-3 px-20">
          <input
            type="text"
            placeholder="Search apple.com"
            className="w-full bg-[#1d1d1f]/80 text-[16px] text-white rounded-lg 
                     px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-white/20
                     placeholder:text-white/60"
          />
        </div>
      </div>

      <div className="max-w-[980px] mx-auto px-20 py-8">
        <div className="grid grid-cols-3 gap-20">
          {menuSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-[12px] text-white/60 font-semibold tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href="#"
                      className={`block transition-all duration-200 
                        ${
                          item.featured
                            ? "text-[18px] text-white font-semibold hover:scale-[1.02]"
                            : "text-[16px] text-white/80 hover:text-white hover:translate-x-0.5"
                        }
                        hover:underline underline-offset-2`}
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
