import { createBrowserRouter, ScrollRestoration  } from "react-router-dom";
import Competences from "./Pages/Competences";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Error from "./Pages/Error";
import Nav from "./Components/Nav";
import Confirmation from "./Pages/Confirmation";

export const router = createBrowserRouter([
    {
      path: '/',
       element : (
        <>
          <ScrollRestoration />
          <Nav />
          <Home />
        </>
      )
    },
    {
      path: "/contact",
      element : (
        <>
        <ScrollRestoration />
        <Nav />
        <Contact />
        </>
      )
    },
    {
      path: "/portfolio",
      element : (
        <>
        <ScrollRestoration />
        <Nav />
        <Portfolio />
        </>
      )
    },
    {
        path: "/competences",
        element : (
          <>
          <ScrollRestoration />
          <Nav />
          <Competences/>
          </>
        )
      },
    {
      path: "/*",
      element : (
        <>
          <ScrollRestoration />
          <Nav  />
          <Error />
        </>
      )
    },
    {
      path: '/confirmation',
      element: (
        <>
        <Nav />
        <Confirmation />
        </>
      )
    }
  ])
  