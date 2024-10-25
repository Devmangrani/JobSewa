import NavBar from "@/components/NavBar";
import Select from "react-select";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post_job } from "@/Services/job";
import { useRouter } from "next/router";

export default function PostAJob() {
  const user = useSelector((state) => state.User.userData);
  const router = useRouter();
  
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setCurrentDate(formattedDate);
  }, []);

  const [formData, setFormData] = useState({
    user: user?._id,
    title: "",
    salary: 0,
    email: "",
    company: "",
    description: "",
    job_category: "",
    job_type: "",
    job_experience: "",
    job_vacancy: 0,
    job_deadline: "",
  });
  const [error, setError] = useState({
    user: "",
    title: "",
    salary: "",
    email: "",
    company: "",
    description: "",
    job_category: "",
    job_type: "",
    job_experience: "",
    job_vacancy: "",
    job_deadline: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title) {
      setError({ ...error, title: "Title Field is Required" });
      return;
    }

    if (!formData.salary) {
      setError({ ...error, salary: "Salary Field is Required" });
      return;
    }else if(formData.salary < 1){
      setError({ ...error, salary: "Invalid Salary!" });
      return;
    }

    if (!formData.email) {
      setError({ ...error, email: "Email Field is Required" });
      return;
    }

    if (!formData.company) {
      setError({ ...error, company: "Organization Field is Required" });
      return;
    }
    if (!formData.description) {
      setError({ ...error, description: "Description Field is Required" });
      return;
    }
    if (!formData.job_category) {
      setError({ ...error, job_category: "Job_category Field is Required" });
      return;
    }
    if (!formData.job_type) {
      setError({ ...error, job_type: "Job_type Field is Required" });
      return;
    }
    if (!formData.job_experience) {
      setError({
        ...error,
        job_experience: "Job_experience Field is Required",
      });
      return;
    }

    if (!formData.job_vacancy) {
      setError({ ...error, job_vacancy: "Job_vacancy Field is Required" });
      return;
    }else if(formData.job_vacancy < 1){
      setError({ ...error, job_vacancy: "Invalid Job Vacancy!" });
      return;
    }

    if (!formData.job_deadline) {
      setError({ ...error, job_deadline: "job_deadline Field is Required" });
      return;
    }

    if (formData.user == null) {
      return toast.error("Please Login First");
    }

    const res = await post_job(formData);
    if (res.success) {
      toast.success(res.message);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      toast.error(res.message);
    }
  };

  const options = [
    { value: "fulltime", label: "Full Time" },
    { value: "parttime", label: "Part Time" },
    { value: "internship", label: "Internship" },
    { value: "contract", label: "Contract" },
  ];

  return (
    <>
      <NavBar />
      <div className="w-full  py-20 flex items-center  justify-center flex-col">
        <h1 className="text-xl mt-20 text-center text-indigo-800  leading-snug font-semibold mb-2 md:text-2xl lg:text-4xl">
        Tell Us About <br className="hidden md:inline" /> Your Job!
        </h1>
        <p className="mt-2  text-lg text-gray-600">
         Provide us with the details of your job opportunity so we can connect you with the best candidates.
        </p>
        <form
          onSubmit={handleSubmit}
          className="sm:w-1/2 w-full px-10 py-8 bg-white rounded-lg mt-6"
        >
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label htmlFor="title" className="mb-1 text-base font-semibold">
              Title 
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              type="text"
              id="title"
              className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-50 shadow-md hover:border-gray-400"
              placeholder="Enter title of job"
            />
            {error.title && (
              <p className="text-sm text-red-500">{error.title}</p>
            )}
          </div>
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label htmlFor="salary" className="mb-1 text-base font-semibold">
              Salary 
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, salary: e.target.value })
              }
              type="number"
              id="salary"
              className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-50 shadow-md hover:border-gray-400"
              placeholder="Enter salary for this job"
            />
            {error.salary && (
              <p className="text-sm text-red-500">{error.salary}</p>
            )}
          </div>
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label htmlFor="email" className="mb-1 text-base font-semibold">
              Email 
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-50 shadow-md hover:border-gray-400"
              placeholder="Enter email to be contacted for this job"
            />
            {error.email && (
              <p className="text-sm text-red-500">{error.email}</p>
            )}
          </div>
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label htmlFor="company" className="mb-1 text-base font-semibold">
              Organization Name 
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              type="text"
              id="company"
              className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-50 shadow-md hover:border-gray-400"
              placeholder="Enter organization name"
            />
            {error.company && (
              <p className="text-sm text-red-500">{error.company}</p>
            )}
          </div>
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label
              htmlFor="description"
              className="mb-1 text-base font-semibold"
            >
              Description 
            </label>
            <textarea
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              onResize={"none"}
              type="text"
              id="description"
              className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-50 shadow-md hover:border-gray-400"
              placeholder="Enter description of job"
            />
            {error.description && (
              <p className="text-sm text-red-500">{error.description}</p>
            )}
          </div>
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label
              htmlFor="jobCategory"
              className="mb-1 text-base font-semibold"
            >
              Job Category 
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, job_category: e.target.value })
              }
              type="text"
              id="jobCategory"
              className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-50 shadow-md hover:border-gray-400"
              placeholder="Enter category of job"
            />
            {error.job_category && (
              <p className="text-sm text-red-500">{error.job_category}</p>
            )}
          </div>
          <Select
            onChange={(e) => setFormData({ ...formData, job_type: e.value })}
            placeholder="Please select job type"
            options={options}
            styles={{
              control: (defaultstyle) => ({
                  ...defaultstyle,
                  border: '1px solid #D1D5DB', 
                  borderRadius: '0.5rem', 
                  padding: '0.4rem', 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
              }),
              placeholder: (defaultsyle) => ({
                ...defaultsyle,
                color: '#A0AEC0', 
                
              }),
          }}
          />
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            {error.job_category && (
              <p className="text-sm text-red-500">{error.job_category}</p>
            )}
          </div>
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label
              htmlFor="jobExperience"
              className="mb-1 text-base font-semibold"
            >
              Job Experience 
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, job_experience: e.target.value })
              }
              type="text"
              id="jobExperience"
              className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-50 shadow-md hover:border-gray-400"
              placeholder="Enter experience required for this job"
            />
            {error.job_experience && (
              <p className="text-sm text-red-500">{error.job_experience}</p>
            )}
          </div>
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label htmlFor="jobva" className="mb-1 text-base font-semibold">
              Job Vacancy 
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, job_vacancy: e.target.value })
              }
              type="number"
              id="jobva"
              className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-50 shadow-md hover:border-gray-400"
              placeholder="enter number of vacancies"
            />
            {error.job_vacancy && (
              <p className="text-sm text-red-500">{error.job_vacancy}</p>
            )}
          </div>
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label htmlFor="jobva" className="mb-1 text-base font-semibold">
              Job Deadline 
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, job_deadline: e.target.value })
              }
              type="date"
              min={currentDate}
              id="jobva"
              className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-50 shadow-md hover:border-gray-400"
              placeholder="Enter deadline of job"
            />
            {error.job_deadline && (
              <p className="text-sm text-red-500">{error.job_deadline}</p>
            )}
          </div > 
          
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="py-2 px-4 rounded bg-indigo-600 text-white font-semibold tracking-widest mx-auto hover:bg-indigo-500 transition duration-200"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
      <ToastContainer />
    </>
  );
}
