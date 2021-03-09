import React from "react";
import { Sidebar } from "../../components";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const About = () => {
  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      let imgWidth = 208;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <main
        id="divToPrint"
        className="flex-1 w-full flex md:flex-nowrap flex-wrap"
      >
        <section className="w-full md:w-4/6 bg-gradient-to-b from-gray-200 md:h-full px-10 pt-24 flex flex-col space-y-4"></section>
        <Sidebar />
      </main>
      <button
        className="absolute bottom-4 right-4 p-2 flex justify-center rounded-lg shadow-lg"
        onClick={printDocument}
      >
        Print
      </button>
    </>
  );
};

export default About;
