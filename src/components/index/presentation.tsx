import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import ProfilePicture from '../../asset/images/profile_picture.jpeg'

export default function Presentation() {
  return (
    <div className="flex justify-center items-center p-16">
      
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl bg-white rounded-2xl shadow-lg p-8">

        {/* Profile Picture */}
        <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
          <img
            src={ProfilePicture}
            alt="Profile picture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Me */}
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>

          <p className="text-gray-700 mb-3">
            Full-stack developer with a passion for building simple,
            efficient, and modern applications. I enjoy designing
            clean systems that solve real problems.
          </p>

          <p className="text-gray-700 mb-3">
            My work also extends into automation and 3D conception,
            where I combine technical problem-solving with creative
            design to develop practical tools and visual solutions.
          </p>

          <p className="text-gray-700 mb-6">
            Always learning and experimenting with new technologies,
            my goal is to build reliable solutions that improve
            workflows and bring ideas to life.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 text-2xl text-gray-700">

            <a
              href="https://github.com/AlexMJBL"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/alex-b%C3%A9langer-lemay-370b2715a/"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/mjblsolutions"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <FaXTwitter />
            </a>

          </div>

        </div>

      </div>

    </div>
  )
}