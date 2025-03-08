import React from "react";
import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";
import styles from "../../styles/Homepage.module.css";
import NgoCard from "@/components/NgoCard";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { SeedData } from "@/Utils/NgoData";

export default function Organizations() {
  const [search, setSearch] = useState("");
  const [filteredOrgs, setFilteredOrgs] = useState(SeedData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    if (searchTerm === "") {
      setFilteredOrgs(SeedData);
    } else {
      const filtered = SeedData.filter(
        (org) =>
          org.name.toLowerCase().includes(searchTerm) ||
          org.location.toLowerCase().includes(searchTerm) ||
          org.type.toLowerCase().includes(searchTerm)
      );
      setFilteredOrgs(filtered);
    }
  };

  return (
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
            Partner Organizations
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
              onChange={handleSearch}
              placeholder="Search by name, location, or type..."
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
            {filteredOrgs.length > 0 ? (
              filteredOrgs.map((org, index) => (
                <motion.div
                  key={index}
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
                  <NgoCard data={org} />
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={styles.noJobsMessage}
              >
                No organizations found matching your search criteria.
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
