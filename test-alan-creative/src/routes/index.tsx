import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import "../styles/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
