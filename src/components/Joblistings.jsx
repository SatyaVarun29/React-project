import { useState, useEffect } from "react";

import Joblisting from "./Joblisting";

const Joblistings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [Loading, setLoading] = useState(true);
  const ApiUrl = isHome
    ? "/api/jobs?_limit=3"
    : "/api/jobs";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(ApiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("error while fetching", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {jobs.map((job) => (
                <Joblisting key={job.id} job={job} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Joblistings;
