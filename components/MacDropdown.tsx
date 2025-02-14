import Link from "next/link";
import { macMenuData } from "@/data/menuData";

const MacDropdown = () => {
  return (
    <div
      className="fixed left-0 top-[44px] w-full h-[45vh] min-h-[500px] 
                 bg-[#1d1d1f] shadow-2xl z-50
                 animate-in fade-in duration-500 ease-in-out
                 transition-all transform-gpu"
      style={{
        clipPath: "inset(0 0 -100% 0)",
        animation: "slideDown 0.5s ease-in-out forwards",
      }}
    >
      <div className="w-full">
        <div className="max-w-[1400px] mx-auto px-8 py-10">
          <div className="grid grid-cols-3 gap-20">
            {macMenuData.map((section) => (
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
    </div>
  );
};

export default MacDropdown;
