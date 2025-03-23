"use client"

import { useEffect, useState } from "react";


export const Header = () => {
  const sections = ['home', 'projects', 'about', 'contact'];

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = sections[0];
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Calculate the distance from the element's center to the viewport's center
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const distance = Math.abs(elementCenter - viewportCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      }

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50, // Adjust for fixed header
        behavior: "smooth",
      });
    }
  };


  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => handleNavClick(e, section)}
            className={`nav-item capitalize ${
              activeSection === section
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
          >
            {section}
          </a>
        ))}
      </nav>
    </div>
  );
};
