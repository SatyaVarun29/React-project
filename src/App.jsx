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
import Jobpage, { Jobloader } from "./Pages/Jobpage";
import Addjobpage from "./Pages/Addjobpage";
import EditJobpage from "./Pages/EditJobpage";

const App = () => {
  const addJob = async (NewJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewJob),
    });
    return;
  };
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const updateJob=async(job)=>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<Jobspage />} />
        <Route path="/add-job" element={<Addjobpage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobpage UpdateJobSubmit={updateJob}  />}
          loader={Jobloader}
        />
          <Route
          path="/jobs/:id"
          element={<Jobpage deleteJob={deleteJob} />}
          loader={Jobloader}
        />
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
