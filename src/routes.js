import { ADMIN_ROUTE, COURSE_ROUTE, FEEDBACK_ROUTE, HOME_ROUTE, LOGIN_ROUTE,
    REGISTRATION_ROUTE, REVIEWS_ROUTE} from "./utils/consts";
import Admin from "./Pages/Admin";
import Auth from "./Pages/Auth";
import Course from "./Pages/Course";
import Feedback from "./Pages/Feedback";
import Reviews from "./Pages/Reviews";
import Home from "./Pages/Home";

export const authRoutes =[
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: FEEDBACK_ROUTE,
        Component: Feedback
    }

]


export const publicRoutes = [

    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: COURSE_ROUTE + '/:id',
        Component: Course
    },
    {
        path: REVIEWS_ROUTE + '/:id',
        Component: Reviews
    }

]