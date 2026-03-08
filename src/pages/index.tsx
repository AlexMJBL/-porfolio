import Contact from "../components/index/contact";
import Presentation from "../components/index/presentation";
import ProjectList from "../components/index/project-list";

export default function Index() {
  return (
    <div className="bg-white">

      {/* SECTION HERO */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background shape */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M30,0 Q100,40 70,100 L100,100 L100,0 Z"
            fill="#1e293b"
          />
        </svg>

        <div className="relative z-10">
          <Presentation />
        </div>

      </div>

      {/* SECTION PROJECTS */}
      <div className="py-24 px-8">
        <ProjectList />
      </div>

       <div className="py-24 px-8">
        <Contact />
      </div>

    </div>
  );
}