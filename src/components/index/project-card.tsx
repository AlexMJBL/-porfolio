import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from "react-icons/fi"

type Project = {
  name: string
  demoLink: string
  codeLink: string
  description: string
  screenshotLink: string
}

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={project.screenshotLink}
          alt={project.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">{project.name}</h3>

          <div className="flex gap-3 text-xl">
            <a
              href={project.codeLink}
              target="_blank"
              className="hover:text-gray-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href={project.demoLink}
              target="_blank"
              className="hover:text-gray-600 transition"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-600">
          {project.description}
        </p>

      </div>
    </div>
  )
}