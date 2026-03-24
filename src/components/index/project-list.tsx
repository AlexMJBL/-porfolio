import ProjectCard from "./project-card"
import movieDb from "../../asset/images/moviedb.png"
import weatherGraph from "../../asset/images/weather__graph.png"
import design from "../../asset/images/mjbl_solutions.png"

const projects = [
    {
    name: "MJBL Solutions",
    demoLink: "https://mjbl-3d.netlify.app/",
    codeLink: "https://github.com/AlexMJBL/3d_design",
    description: "3D Design & Printing",
    screenshotLink: design
  },
    {
        name: "The Movie Library",
        demoLink: "https://themovielibrarymjbl.netlify.app/",
        codeLink: "https://github.com/AlexMJBL/Movie-Library",
        description: "Movie search engine",
        screenshotLink: movieDb
    },
    {
        name: "Weather Forecast",
        demoLink: "https://weather-graph-mjbl.netlify.app/",
        codeLink: "https://github.com/AlexMJBL/weather-graph",
        description: "Weather consulation chart",
        screenshotLink: weatherGraph
    }
]
export default function ProjectList() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  )
}