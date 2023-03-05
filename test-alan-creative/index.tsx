import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddMenu from "../pages/addMenu";
import LandingPage from "../pages/landingPage";
import ListMenu from "../pages/listMenu";
import "../styles/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/food",
    element: <ListMenu />,
  },
  {
    path: "/add-food",
    element: <AddMenu />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
