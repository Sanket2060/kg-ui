import Home from "./pages/Home";
import HomeLayOut from "./components/HomeLayOut/";
import DashboardLayout from "./pages/DashboardLayout";
import "./App.css";
import About from "./pages/About";
import Services from "./pages/Services";
import DashboardMain from "./components/DashboardMain";
import GenerateDocument from "./pages/utils/GenerateDocument";
import PrintingDocument from "./pages/utils/PrintingDocument";
import Kuruwa from "./pages/utils/Kuruwa";
import NotaryPublic from "./pages/utils/NotaryPublic";
import ProtectedRoute, {
  DirectAccessOnAccessToken,
} from "./components/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Profile from "./pages/Profile.jsx"
import ProfileLayout from "./pages/utils/ProfileLayout";
import SuccessPage from "./components/SuccessPage";
import FailurePage from "./components/FailurePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <DirectAccessOnAccessToken redirectOnSuccess="/dashboard">
            <HomeLayOut/>
          </DirectAccessOnAccessToken>
        ),
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "about",
            element: <About />,
          },
        ],
      },

      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <DashboardLayout />{" "}
          </ProtectedRoute>
        ),
        children: [
          {
            path: "",
            element: <DashboardMain />,
          },
          {
            path: "lekhapadi",
            element: <GenerateDocument />,
          },
          {
            path: "kuruwa",
            element: <Kuruwa />,
          },
          {
            path: "notarypublic",
            element: <NotaryPublic />,
          },
          {
            path: "printdocument",
            element: <PrintingDocument />,
          },
        ],
      },
     {
       path:"profile",
       element:(
         <ProtectedRoute>
          <ProfileLayout/>
        </ProtectedRoute>
       )
        },
        {
          path:'success',
          element:(
            <SuccessPage/>
          )
        },
        {
          path:'failure',
          element:(
            <FailurePage/>
          )
        }
    ],
  },
]);
export default router;
