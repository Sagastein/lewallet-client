import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./root/layout";
import { Account, Bugdet, Dashabord, Report, Setting } from "./pages";

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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
