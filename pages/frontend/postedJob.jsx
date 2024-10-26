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

function NotificationBar() {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-5 px-6 py-3 bg-gray-800 text-white rounded-md shadow-md transition-all duration-500">
      <span>To access this page, please Login. </span>
      <Link href="/auth/login" className="text-blue-400 underline ml-2">
        Redirecting...
      </Link>
    </div>
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
        router.push("/auth/login"); // Redirect to home or login page
      }, 4500);
    }
  }, [id, router]);

  const { data, error, isLoading } = useSWR(
    id && Cookies.get("token") ? "/getMyPostedJobs" : null,
    () => get_my_posted_job(id)
  );
/*
  useEffect(() => {
    if (!id || !Cookies.get("token")) {
      router.push("/auth/login")
    }
  }, [user, id, router]);
*/
/*
  const { data, error, isLoading } = useSWR("/getMyPostedJobs", () =>
    get_my_posted_job(id)
  );
*/

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
          <div className="w-full  pt-20">
            <div className="text-xl mt-20 text-center text-indigo-800 leading-snug font-semibold mb-2 md:text-2xl lg:text-4xl">
              <h1 className="text-3xl">Posted Jobs</h1>
            </div>
            <div className="w-full h-full px-4 py-4 flex  overflow-y-auto  items-start justify-center flex-wrap">
              {myJobs?.map((job, index) => (
                <JobsCard key={index} job={job} posted={true} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PostedJobs;
