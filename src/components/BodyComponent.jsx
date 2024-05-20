import { useNavigate } from "react-router-dom";
import { FLASH_IMG, LINK_IMG, REM_BG_IMG } from "../utils";

const Body = () => {
  const navigator = useNavigate();

  const goToUploadPage = () => {
    navigator("/upload");
  };

  const goToImageConverter = () => {
    navigator("/imgconverter");
  };

  const goToDownloadPage = () => {
    navigator("/download");
  };

  return (
    <div className="bg-[#121420]">
      <div className="pt-24 flex flex-col justify-center items-center gap-8">
        <img
          src={REM_BG_IMG}
          alt="bg image"
          className="w-[600px] bg-[#48CAE4] p-5 rounded-md"
        />
        <h1 className="text-3xl font-bold text-[#fff]">
          Remove Image <span className="text-[#48CAE4]">Background</span>
        </h1>
        <p className="text-[#f0f0f0]">
          Get a transparent background for any image
        </p>
        <button
          className="text-[#000] bg-[#EFF7F6] p-2 rounded-xl w-[500px] text-xl font-bold"
          onClick={goToUploadPage}
        >
          Upload Image
        </button>
        <p className="text-[#f0f0f0]">No image? try one of these</p>
      </div>

      <div className="pt-10 flex flex-col justify-center items-center gap-5">
        <img src={LINK_IMG} alt="image" className="w-[600px] h-[350px]" />
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1 className="text-3xl font-bold text-[#fff]">
            <span className="text-[#48CAE4]">Convert </span>Your Images | Files
          </h1>
          <p className="text-[#f0f0f0]">
            With Badass, you can convert your files to any format
          </p>
          <button
            onClick={goToImageConverter}
            className="text-[#fff] bg-[#48CAE4] p-2 rounded-xl w-[500px] text-xl font-semibold"
          >
            Choose Files
          </button>
        </div>
      </div>

      <div className="pt-10 flex flex-col justify-center items-center gap-8">
        <img
          //   src={flashImage.png}
          src={FLASH_IMG}
          alt="image"
          className="w-[400px] bg-transparent"
        />
        <h1 className="text-3xl font-bold text-[#fff]">
          <span className="text-[#48CAE4]">Download </span>Multiple Images At
          Once
        </h1>
        <p className="text-[#f0f0f0] ">
          Ever thought of downloading multiple images at once?
        </p>
        <button
          onClick={goToDownloadPage}
          className="text-[#000] bg-[#EFF7F6] p-2 rounded-xl w-[400px] text-xl font-bold"
        >
          Choose Files
        </button>
      </div>
    </div>
  );
};

export default Body;
