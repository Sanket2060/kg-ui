import Home from "./pages/Home";
import HomeLayOut from "./components/HomeLayOut/";
import DashboardLayout from "./pages/DashboardLayout";
import "./App.css";
import About from "./pages/About";
import Services from "./pages/Services";
import DashboardMain from "./components/DashboardMain";
import GenerateDocument from "./pages/utils/GenerateDocument";
import PrintingDocument from "./pages/utils/PrintingDocument";
import Kuruwa from "./AdminDashboard/Kuruwa";
import NotaryPublic from "./pages/utils/NotaryPublic";
import ProtectedRoute, {
  AdminRoute,
  DirectAccessOnAccessToken,
} from "./components/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminLayout from "./AdminDashboard/AdminLayout";
import AdminMain from "./AdminDashboard/AdminMain";
import TotalUser from "./AdminDashboard/TotalUser";
import KagazPatraUser from "./AdminDashboard/KagazPatraUser";
import Setting from "./AdminDashboard/Setting";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <DirectAccessOnAccessToken redirectOnSuccess="/dashboard">
            <HomeLayOut />
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
        path: "admindashboard",
        element: (
          <AdminRoute >
            <AdminLayout />
          </AdminRoute>
        ),
        children: [
          {
            path: "",
            element: <AdminMain />,
          },
          {
            path: "totalusers",
            element: <TotalUser/>,
          },
          {
            path: "kuruwa",
            element: <Kuruwa/>,
          },
          {
            path: "kagazpatrauser",
            element: <KagazPatraUser/>,
          },
          {
            path:"setting",
            element:<Setting/>
          }
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
    ],
  },
]);
export default router;
