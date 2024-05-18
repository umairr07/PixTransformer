const Navbar = () => {
  return (
    <div>
      <div className="flex gap-5 bg-[#48CAE4] justify-start items-center p-4 fixed w-full cursor-pointer">
        <h1 className="text-2xl font-bold">Badass</h1>
        <ul className="flex gap-5 cursor-pointer">
          <li>Convert</li>
          <li>Download</li>
          <li>Remove Bg</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
