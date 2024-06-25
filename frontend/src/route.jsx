import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Myloginpage from "./pages/Myloginpage";
import Formpage from "./pages/Formpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Myloginpage />,
  },
  {
    path: "/signup",
    element: <Myloginpage />,
  },
  {
    path: "/addproduct",
    element: <Formpage />,
  },
]);
export default router;
