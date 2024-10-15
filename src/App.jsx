import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import MainLayout from "./Layouts/MainLayout";
import Jobspage from "./Pages/Jobspage";
import Notfound from "./Pages/Notfound";


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<Homepage />} />
  <Route path='/jobs' element={<Jobspage />} />
  <Route path='*' element={<Notfound />} />
  </Route>)
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
