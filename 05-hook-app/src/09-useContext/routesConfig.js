import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { MainApp } from "./MainApp";

export const routesConfig=[
    {
      path: "/",
      element: <MainApp />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "login",
          element: <LoginPage />
        },
        {
          path: "about",
          element: <AboutPage />,
      }
      ]
    },
  ];