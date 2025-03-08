import NavBar from "@/components/NavBar";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobData } from "@/Utils/JobSlice";
import JobsCard from "@/components/JobsCard";
import useSWR from "swr";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import styles from "../../styles/Homepage.module.css";

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

  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen bg-gradient-to-r from-white via-indigo-200 to-sky-500">
        <div className="w-full py-20 flex items-center md:px-8 px-2 justify-center flex-col">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl mt-20 text-center text-indigo-800 leading-snug font-semibold mb-2 md:text-2xl lg:text-4xl"
          >
            Available Roles
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center items-center w-80 border-b-2 border-sky-700 mb-8"
          >
            <BiSearch className="text-2xl text-sky-700" />
            <input
              className="py-2 px-2 outline-none flex-1 bg-transparent"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, company or category..."
            />
          </motion.div>

          <motion.div
            className={styles.jobsGrid}
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {Array.isArray(filteredData) && filteredData.length > 0 ? (
              filteredData.map((job, index) => (
                <motion.div
                  key={job?._id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    },
                  }}
                  className={styles.jobCardWrapper}
                  style={{ "--animation-order": index }}
                >
                  <JobsCard job={job} />
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={styles.noJobsMessage}
              >
                No jobs found matching your search criteria.
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
