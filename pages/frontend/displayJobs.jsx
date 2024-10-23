import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobData } from "@/Utils/JobSlice";
import JobsCard from "@/components/JobsCard";
import useSWR from "swr";
import { toast } from "react-toastify";
import { BiSearch } from "react-icons/bi";

export default function DisplayJobs() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const JobData = useSelector((state) => state?.Job?.JobData);
  
  const { data, error, isLoading } = useSWR("/getAllJobs", () => get_job());

  useEffect(() => {
    if (data) dispatch(setJobData(data?.data));
  }, [data, dispatch]);

  if (error) toast.error(error);

  useEffect(() => {
    // Initial filter based on search term
    if (search === "") {
      setFilteredData(JobData);
    } else {
      setFilteredData(
        JobData.filter(
          (job) =>
            job?.category?.toLowerCase().includes(search.toLowerCase()) ||
            job?.title?.toLowerCase().includes(search.toLowerCase()) ||
            job?.company?.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, JobData]);

  // Function to sort jobs based on salary
  const sortBySalary = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      return (a.salary || 0) - (b.salary || 0); // Sort in ascending order
    });
    setFilteredData(sortedData);
  };

  return (
    <>
      <NavBar />
      <div className="w-full py-20 flex items-center md:px-8 px-2 justify-center flex-col">
        <h1 className="px-4 mx-2 py-2 mt-8 mb-4 leading-relaxed uppercase tracking-wider border-b-2 border-b-indigo-600 text-3xl font-semibold">
          Available Jobs
        </h1>
        <div className="ml-auto flex justify-center items-center w-72 border-b-2 border-sky-700">
          <BiSearch className="text-2xl text-sky-700" />
          <input
            className="py-2 px-2 outline-none flex-1"
            type={"search"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={"Search by title, company or category..."}
          />
        </div>

        {/* Sort Button */}
        <button
          className="mt-4 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={sortBySalary}
        >
          Sort by Salary
        </button>

        <div className="w-full h-full py-4 flex overflow-y-auto items-center justify-center flex-wrap">
          {Array.isArray(filteredData) && filteredData.length > 0 ? (
            filteredData.map((job) => {
              return <JobsCard job={job} key={job?._id} />;
            })
          ) : (
            <p>No jobs found</p>
          )}
        </div>
      </div>
    </>
  );
}
