const ImageConverter = () => {
  return (
    <div className="pt-24 bg-[#121420] h-[85vh]">
      <div className="ml-3">
        <h1 className="text-3xl font-bold text-[#fff]">Image Converter</h1>
        <h1 className=" font-medium text-[#979797] py-5">
          Convert your images files to any format
        </h1>
      </div>
      <div className="bg-[#48CAE4] w-[400px] p-2 rounded-3xl m-auto">
        <label className="text-center ml-36 font-medium cursor-pointer">
          <input type="file" hidden multiple />
          Choose Image
        </label>
      </div>
    </div>
  );
};

export default ImageConverter;
