import React from "react";
const Home = () => {
  return (
    <main className="flex-1 w-full flex">
      <div
        className="hidden md:block md:w-4/6 h-full"
        style={{
          backgroundImage:
            "url(https://64.media.tumblr.com/02f03c1a168ba59bd5ba82395a27be01/tumblr_oaldzpLZhl1ux1dn3o1_500.gif)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="w-full md:w-2/6 bg-blue-100 h-full p-10">Test</div>
    </main>
  );
};

export default Home;
