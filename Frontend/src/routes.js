
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  MAIN_ROUTE,
  JOKE_ROUTE,
  CAT_ROUTE,
  NON_AUTH
} from "./utils/consts";
import Auth from "./pages/Auth.js";
import Main from "./pages/Main";
import Jokes from "./pages/Jokes.js";
import Cat from "./pages/Cat.js";
import { Component } from "react";
import NonAuthPanel from "./pages/NonAuthPanel.js";
// import Admin from "./pages/Admin";



export  const authRoutes =  [
  // {
  //     path: ADMIN_ROUTE,
  //     Component: Admin
  // },
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
export  const publicRoutes = [
  {
    path: NON_AUTH,
    Component: NonAuthPanel
  },
  {
      path: LOGIN_ROUTE,
      Component: Auth
  },
  {
      path: REGISTRATION_ROUTE,
      Component: Auth
  },

]