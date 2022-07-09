import {ADMIN_ROUTE, CATALOG_ROUTE, FILM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE} from "./utils/consts";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import Catalog from "./pages/Catalog";
import Auth from "./pages/Auth";
import FilmPage from "./pages/FilmPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: USER_ROUTE,
        Component: UserPage
    }
]

export const publicRoutes = [
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: FILM_ROUTE + '/:id',
        Component: FilmPage
    }
]