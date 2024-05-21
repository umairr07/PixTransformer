import { useState } from "react";
import Image from "react-image-webp";
import imageCompression from "browser-image-compression";

const WEBPImage = () => {
  const [file, setFile] = useState(null);
  const [webpFile, setWebpFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      setIsConverting(true);
      setError(null);

      try {
        const webpImage = await convertToWebP(selectedFile);
        setWebpFile(URL.createObjectURL(webpImage));
      } catch (err) {
        setError("Error converting to WebP");
      } finally {
        setIsConverting(false);
      }
    }
  };

  const convertToWebP = async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
      fileType: "image/webp",
    };
    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      throw new Error("Conversion failed");
    }
  };

  return (
    <div className="pt-24 bg-[#121420] h-[85vh]">
      <div className="ml-3">
        <h1 className="text-3xl font-bold text-[#fff]">Image Converter</h1>
        <h1 className="font-medium text-[#979797] py-5">
          Convert your image files to WebP format
        </h1>
      </div>
      <div className="bg-[#48CAE4] w-[400px] p-2 rounded-3xl m-auto">
        <label className="text-center ml-36 font-medium cursor-pointer">
          <input type="file" hidden onChange={handleFileChange} />
          Choose Image
        </label>
      </div>
      <div className="mt-10 flex gap-5 justify-center items-center">
        {isConverting && <p className="text-[#fff]">Converting...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {file && (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[#fff]">Original Image</h2>
            <img
              src={file}
              alt="Original"
              className="m-auto my-3 max-w-[400px] h-auto"
            />
          </div>
        )}
        {webpFile && (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[#fff]">Converted to WebP</h2>
            <Image
              src={webpFile}
              webp={webpFile}
              alt="WebP"
              className="m-auto my-3 max-w-[400px] h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WEBPImage;
