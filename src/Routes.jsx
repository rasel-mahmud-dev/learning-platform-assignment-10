import React from "react";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Courses from "./pages/Courses/Courses";
import CourseDetail, { fetchCourseDetail } from "./pages/CourseDetail/CourseDetail.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import BlogPage from "./pages/BlogPage/BlogPage.jsx";
import FAQs from "./pages/FAQs/FAQs";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import PrivateRoute from "./middleware/PrivateRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/courses", element: <Courses /> },
            {
                path: "/course-detail/:courseId",
                loader: fetchCourseDetail,
                element: <CourseDetail />,
            },
            { path: "/login", element: <LoginPage /> },
            {
                path: "/profile/:id",
                element: (
                    <PrivateRoute>
                        <ProfilePage />
                    </PrivateRoute>
                ),
            },
            { path: "/registration", element: <RegistrationPage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/blogs", element: <BlogPage /> },
            { path: "/faq", element: <FAQs /> },
        ],
    },
]);

export default () => <RouterProvider router={router} />;
