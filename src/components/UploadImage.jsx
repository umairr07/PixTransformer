import axios from "axios";
import { useState } from "react";
import { saveAs } from "file-saver";
import { ToastContainer, toast } from "react-toastify";

const UploadImage = () => {
  const [inputImage, setInputImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const removeBackground = async () => {
    console.log(inputImage);
    console.log("clicked");

    if (!inputImage) return;
    setIsLoading(true);

    const formData = new FormData();
    formData.append("image_file", inputImage);
    formData.append("size", "auto");

    const api_key = "VB4g5EFzeZuFkVRLPJYRppJU";
    const url = "https://api.remove.bg/v1.0/removebg";

    axios({
      method: "post",
      url: url,
      data: formData,
      responseType: "arraybuffer",
      headers: {
        "X-Api-Key": api_key,
      },
      encoding: null,
    })
      .then((response) => {
        if (response.status != 200)
          return console.error("Error:", response.status, response.statusText);
        const imgsrc = URL.createObjectURL(
          new Blob([response.data], { type: "image/png" })
        );
        setOutputImage(imgsrc);

        console.log(imgsrc);
      })
      .catch((error) => {
        console.error("Request failed:", error);
      });
  };

  const downloadImage = async (url, description) => {
    // console.log("download");
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      saveAs(blob, description || "downloaded_image.jpg"); // Set a default filename if description is not available
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div className="pt-24 bg-[#121420] h-[85vh]">
      <div className="ml-3">
        <h1 className="text-3xl font-bold text-[#fff]">Remove Background</h1>
        <h1 className=" font-medium text-[#979797] py-5">
          Remove the background of any image
        </h1>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="bg-[#fff] w-[200px] p-2 rounded-3xl">
          <label className="text-center ml-12 font-medium cursor-pointer">
            <input
              type="file"
              hidden
              multiple
              onChange={(e) => {
                setInputImage(e.target.files[0]);
              }}
            />
            Choose Files
          </label>
        </div>
        <button
          className="bg-[#48CAE4] w-[200px] p-2 rounded-3xl"
          onClick={removeBackground}
        >
          Remove Background
        </button>
      </div>

      <div>
        {outputImage && (
          <div className="flex flex-col justify-center items-center mt-5">
            <img
              src={outputImage}
              alt="output image"
              className=" h-[320px] w-[400px] p-5 rounded-md m-auto shadow-xl"
            />
            <button
              className="border-2 text-[#fff] p-2 mt-3 m-auto rounded-lg hover:bg-[#fff] hover:text-[#121420] hover:border-2 "
              onClick={() => downloadImage(outputImage)}
            >
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
