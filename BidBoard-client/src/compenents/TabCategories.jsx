import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import axios from "axios";

const TabCategories = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      // console.log(data);
      setJobs(data);
    };
    getData();
  }, []);

  // console.log(job);
  return (
    <Tabs>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-white text-center capitalize lg:text-3xl">
          Browse Jobs by Categories
        </h1>
        <p className="text-center text-gray-500 max-w-2xl mx-auto my-4">
          Three categories available for the time being. They are Web
          Development, Graphic Design and Digital Marketing. Browse them
          Clicking on the tabs below.
        </p>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphic Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4
          "
          >
            {jobs
              .filter((j) => j.category === "Web Development")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4
          "
          >
            {jobs
              .filter((j) => j.category === "Graphics Design")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4
          "
          >
            {jobs
              .filter((j) => j.category === "Digital Marketing")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
