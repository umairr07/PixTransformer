import { useState } from "react";
import { saveAs } from "file-saver";

const Download = () => {
  const [res, setRes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const API_KEY = "lKPJwsGvoEIazuAJIjcD0j2iv6SF69cv8zkg79R3a5Y";

  const fetchRequest = async () => {
    if (!inputValue.trim()) return; // Don't fetch if the input value is empty
    try {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=${API_KEY}`
      );
      const dataJ = await data.json();
      const result = dataJ.results;
      console.log(result);
      setRes(result);
      setInputValue("");
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const generateImages = () => {
    fetchRequest();
  };

  const downloadImage = async (url, description) => {
    // console.log("download ");
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      saveAs(blob, description || "downloaded_image.jpg"); // Set a default filename if description is not available
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div className="pt-24 bg-[#121420] ">
      <div className="ml-3">
        <h1 className="text-3xl font-bold text-[#fff]">
          Bulk Image Downloader
        </h1>
      </div>
      <div className="flex justify-center items-center mt-10">
        <input
          type="text"
          placeholder="search images eg cats, dogs, cars"
          className="p-3 rounded-full w-[400px] border-[#48CAE4] border-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-[#48CAE4] p-3 rounded-full ml-3"
          onClick={generateImages}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center m-auto mt-10 ">
        {res.map((image) => (
          <div
            key={image.id}
            className="m-2 bg-[#fff] p-5 border-[#48CAE4] border-2 rounded-lg shadow-lg"
          >
            <img
              src={image.urls.small}
              alt={image.description || "Unsplash Image"}
              className="w-[400px] h-[300px] object-cover rounded-lg"
            />
            <div className="flex justify-center items-center mt-5">
              <button
                className="text-[#fff] bg-[#121420] p-2 rounded-lg hover:bg-[#fff] hover:text-[#121420] hover:border-2 border-[#121420]"
                onClick={() =>
                  downloadImage(image.urls.full, image.description)
                }
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Download;
