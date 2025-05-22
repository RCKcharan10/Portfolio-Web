import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "java",
    "python",
    "cplusplus",
    "html5",
    "css3",
    "javascript",
    "react",
    "git",
    "github",
    "arduino",
    "nodejs",
    "matlab",
    "mysql",
    "vscode",
  ];
  const uniqueSkills = [...skills]; 

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {uniqueSkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {uniqueSkills.map((skill, index) => (
          <Icon key={index + skills.length} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <div className="transition-transform duration-300 transform hover:scale-125 hover:rotate-6">
    <img src={src} className="rounded-sm w-10 h-10" />
  </div>
);