
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  MAIN_ROUTE,
  JOKE_ROUTE,
  CAT_ROUTE
} from "./utils/consts";
import Auth from "./pages/Auth.js";
import Main from "./pages/Main";
import Jokes from "./pages/Jokes.js";
import Cat from "./pages/Cat.js";
// import Admin from "./pages/Admin";



export  const authRoutes =  [
  // {
  //     path: ADMIN_ROUTE,
  //     Component: Admin
  // },

]
export  const publicRoutes = [
  {
      path: LOGIN_ROUTE,
      Component: Auth
  },
  {
      path: REGISTRATION_ROUTE,
      Component: Auth
  },
  {
      path: MAIN_ROUTE,
      Component: Main
  },
  {
    path: JOKE_ROUTE,
    Component: Jokes
  },
  {
      path: CAT_ROUTE,
      Component: Cat
  }
]