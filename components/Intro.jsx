import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import JobsCard from "./JobsCard";
import { motion } from "framer-motion";
import { FiTwitter } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import styles from "../styles/Homepage.module.css";

export default function Intro() {
  const [search, setSearch] = useState("");
  const jobData = useSelector((state) => state.Job.JobData);
  const [filterJobs, setFilteredJobs] = useState([]);
  const [doneSearch, setDoneSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredJobs = jobData?.filter((job) => {
      let x = job?.job_category;
      return x?.toUpperCase() === search?.toUpperCase().trim();
    });
    setFilteredJobs(filteredJobs);
    setDoneSearch(true);
  };

  const onTagClick = (tag) => {
    setSearch(tag);
    const filteredJobs = jobData?.filter((job) => {
      let x = job?.job_category;
      return x?.toUpperCase() === tag.toUpperCase();
    });
    setFilteredJobs(filteredJobs);
    setDoneSearch(true);
  };

  const clearSearch = () => {
    setSearch("");
    setFilteredJobs([]);
    setDoneSearch(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.leftSection}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.motionDiv}
          >
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.title}
            >
              Find Your Perfect Job with{" "}
              <span className={styles.highlight}>JobSewa</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={styles.description}
            >
              Connecting thousands of job seekers with their dream careers
              daily.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={styles.searchContainer}
            >
              <div className={styles.inputContainer}>
                <BiSearchAlt className={styles.searchIcon} />
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                  value={search}
                  type="text"
                  placeholder="Search job categories (e.g., electrician)"
                  className={styles.input}
                />
                {search && (
                  <RxCross2
                    onClick={clearSearch}
                    className={styles.clearIcon}
                  />
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSearch}
                className={styles.searchButton}
              >
                Search
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={styles.tagsContainer}
            >
              <span className={styles.tagsTitle}>Popular Tags:</span>
              {["Electrician", "Labourer", "Driver", "Plumber"].map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.tag}
                  onClick={() => onTagClick(tag)}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.rightSection}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/hero-image-2.png"
              alt="Hero Image"
              className={styles.heroImage}
            />
          </motion.div>
        </div>
      </div>

      {doneSearch && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.resultsContainer}
        >
          <div className={styles.resultsInner}>
            <h2 className={styles.resultsTitle}>Search Results</h2>
            <div className={styles.jobsGrid}>
              {Array.isArray(filterJobs) && filterJobs.length > 0 ? (
                filterJobs.map((job) => (
                  <motion.div
                    key={job?._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <JobsCard job={job} />
                  </motion.div>
                ))
              ) : (
                <p className={styles.noJobsMessage}>
                  Sorry, no jobs found in this category at the moment.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h3>JobSewa</h3>
            <img
              src="/Jobsewa_logo.png"
              alt="JobSewa Logo"
              className={styles.logo}
            />
          </div>

          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul className={styles.quickLinks}>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Connect with Us</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://twitter.com"
                target="_blank"
                className={styles.iconLink}
              >
                <FiTwitter size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className={styles.iconLink}
              >
                <GrLinkedin size={22} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className={styles.iconLink}
              >
                <BsFacebook size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomFooter}>
          <p>&copy; {new Date().getFullYear()} JobSewa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
