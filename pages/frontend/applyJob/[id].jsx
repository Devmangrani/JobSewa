import NavBar from "@/components/NavBar";
import { apply_job } from "@/Services/job";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosAddCircle } from "react-icons/io";

export default function ApplyJob() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const activeUser = useSelector((state) => state.User.userData);
  const [formikData, setFormikData] = useState({
    name: "",
    email: activeUser?.email,
    about: "",
    job: id,
    user: activeUser?._id,
  });
  const [file, setFile] = useState(null);
  const [coverLetterFile, setCoverLetterFile] = useState(null); // State for cover letter
  const [error, setError] = useState({});

  // Refs for file inputs
  const coverLetterInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const { name, email, about, job, user } = formikData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setError({});

    // Validation checks
    if (!name) {
      setError((prev) => ({ ...prev, name: "Name Field is required" }));
      return;
    }
    if (!email) {
      setError((prev) => ({ ...prev, email: "Email Field is required" }));
      return;
    }
    if (!user) {
      return toast.error("Please Login First");
    }
    if (!job) {
      return toast.error("Please Follow Apply Process");
    }
    if (!about) {
      setError((prev) => ({ ...prev, about: "Cover letter is required." }));
      return;
    }
    // Check for CV upload
    if (!file) {
      setError((prev) => ({ ...prev, cv: "Please Upload a Resume" }));
      return;
    }
    if (file.type !== "application/pdf") {
      setError((prev) => ({ ...prev, cv: "Please Upload a PDF file" }));
      return;
    }

    // Create form data
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("about", about);
    form.append("job", job);
    form.append("user", user);
    form.append("cv", file);

    // Submit the application
    const res = await apply_job(form);
    if (res.success) {
      toast.success("Your Application is Submitted, Redirecting...");
      setTimeout(() => router.push("/"), 1000);
    } else {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <>
      <NavBar />
      <div className="lg:bg-gray-50 mt-5 lg:mt-10 w-full py-20 flex flex-col items-center justify-center">
        <h1 className="text-2xl uppercase tracking-widest font-semibold mb-8 border-b-4 border-indigo-600">
          Apply for Job
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-3/4 lg:w-1/2 bg-white p-8 rounded-lg lg:shadow-lg"
          style={{ maxWidth: "700px" }}
        >
          {/* Personal Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Personal Information</h2>
            <p className="text-gray-600 mb-4">
              Please provide us with your personal information.
            </p>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Full Name<span className="text-red-500"> *</span>
              </label>
              <input
                name="name"
                onChange={(e) =>
                  setFormikData({ ...formikData, name: e.target.value })
                }
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter your full name"
              />
              {error.name && <p className="text-sm text-red-500">{error.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Email<span className="text-red-500"> *</span>
              </label>
              <input
                name="email"
                value={email}
                disabled
                type="email"
                className="w-full p-2 border rounded bg-gray-100"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Additional Information Section */}
          <hr className="my-6 border-gray-300" />
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Additional Information</h2>

            {/* Cover Letter Input */}
            <label className="block text-gray-700 font-medium mb-1">
              Cover Letter<span className="text-red-500"> *</span>
            </label>
            <textarea
              name="about"
              onChange={(e) =>
                setFormikData({ ...formikData, about: e.target.value })
              }
              className="w-full p-2 border rounded "
              placeholder="Describe your experience and qualifications"
            />
            {error.about && <p className="text-sm text-red-500 mb-2">{error.about}</p>}

            <div className="mb-4 ">
              <label className="block text-gray-700 font-medium mb-1">
                Upload Resume/CV<span className="text-red-500"> *</span>
              </label>
              <div className="flex items-center">
                <IoIosAddCircle
                  onClick={() => fileInputRef.current.click()}
                  className="cursor-pointer"
                  style={{ width: "60px", height: "60px" }}
                />
                <p>Add a file (.pdf only)</p>
                <input
                  ref={fileInputRef}
                  accept="application/pdf"
                  name="cv"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    toast.success("Resume uploaded successfully.");
                  }}
                  type="file"
                  className="hidden"
                />
              </div>
              {file && <p className="text-gray-600 mb-2">Selected resume: {file.name}</p>}
              {error.cv && <p className="text-sm text-red-500">{error.cv}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold tracking-widest"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
