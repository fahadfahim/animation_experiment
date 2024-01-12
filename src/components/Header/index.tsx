import dynamic from "next/dynamic";
import HeaderLogo from "./HeaderLogo";
// import HeaderMenuItems from "./HeaderMenuItems";
import HeaderRight from "./HeaderRight";
const HeaderMenuItems = dynamic(() => import('./HeaderMenuItems'), { ssr: false })

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center px-8 py-[14px] ">
      <HeaderLogo />
      <HeaderMenuItems />
      <HeaderRight />
    </div>
  );
};

export default Header;
