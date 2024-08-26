import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1A8D91] p-5 text-white rounded-tl-[50px] rounded-tr-[50px]">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex gap-5">
          <a href="#" className="hover:underline">
            Rezept einlösen
          </a>
          <a href="#" className="hover:underline">
            Live Bestand
          </a>
          <a href="#" className="hover:underline">
            Videosprechstunden
          </a>
          <a href="#" className="hover:underline">
            FAQs
          </a>
          <a href="#" className="hover:underline">
            Kontakt
          </a>
        </div>
        <div className="flex gap-10 mt-5 md:mt-0">
          <div className="flex flex-col">
            <p>Bergstraße 59 - 57</p>
            <p>69469 Weinheim</p>
            <p>(Globus Quartier)</p>
          </div>
          <div className="flex flex-col">
            <p>02234545230</p>
          </div>
          <div className="flex flex-col">
            <p>Mo-Fr: 09:00 - 18:00 Uhr</p>
            <p>Sa: 09:00 - 16:00 Uhr</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
