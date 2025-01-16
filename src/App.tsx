import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./root/layout";
import { Account, Bugdet, Dashabord, Report, Setting } from "./pages";
import AccountDetail from "./pages/AccountDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello to page</div>,
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
        path: "account/:id",
        element: <AccountDetail />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
