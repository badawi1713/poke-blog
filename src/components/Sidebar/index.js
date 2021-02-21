import React from "react";

const Sidebar = () => {
  return (
    <section className="flex-col flex w-full md:w-2/6 justify-center items-center md:bg-white space-y-4 md:space-y-0 mb-4 md:mb-0">
      <div className="w-36 h-36 md:w-52 md:h-52 lg:w-80 lg:h-80">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url(https://64.media.tumblr.com/02f03c1a168ba59bd5ba82395a27be01/tumblr_oaldzpLZhl1ux1dn3o1_500.gif)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
      <footer>
        <p className="text-xs font-mono">Badawi's Log &copy; 2021</p>
      </footer>
    </section>
  );
};

export default Sidebar;
