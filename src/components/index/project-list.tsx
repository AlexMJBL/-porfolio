import ProjectCard from "./project-card"

const projects = [
    {
        name: "The Movie Library",
        demoLink: "https://themovielibrarymjbl.netlify.app/",
        codeLink: "https://github.com/AlexMJBL/Movie-Library",
        description: "Movie search engine",
        screenshotLink: "https://images.pexels.com/photos/268976/pexels-photo-268976.jpeg?_gl=1*121s8dw*_ga*NTcxNjgxMjI5LjE3NzI5OTMzOTY.*_ga_8JE65Q40S6*czE3NzI5OTMzOTUkbzEkZzEkdDE3NzI5OTM0NzYkajM5JGwwJGgw"
    },
    {
        name: "Weather Forecast",
        demoLink: "https://demo.com",
        codeLink: "https://github.com",
        description: "Weather consulation chart",
        screenshotLink: "https://images.pexels.com/photos/268976/pexels-photo-268976.jpeg?_gl=1*121s8dw*_ga*NTcxNjgxMjI5LjE3NzI5OTMzOTY.*_ga_8JE65Q40S6*czE3NzI5OTMzOTUkbzEkZzEkdDE3NzI5OTM0NzYkajM5JGwwJGgw"
    },
    {
        name: "Application Form",
        demoLink: "https://application-formmjbl.netlify.app/",
        codeLink: "https://github.com/AlexMJBL/react-application-form",
        description: "React Applicaiton Form",
        screenshotLink: "https://images.pexels.com/photos/268976/pexels-photo-268976.jpeg?_gl=1*121s8dw*_ga*NTcxNjgxMjI5LjE3NzI5OTMzOTY.*_ga_8JE65Q40S6*czE3NzI5OTMzOTUkbzEkZzEkdDE3NzI5OTM0NzYkajM5JGwwJGgw"
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