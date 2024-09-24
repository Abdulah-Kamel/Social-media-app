import { GoHomeFill } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";

const index = () => {
  const list = ["Home", "Explore", "Notifications", "Create", "Profile"];
  const icons = [
    GoHomeFill,
    FaRegCompass,
    IoNotificationsOutline,
    FaPlus,
    CgProfile,
  ];

  return (
    <section className="bg-[#171717] md:py-5 py-2 px-3 text-[#f5f5f5] lg:sticky lg:h-screen fixed lg:top-0 bottom-0 z-50 max-lg:w-full shadow-xl">
      <section className="lg:block flex">
        <section className="hidden lg:block">
          <h4 className="text-[#f5f5f5] font-bold text-xl">TeenTalk</h4>
          <p className="text-[#b0b0b0] text-lg">@teentalk</p>
        </section>
        <section className="lg:mt-6 w-full">
          <ul className="flex lg:block w-full justify-between flex-1">
            {list.map((item, i) => {
              const IconComponent = icons[i]; // Get the icon from the icons array
              return (
                <a
                  href={item.toLowerCase()}
                  key={i}
                  className="py-2 lg:ps-4 lg:pe-24 ps-2 pe-2 flex items-center lg:justify-normal justify-center hover:bg-[#212121] rounded-lg transition-colors"
                >
                  <IconComponent className="text-2xl sm:me-3 me-0" />
                  <li className="text-lg max-sm:hidden">{item}</li>
                </a>
              );
            })}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default index;
