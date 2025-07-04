import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrowseListings from "./pages/BrowseListings.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import MainLayOut from "./layouts/MainLayOut.jsx";
import Login from "./pages/Login.jsx";
import MyListings from "./pages/MyListings.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import AddListingForm from "./pages/AddListingForm.jsx";
import PrivateRoute from "./providers/PrivateRoute.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import RoommateDetails from "./pages/RoommateDetails.jsx";
import UpdateRoommate from "./pages/UpdateRoommate.jsx";
import NewFoundRoommate from "./pages/NewFoundRoommate.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Contact from "./pages/Contact.jsx";
import Support from "./pages/Support.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://roommate-finder-server-lemon.vercel.app/roommates"),
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/browse",
        loader: () =>
          fetch("https://roommate-finder-server-lemon.vercel.app/roommates"),
        element: <BrowseListings></BrowseListings>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/support",
        element: <Support></Support>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
         
          {
            path: "add-listing",
            element: (
              <PrivateRoute>
                
                <AddListingForm></AddListingForm>
              </PrivateRoute>
            ),
          },
           {
            path: "myListing",
            loader: () =>
              fetch(
                "https://roommate-finder-server-lemon.vercel.app/roommates"
              ),
            element: (
              <PrivateRoute>
               
                <MyListings></MyListings>
              </PrivateRoute>
            ),
          },
          {
            path: "my-profile",
            element: (
              <PrivateRoute>
                <MyProfile></MyProfile>
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/myListing",
        loader: () =>
          fetch("https://roommate-finder-server-lemon.vercel.app/roommates"),
        element: (
          <PrivateRoute>
            {" "}
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },

      {
        path: "/add-listing",
        element: (
          <PrivateRoute>
            {" "}
            <AddListingForm></AddListingForm>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },

      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/roommateDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-lemon.vercel.app/roommates/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <RoommateDetails></RoommateDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateRoommate/:id",
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-lemon.vercel.app/roommates/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateRoommate></UpdateRoommate>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>
);
