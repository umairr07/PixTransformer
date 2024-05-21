import { useNavigate } from "react-router-dom";

function ImageConverter() {
  const navigate = useNavigate();

  return (
    <div className="py-[206px] bg-[#121420]">
      <div className="flex flex-col justify-center gap-5 items-center text-[#fff]">
        <h1 className="text-4xl font-bold">Image Converter</h1>
        <p className="text-xl">
          Convert your image files by clicking on any of the below format..
        </p>
      </div>
      <div className="flex gap-10 text-[#000] font-semibold justify-center py-10">
        <button
          className="p-2 rounded-lg bg-[#48CAE4] hover:bg-[#121420] hover:text-[#fff] hover:border-2 w-[150px]"
          onClick={() => navigate("/WEBPImage")}
        >
          WEBP
        </button>
        <button
          className="p-2 rounded-lg bg-[#48CAE4] hover:bg-[#121420] hover:text-[#fff] hover:border-2 w-[150px]"
          onClick={() => navigate("/PNGImage")}
        >
          PNG
        </button>
        <button
          className="p-2 rounded-lg bg-[#48CAE4] hover:bg-[#121420] hover:text-[#fff] hover:border-2 w-[150px]"
          onClick={() => navigate("/JPEGImage")}
        >
          JPEG
        </button>
      </div>
    </div>
  );
}

export default ImageConverter;
