import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import SpecificData from "../pages/Home/SpecificData/SpecificData";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/specificData/:id',
        element: <SpecificData />,
        loader: ({ params }) => fetch(`https://api.dribbble.com/v2/user/shots?access_token=fc007ce9f45a3f9f7f2722aeb3bcc3ce53c3c32f8eaaddb01069a65526825d4b/${params.id}`)
      }
    ]
  }
])