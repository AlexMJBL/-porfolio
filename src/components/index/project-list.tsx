import ProjectCard from "./project-card"
import movieDb from "../../asset/images/moviedb.png"
import weatherGraph from "../../asset/images/weather_graph.png"
import design from "../../asset/images/mjbl_solutions.png"
import mlLearning from "../../asset/images/ml_learning.png"
import gutterMedic from "../../asset/images/GouttiereMedic.png"

const projects = [
    {
      name: "MJBL Solutions",
      demoLink: "https://mjbl-3d.netlify.app/",
      codeLink: "https://github.com/AlexMJBL/3d_design",
      description: "3D Design & Printing",
      screenshotLink: design
    },
    {
      name: "ML Learning",
      demoLink: "https://imageclassifierml.netlify.app/",
      codeLink: "https://github.com/AlexMJBL/Model_Training",
      description: "Image Classification Machine Learning",
      screenshotLink: mlLearning
    },
    {
      name: "Gouttiere Medic",
      demoLink: "https://gouttieremedic.netlify.app/",
      codeLink: "https://github.com/AlexMJBL/gutters-website",
      description: "Business Website",
      screenshotLink: gutterMedic
    },
    {
      name: "Weather Forecast",
      demoLink: "https://weather-graph-mjbl.netlify.app/",
      codeLink: "https://github.com/AlexMJBL/weather-graph",
      description: "Weather consultation chart",
      screenshotLink: weatherGraph
    },
    {
      name: "The Movie Library",
      demoLink: "https://themovielibrarymjbl.netlify.app/",
      codeLink: "https://github.com/AlexMJBL/Movie-Library",
      description: "Movie search engine",
      screenshotLink: movieDb
    }
]
export default function ProjectList() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333333%-1.333333rem)]"
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  )
}