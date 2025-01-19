import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./root/layout";
import { Account, Bugdet, Dashabord, Report, Setting } from "./pages";
import AccountDetail from "./pages/AccountDetail";
import Welcome from "./pages/Welcome";
import axios from "axios";
const baseurl = import.meta.env.VITE_APP_BASE_URL;
if (!baseurl) {
  throw new Error("VITE_APP_BASE_URL is required");
}
axios.defaults.baseURL = baseurl;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/portal",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashabord />,
      },
      {
        path: "accounts",
        element: <Account />,
      },
      {
        path: "budget",
        element: <Bugdet />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
      {
        path: "account/:accountId",
        element: <AccountDetail />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
