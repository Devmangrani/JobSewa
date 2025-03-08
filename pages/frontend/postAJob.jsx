import NavBar from "@/components/NavBar";
import Select from "react-select";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post_job } from "@/Services/job";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const inputStyles =
  "w-full border border-gray-300 rounded-lg p-3 bg-white bg-opacity-80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300";
const labelStyles = "block text-sm font-medium text-gray-700 mb-1";
const errorStyles = "text-sm text-red-500 mt-1";

export default function PostAJob() {
  const user = useSelector((state) => state.User.userData);
  const router = useRouter();

  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
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
    } else if (formData.salary < 1) {
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
    } else if (formData.job_vacancy < 1) {
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

  const formFields = [
    {
      name: "title",
      label: "Job Title",
      type: "text",
      placeholder: "Enter title of job",
    },
    {
      name: "salary",
      label: "Salary",
      type: "number",
      placeholder: "Enter salary for this job",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email to be contacted for this job",
    },
    {
      name: "company",
      label: "Organization Name",
      type: "text",
      placeholder: "Enter organization name",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter description of job",
    },
    {
      name: "job_category",
      label: "Job Category",
      type: "text",
      placeholder: "Enter category of job",
    },
    {
      name: "job_experience",
      label: "Job Experience",
      type: "text",
      placeholder: "Enter experience required for this job",
    },
    {
      name: "job_vacancy",
      label: "Job Vacancy",
      type: "number",
      placeholder: "Enter number of vacancies",
    },
    {
      name: "job_deadline",
      label: "Job Deadline",
      type: "date",
      min: currentDate,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="min-h-screen w-full bg-gradient-to-r from-white via-indigo-200 to-sky-500 py-20">
        <div className="container mx-auto px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-2"
            >
              Post a New Job
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center text-gray-600 mb-8"
            >
              Fill in the details below to post your job opportunity
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-xl p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className={field.type === "textarea" ? "col-span-full" : ""}
                  >
                    <label htmlFor={field.name} className={labelStyles}>
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.name]: e.target.value,
                          })
                        }
                        placeholder={field.placeholder}
                        rows="4"
                        className={inputStyles}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        min={field.min}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.name]: e.target.value,
                          })
                        }
                        placeholder={field.placeholder}
                        className={inputStyles}
                      />
                    )}
                    {error[field.name] && (
                      <p className={errorStyles}>{error[field.name]}</p>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="col-span-full"
                >
                  <label className={labelStyles}>Job Type</label>
                  <Select
                    onChange={(e) =>
                      setFormData({ ...formData, job_type: e.value })
                    }
                    options={options}
                    placeholder="Please select job type"
                    className="mt-1"
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(8px)",
                        borderColor: "#E5E7EB",
                        borderRadius: "0.5rem",
                        padding: "0.2rem",
                        boxShadow: "none",
                        "&:hover": {
                          borderColor: "#818CF8",
                        },
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected ? "#4F46E5" : "white",
                        "&:hover": {
                          backgroundColor: state.isSelected
                            ? "#4F46E5"
                            : "#F3F4F6",
                        },
                      }),
                    }}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-8 flex justify-center"
              >
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold 
                           transform transition-all duration-200 hover:bg-indigo-700 
                           hover:scale-105 focus:outline-none focus:ring-2 
                           focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Post Job
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
