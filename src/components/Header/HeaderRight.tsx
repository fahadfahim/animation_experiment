import { Button } from "antd";
import { Divider } from "../assets/Assets";
import SelectLanguage from "./SelectLanguage";

const HeaderRight = () => {
  return (
    <div className="flex items-center">
      <Button className="bg-[#07E8A4] h-auto py-[5px] px-[16px] text-black hover:!text-black border-none hover:!border-none mr-2 ">Login</Button>
      <Divider />
      <SelectLanguage />
    </div>
  );
};

export default HeaderRight;
