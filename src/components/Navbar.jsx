import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex gap-5 bg-[#48CAE4] justify-start items-center p-4 fixed w-full cursor-pointer">
        <Link to="/" className="text-2xl font-bold">
          PixTransformer
        </Link>
        <ul className="flex gap-5 cursor-pointer">
          <Link to="/imgconverter">Convert</Link>
          <Link to="/download">Download</Link>
          <Link to="/upload">Remove Bg</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
