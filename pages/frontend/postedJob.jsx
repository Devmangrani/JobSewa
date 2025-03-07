import { get_my_posted_job } from "@/Services/job";
import { setMyJobs } from "@/Utils/JobSlice";
import JobsCard from "@/components/JobsCard";
import NavBar from "@/components/NavBar";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useSWR from "swr";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../styles/Homepage.module.css";

function NotificationBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-5 px-6 py-3 bg-gray-800 text-white rounded-md shadow-lg z-50"
    >
      <span>To access this page, please Login. </span>
      <Link href="/auth/login" className="text-blue-400 underline ml-2">
        Redirecting...
      </Link>
    </motion.div>
  );
}

function PostedJobs() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.User?.userData);
  const myJobs = useSelector((state) => state?.Job?.myJobs);
  const id = user?._id;

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (!id || !Cookies.get("token")) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        router.push("/auth/login");
      }, 4500);
    }
  }, [id, router]);

  const { data, error, isLoading } = useSWR(
    id && Cookies.get("token") ? "/getMyPostedJobs" : null,
    () => get_my_posted_job(id)
  );

  useEffect(() => {
    if (data) dispatch(setMyJobs(data?.data));
  }, [data, dispatch]);

  if (error) toast.error(error);

  if (showNotification) return <NotificationBar />;

  return (
    <>
      {isLoading ? (
        <div className="bg-gray w-full h-screen flex items-center flex-col justify-center">
          <InfinitySpin width="200" color="#4f46e5" />
          <p className="text-xs uppercase">Loading Resources Hold Tight...</p>
        </div>
      ) : (
        <>
          <NavBar />
          <div className="w-full min-h-screen bg-gradient-to-r from-white via-indigo-200 to-sky-500">
            <div className="w-full py-20 flex items-center md:px-8 px-2 justify-center flex-col">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl mt-20 text-center text-indigo-900 font-bold mb-8"
              >
                Your Posted Jobs
              </motion.h1>

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
                {myJobs?.length > 0 ? (
                  myJobs?.map((job, index) => (
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
                      <JobsCard job={job} posted={true} />
                    </motion.div>
                  ))
                ) : (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className={styles.noJobsMessage}
                  >
                    You haven't posted any jobs yet.
                  </motion.p>
                )}
              </motion.div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PostedJobs;
