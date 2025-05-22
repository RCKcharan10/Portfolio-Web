import { useState, useEffect } from "react";

const sections = [
  { name: "Home", id: "home", external: false },
  { name: "About", id: "about", external: false },
  { name: "Projects", id: "projects", external: false },
  { name: "Work", id: "experience", external: false },
  { name: "Contact", id: "contact", external: false },
];

const PillPaginationNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active pill on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let currentIndex = 0;
      sections.forEach((section, i) => {
        if (!section.external) {
          const el = document.getElementById(section.id);
          if (el && el.offsetTop <= scrollPos) currentIndex = i;
        }
      });
      setActiveIndex(currentIndex);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (index) => {
    const section = sections[index];
    setActiveIndex(index);
    if (section.external) {
      window.location.href = section.url;
    } else {
      const el = document.getElementById(section.id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2  z-[9999] bg-primary/80 backdrop-blur-md rounded-full px-4 py-2 shadow-lg"
      style={{ maxWidth: "fit-content" }}
    >
      <ul className="flex space-x-4">
        {sections.map((section, i) => (
          <li key={section.name}>
            <button
              onClick={() => handleClick(i)}
              className={`px-4 py-1 rounded-full font-semibold transition-colors whitespace-nowrap ${
                i === activeIndex
                  ? "bg-white text-primary"
                  : "text-white hover:bg-white hover:text-primary"
              }`}
            >
              {section.name}
            </button>
          </li>
        ))}
      </ul>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "12px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 100%)",
          borderBottomLeftRadius: "9999px",
          borderBottomRightRadius: "9999px",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default PillPaginationNavbar;
