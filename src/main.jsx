import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/BodyComponent.jsx";
import UploadImage from "./components/UploadImage.jsx";
import ImageConverter from "./components/ImageConverter.jsx";
import Download from "./components/Download.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/upload",
        element: <UploadImage />,
      },
      {
        path: "/imgconverter",
        element: <ImageConverter />,
      },
      {
        path: "/download",
        element: <Download />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
