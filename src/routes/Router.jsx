import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";
import Colleges from "../pages/Colleges";
import CollegeDetails from "../pages/CollegeDetails";
import PrivateRoute from "./PrivateRoute";
import Admission from "../pages/Admission";
import StudentInput from "../pages/StudentInput";
import UserProfile from "../pages/UserProfile";
import SearchResults from "../pages/SearchResult";
import PasswordReset from "../pages/PasswordReset";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "admission",
        element: <Admission></Admission>,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "search-results",
        element: <SearchResults></SearchResults>,
      },
      {
        path: "reset-password",
        element: <PasswordReset></PasswordReset>,
      },
      {
        path: "/college-details/:id",
        element: (
          <PrivateRoute>
            {" "}
            <CollegeDetails></CollegeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://edu-connect-server.vercel.app/college-details/${params.id}`
          ),
      },
      {
        path: "/admission/:id",
        element: (
          <PrivateRoute>
            <StudentInput></StudentInput>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
