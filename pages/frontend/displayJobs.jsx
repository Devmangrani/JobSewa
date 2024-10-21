import NavBar from '@/components/NavBar'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setJobData } from '@/Utils/JobSlice';
import JobsCard from '@/components/JobsCard';
import useSWR from "swr";
import { toast } from "react-toastify";
import { useEffect } from 'react';


export default function DisplayJobs() {
    const dispatch = useDispatch();
  const JobData = useSelector((state) => state?.Job?.JobData);

   const { data, error, isLoading } = useSWR("/getAllJobs", () =>
     get_job()
   );

   useEffect(() => {
     if (data) dispatch(setJobData(data?.data));
   }, [data, dispatch]);

   if (error) toast.error(error);

  return (
    <>
      <NavBar />
      <div className="w-full  py-20 flex items-center md:px-8 px-2  justify-center flex-col">
        <h1 className="px-4 mx-2 py-2 uppercase tracking-wider border-b-2 border-b-indigo-600 text-3xl font-semibold">
          Available Jobs
        </h1>
        <div className="w-full h-full py-4 flex  overflow-y-auto  items-center justify-center flex-wrap">
          {/* map */}
          {Array.isArray(JobData) && JobData.length > 0 ? (
            JobData?.map((job) => {
              return <JobsCard job={job} key={job?._id} />;
            })
          ) : (
            <p>No jobs found</p>
          )}

          {/* map */}
        </div>
      </div>
    </>
  );
}
