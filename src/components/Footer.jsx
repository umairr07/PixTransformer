import { SiConvertio } from "react-icons/si";
import { HiMiniArrowUpTray } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const naviagte = useNavigate();
  return (
    <div className="bg-[#121420] flex justify-evenly pb-2 text-[#fff] pt-14">
      <div id="icons" onClick={() => naviagte("/imgconverter")}>
        <SiConvertio />
        <p>Convert</p>
      </div>

      <div id="icons" onClick={() => naviagte("/upload")}>
        <HiMiniArrowUpTray />
        <p>Remove</p>
      </div>

      <div id="icons" onClick={() => naviagte("/download")}>
        <CiSearch />
        <p>Search</p>
      </div>

      <div id="icons">
        <IoSettingsOutline />
        <p>Settings</p>
      </div>

      <div id="icons">
        <GoGift />
        <p>Support</p>
      </div>
    </div>
  );
};

export default Footer;
