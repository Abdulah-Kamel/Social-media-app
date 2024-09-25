import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/index.jsx";
import Home from "./Pages/Home/index.jsx";
import Profile from "./Pages/Profile/index.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/explore",
          element: (
            <div className="bg-[#212121] text-white w-full lg:ms-auto">
              Explore
            </div>
          ),
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "notifications",
          element: (
            <div className="bg-[#212121] text-white w-full lg:ms-auto">
              Notifications
            </div>
          ),
        },
        {
          path: "create",
          element: (
            <div className="bg-[#212121] text-white w-full lg:ms-auto">
              Create
            </div>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
