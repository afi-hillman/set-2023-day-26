import Home from "./pages/Home";
import Job from "./pages/Job";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// react component
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/job/:id",
      element: <Job />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
