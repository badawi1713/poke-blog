import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components";
import { Tooltip } from "@material-ui/core";
const Home = () => {
  return (
    <main className="flex-1 w-full flex md:flex-nowrap flex-wrap">
      <section className="w-full md:w-4/6 bg-gradient-to-b from-gray-200 md:h-full px-10 pt-24 flex flex-col space-y-4">
        <section className="flex space-y-4 md:space-y-0 md:space-x-4 items-stretch flex-wrap md:flex-nowrap">
          <div className="rounded-md bg-white shadow-md w-full md:w-2/6 h-28 flex p-2 flex-col space-y-2">
            <p className="font-mono text-sm">Current Playing</p>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-200"></div>
            </div>
          </div>
          <div className="rounded-md bg-white shadow-md w-full md:w-4/6 h-28 flex p-2 space-y-2 flex-wrap">
            <div className="flex justify-between w-full">
              <p className="font-mono text-sm">Current Team</p>
              <p className="font-mono text-sm">
                {moment().format("DD/MM/YYYY")}
              </p>
            </div>
            <div className="flex w-full justify-between">
              <Tooltip arrow title="Sobble">
                <div className=" w-14 h-14 md:w-16 md:h-16">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "url(https://www.serebii.net/swordshield/pokemon/816.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </Tooltip>
              <Tooltip arrow title="Unknown">
                <div className=" w-14 h-14 md:w-16 md:h-16">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </Tooltip>
              <Tooltip arrow title="Unknown">
                <div className=" w-14 h-14 md:w-16 md:h-16">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </Tooltip>
              <Tooltip arrow title="Unknown">
                <div className=" w-14 h-14 md:w-16 md:h-16">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </Tooltip>
              <Tooltip arrow title="Unknown">
                <div className=" w-14 h-14 md:w-16 md:h-16">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </Tooltip>
              <Tooltip arrow title="Unknown">
                <div className=" w-14 h-14 md:w-16 md:h-16">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          </div>
        </section>
        <section className="flex flex-1 flex-col space-y-4">
          <h1 className="text-xl font-semibold font-mono">Latest Blogs</h1>
          <section className="space-y-4 md:space-y-4">
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 flex-wrap space-y-4 md:space-y-0">
              <div className="rounded-md bg-white shadow-md w-full h-28 flex justify-between items-center p-2 space-x-2">
                <div className="w-3/4 h-full flex flex-col justify-between">
                  <div className="flex flex-col">
                    <p className="font-mono text-md font-semibold text-red-600">
                      Title's
                    </p>
                    <p className="font-mono text-sm">
                      Description about blog's post that I made before...
                    </p>
                  </div>
                  <p className="font-mono text-xs text-gray-400">
                    {moment().format("DD/MM/YYYY HH:mm")}
                  </p>
                </div>
                <div className="w-1/4 h-full flex justify-end items-center">
                  <div className="w-20 h-20 bg-gray-200" />
                </div>
              </div>
              <div className="rounded-md bg-white shadow-md w-full h-28 flex justify-between items-center p-2 space-x-2">
                <div className="w-3/4 h-full flex flex-col justify-between">
                  <div className="flex flex-col">
                    <p className="font-mono text-md font-semibold text-red-600">
                      Title's
                    </p>
                    <p className="font-mono text-sm">
                      Description about blog's post that I made before...
                    </p>
                  </div>
                  <p className="font-mono text-xs text-gray-400">
                    {moment().format("DD/MM/YYYY HH:mm")}
                  </p>
                </div>
                <div className="w-1/4 h-full flex justify-end items-center">
                  <div className="w-20 h-20 bg-gray-200" />
                </div>
              </div>
              <div className="rounded-md bg-white shadow-md w-full h-28 flex justify-between items-center p-2 space-x-2">
                <div className="w-3/4 h-full flex flex-col justify-between">
                  <div className="flex flex-col">
                    <p className="font-mono text-md font-semibold text-red-600">
                      Title's
                    </p>
                    <p className="font-mono text-sm">
                      Description about blog's post that I made before...
                    </p>
                  </div>
                  <p className="font-mono text-xs text-gray-400">
                    {moment().format("DD/MM/YYYY HH:mm")}
                  </p>
                </div>
                <div className="w-1/4 h-full flex justify-end items-center">
                  <div className="w-20 h-20 bg-gray-200" />
                </div>
              </div>
              <div className="rounded-md bg-white shadow-md w-full h-28 flex justify-between items-center p-2 space-x-2">
                <div className="w-3/4 h-full flex flex-col justify-between">
                  <div className="flex flex-col">
                    <p className="font-mono text-md font-semibold text-red-600">
                      Title's
                    </p>
                    <p className="font-mono text-sm">
                      Description about blog's post that I made before...
                    </p>
                  </div>
                  <p className="font-mono text-xs text-gray-400">
                    {moment().format("DD/MM/YYYY HH:mm")}
                  </p>
                </div>
                <div className="w-1/4 h-full flex justify-end items-center">
                  <div className="w-20 h-20 bg-gray-200" />
                </div>
              </div>
            </div>
          </section>
          <div className="text-center">
            <Link
              to="/blogs"
              className={"text-black hover:text-red-600 text-md font-mono"}
            >
              View All
            </Link>
          </div>
        </section>
      </section>
      <Sidebar />
    </main>
  );
};

export default Home;
