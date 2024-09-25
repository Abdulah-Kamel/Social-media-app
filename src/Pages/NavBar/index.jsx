import { GoHomeFill } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";

const NavBar = () => {
  const navItems = [
    { name: "Home", icon: GoHomeFill, path: "/" },
    { name: "Explore", icon: FaRegCompass, path: "/explore" },
    {
      name: "Notifications",
      icon: IoNotificationsOutline,
      path: "/notifications",
    },
    { name: "Create", icon: FaPlus, path: "/create" },
    { name: "Profile", icon: CgProfile, path: "/profile" },
  ];

  return (
    <nav className="bg-[#171717] md:py-5 py-2 px-3 text-[#f5f5f5] md:sticky md:h-screen fixed md:top-0 bottom-0 z-50 max-md:w-full shadow-xl">
      <div className="md:block flex">
        {/* Logo Section */}
        <div className="hidden md:block">
          <h4 className="text-[#f5f5f5] font-bold text-xl">TeenTalk</h4>
          <p className="text-[#b0b0b0] text-lg">@teentalk</p>
        </div>

        {/* Navigation Section */}
        <div className="md:mt-6 w-full">
          <ul className="flex md:block w-full justify-between">
            {navItems.map((item, i) => {
              const IconComponent = item.icon; // Icon component
              return (
                <a
                  href={item.path}
                  key={i}
                  aria-label={item.name}
                  className={`py-2 lg:ps-4 lg:pe-24 ps-2 pe-2 flex items-center md:justify-normal justify-center hover:bg-[#212121] rounded-lg transition-colors my-2 ${
                    item.path === window.location.pathname ? "bg-[#212121]" : ""
                  }`}
                >
                  <IconComponent className="text-2xl sm:me-3 me-0" />
                  <span className="text-lg max-sm:hidden">{item.name}</span>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
