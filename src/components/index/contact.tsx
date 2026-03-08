import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import MjblLogo from "../../asset/images/logo_fond_blanc.png"

export default function Contact() {
  return (
    <div className="bg-slate-200 border-8 border-[#1e293b] rounded-xl p-10 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Contact Info */}
        <div className="space-y-4">

          <h3 className="text-3xl font-semibold text-[#1e293b]">
            Contact Me
          </h3>

          <p className="text-gray-700">
            I’m always open to discussing new opportunities, collaborations,
            or interesting projects. If you think we could work together,
            feel free to reach out — I’d be happy to connect.
          </p>

          <p className="text-gray-800 font-medium">
            Quebec, QC, Canada
          </p>

          <p className="text-gray-800">
            236-457-4318
          </p>

          <p className="text-gray-800">
            MJBLsolutions@gmail.com
          </p>

          {/* Socials */}
          <div className="flex gap-6 text-2xl text-[#1e293b] pt-2">

            <a
              href="https://github.com/AlexMJBL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/alex-b%C3%A9langer-lemay-370b2715a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/mjblsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <FaXTwitter />
            </a>

          </div>

        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={MjblLogo}
            alt="Logo MJBL Solutions"
            className="h-[160%] max-h-[220px] object-contain"
          />
        </div>

      </div>

    </div>
  )
}