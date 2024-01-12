import Link from "next/link";
import { ReactNode } from "react";

interface menuItemsI {
  key: string;
  name: ReactNode;
}

const menuItems: menuItemsI[] = [
  {
    key: "about",
    name: <Link href="#about-us">About Us</Link>,
  },
  {
    key: "how_it_works",
    name: <Link href="#howitworks">How it Works</Link>,
  },
  {
    key: "offer",
    name: <Link href="#services">Offer</Link>,
  },
  {
    key: "faq",
    name: <Link href="#faq">FAQ</Link>,
  },
  {
    key: "contact",
    name: <Link href="#contact-us">Contact Us</Link>,
  },
];

const HeaderMenuItems = () => {
  return (
    <div
      //css={headerStyles}
      className={`hidden md:hidden lg:block xl:block 2xl:block py-[16px] px-[32px]`}
    >
      <ul className="header-menu-item flex items-center gap-[40px]">
        {menuItems?.map((menuItem: menuItemsI, index: number) => (
          <li
            key={index}
            className="duration-300 ease-in-out text-white !text-[14px] font-medium"
          >
            {menuItem?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenuItems;
