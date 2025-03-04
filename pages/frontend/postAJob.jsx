import NavBar from "@/components/NavBar";
import Select from "react-select";
import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post_job } from "@/Services/job";
import { useRouter } from "next/router";
import {
  BsBriefcase,
  BsCalendar,
  BsCurrencyDollar,
  BsPeople,
} from "react-icons/bs";
import { MdBusinessCenter, MdCategory, MdEmail } from "react-icons/md";

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

  const options = useMemo(
    () => [
      { value: "fulltime", label: "Full Time" },
      { value: "parttime", label: "Part Time" },
      { value: "internship", label: "Internship" },
      { value: "contract", label: "Contract" },
    ],
    []
  );

  const InputField = useMemo(() => {
    const MemoizedInputField = React.memo(
      ({
        label,
        id,
        type,
        placeholder,
        value,
        onChange,
        error: fieldError,
        icon: Icon,
      }) => (
        <div className="w-full mb-6">
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {label}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type={type}
              id={id}
              value={value}
              onChange={onChange}
              className={`bg-gray-50 border ${
                fieldError ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5`}
              placeholder={placeholder}
            />
          </div>
          {fieldError && (
            <p className="mt-2 text-sm text-red-600">{fieldError}</p>
          )}
        </div>
      )
    );
    MemoizedInputField.displayName = "InputField";
    return MemoizedInputField;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="pt-20 pb-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center">Post a New Job</h1>
            <p className="mt-2 text-center text-indigo-100">
              Fill in the details below to create your job listing
            </p>
          </div>
        </div>

        {/* Main Form */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Job Title"
                  id="title"
                  type="text"
                  placeholder="Enter job title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  error={error.title}
                  icon={BsBriefcase}
                />

                <InputField
                  label="Salary"
                  id="salary"
                  type="number"
                  placeholder="Enter salary amount"
                  value={formData.salary}
                  onChange={(e) =>
                    setFormData({ ...formData, salary: e.target.value })
                  }
                  error={error.salary}
                  icon={BsCurrencyDollar}
                />

                <InputField
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="Enter contact email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  error={error.email}
                  icon={MdEmail}
                />

                <InputField
                  label="Organization Name"
                  id="company"
                  type="text"
                  placeholder="Enter company name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  error={error.company}
                  icon={MdBusinessCenter}
                />

                <InputField
                  label="Job Category"
                  id="jobCategory"
                  type="text"
                  placeholder="Enter job category"
                  value={formData.job_category}
                  onChange={(e) =>
                    setFormData({ ...formData, job_category: e.target.value })
                  }
                  error={error.job_category}
                  icon={MdCategory}
                />

                <InputField
                  label="Experience Required"
                  id="jobExperience"
                  type="text"
                  placeholder="Enter required experience"
                  value={formData.job_experience}
                  onChange={(e) =>
                    setFormData({ ...formData, job_experience: e.target.value })
                  }
                  error={error.job_experience}
                  icon={BsBriefcase}
                />

                <InputField
                  label="Number of Vacancies"
                  id="jobVacancy"
                  type="number"
                  placeholder="Enter number of positions"
                  value={formData.job_vacancy}
                  onChange={(e) =>
                    setFormData({ ...formData, job_vacancy: e.target.value })
                  }
                  error={error.job_vacancy}
                  icon={BsPeople}
                />

                <InputField
                  label="Application Deadline"
                  id="jobDeadline"
                  type="date"
                  min={currentDate}
                  value={formData.job_deadline}
                  onChange={(e) =>
                    setFormData({ ...formData, job_deadline: e.target.value })
                  }
                  error={error.job_deadline}
                  icon={BsCalendar}
                />
              </div>

              <div className="w-full mb-6">
                <label
                  htmlFor="jobType"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Job Type
                </label>
                <Select
                  id="jobType"
                  options={options}
                  onChange={(e) =>
                    setFormData({ ...formData, job_type: e.value })
                  }
                  placeholder="Select job type"
                  className="mt-1"
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: error.job_type ? "#ef4444" : "#d1d5db",
                      "&:hover": {
                        borderColor: "#6366f1",
                      },
                    }),
                  }}
                />
                {error.job_type && (
                  <p className="mt-2 text-sm text-red-600">{error.job_type}</p>
                )}
              </div>

              <div className="w-full mb-6">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Job Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className={`bg-gray-50 border ${
                    error.description ? "border-red-500" : "border-gray-300"
                  } text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5`}
                  placeholder="Enter detailed job description"
                />
                {error.description && (
                  <p className="mt-2 text-sm text-red-600">
                    {error.description}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
