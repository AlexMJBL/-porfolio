import ProjectCard from "./project-card"
import movieDb from "../../asset/images/moviedb.png"
import appForm from  "../../asset/images/app-form.png"

const projects = [
    {
        name: "The Movie Library",
        demoLink: "https://themovielibrarymjbl.netlify.app/",
        codeLink: "https://github.com/AlexMJBL/Movie-Library",
        description: "Movie search engine",
        screenshotLink: movieDb
    },
    {
        name: "Weather Forecast",
        demoLink: "https://demo.com",
        codeLink: "https://github.com",
        description: "Weather consulation chart",
        screenshotLink: appForm
    },
    {
        name: "Application Form",
        demoLink: "https://application-formmjbl.netlify.app/",
        codeLink: "https://github.com/AlexMJBL/react-application-form",
        description: "React Applicaiton Form",
        screenshotLink: appForm
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