import AppliedJobDataTable from "@/components/AppliedJobDataTable";
import NavBar from "@/components/NavBar";
import SavedJobDataTable from "@/components/SavedJobDataTable";
import { get_my_applied_job } from "@/Services/job";
import { get_book_mark_job } from "@/Services/job/bookmark";
import { setAppliedJob, setBookMark } from "@/Utils/AppliedJobSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { GiSuitcase } from "react-icons/gi";
import { InfinitySpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import styles from "../../styles/Homepage.module.css";

const DashboardCard = ({ icon: Icon, title, active, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`cursor-pointer rounded-xl p-4 ${
      active
        ? "bg-indigo-600 text-white shadow-lg"
        : "bg-white bg-opacity-60 backdrop-blur-sm hover:bg-opacity-80"
    } transition-all duration-300 flex items-center gap-3`}
  >
    <Icon className={`text-2xl ${active ? "text-white" : "text-indigo-600"}`} />
    <span className="font-semibold">{title}</span>
  </motion.div>
);

export default function Dashboard() {
  const [showTable, setShowTable] = useState("appliedJobs");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const activeUser = useSelector((state) => state?.User?.userData);
  const id = activeUser?._id;

  useEffect(() => {
    if (!id || !Cookies.get("token")) {
      router.push("/auth/login");
    }
  }, [activeUser, id, router]);

  useEffect(() => {
    fetchAppliedJobs();
  }, []);

  const fetchAppliedJobs = async () => {
    const res = await get_my_applied_job(id);
    const get_bookmarks = await get_book_mark_job(id);
    if (res.success || get_bookmarks.success) {
      dispatch(setAppliedJob(res?.data));
      dispatch(setBookMark(get_bookmarks?.data));
      setLoading(false);
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <>
      {loading ? (
        <div className="bg-gray w-full h-screen flex items-center flex-col justify-center">
          <InfinitySpin width="200" color="#4f46e5" />
          <p className="text-xs uppercase">Loading Resources Hold Tight...</p>
        </div>
      ) : (
        <>
          <NavBar />
          <div className="w-full min-h-screen bg-gradient-to-r from-white via-indigo-200 to-sky-500">
            <div className="w-full py-20 flex items-center justify-start flex-col">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl mt-20 text-center text-indigo-900 font-bold mb-8"
              >
                Your Dashboard
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-4 w-full max-w-2xl mx-auto px-4 mb-8"
              >
                <DashboardCard
                  icon={GiSuitcase}
                  title="Applied Jobs"
                  active={showTable === "appliedJobs"}
                  onClick={() => setShowTable("appliedJobs")}
                />
                <DashboardCard
                  icon={BsFillBookmarkStarFill}
                  title="Saved Jobs"
                  active={showTable === "savedJobs"}
                  onClick={() => setShowTable("savedJobs")}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full max-w-7xl mx-auto px-4"
              >
                <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl shadow-xl p-6">
                  {showTable === "savedJobs" ? (
                    <SavedJobDataTable />
                  ) : (
                    <AppliedJobDataTable />
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
