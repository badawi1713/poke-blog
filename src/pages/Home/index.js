import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContent, HomeContent, Sidebar } from "../../components";
import { BlogContext } from "../../context";

const Home = () => {
  const [blogs] = useContext(
    BlogContext
  )

  return (
    <>
      <main
        className="flex-1 w-full flex md:flex-nowrap flex-wrap"
      >
        <section className="w-full md:w-4/6 bg-gradient-to-b from-gray-200 md:h-full px-10 pt-24 flex flex-col space-y-4">
          <HeaderContent />
          <section className="flex flex-1 flex-col space-y-4">
            <h1 className="text-xl font-semibold font-mono">Latest Blogs</h1>
            <section className="space-y-4 md:space-y-4">
              <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 flex-wrap space-y-4 md:space-y-0">
                {blogs.map((item, index) => (
                  <HomeContent key={index} item={item} />
                ))}
              </div>
            </section>
            {blogs.length >= 4 && <div className="text-center pb-4">
              <Link
                to="/blogs"
                className={"text-black hover:text-red-600 text-md font-mono"}
              >
                View All
              </Link>
            </div>}
          </section>
        </section>
        <Sidebar />
      </main>

    </>
  );
};

export default Home;
