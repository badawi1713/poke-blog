import React from "react";
import { Sidebar } from "../../components";
const About = () => {
  return (
    <main className="flex-1 w-full flex md:flex-nowrap flex-wrap">
      <section className="w-full md:w-4/6 bg-gradient-to-b from-gray-200 md:h-full px-10 pt-24 flex flex-col space-y-4"></section>
      <Sidebar />
    </main>
  );
};

export default About;
