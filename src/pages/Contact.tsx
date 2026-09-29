import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10">
      {/* Page Header */}
      <header>
        <h1 className="text-3xl font-semibold text-white">
          Contact
        </h1>

        <p className="mt-4 max-w-3xl leading-7 text-slate-400">
          Thanks for taking the time to learn more about my background and
          experience. If you would like to discuss a software engineering
          opportunity or have a question about my work, feel free to get in
          touch.
        </p>
      </header>

      {/* Contact Links */}
      <section className="mt-10 max-w-2xl">
        <h2 className="text-xl font-semibold text-white">
          Get in Touch
        </h2>

        <div className="mt-6 space-y-4">
          {/* Email */}
          <a
            href="mailto:tunstij@gmail.com"
            className="group flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition hover:border-slate-700 hover:bg-slate-900"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-800 text-slate-300 transition group-hover:text-white">
              <FaEnvelope />
            </div>

            <div>
              <div className="font-medium text-slate-200">
                Email
              </div>

              <div className="mt-1 text-sm text-slate-400">
                tunstij@gmail.com
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jasontunstill"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition hover:border-slate-700 hover:bg-slate-900"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-800 text-blue-500 transition group-hover:text-blue-400">
              <FaLinkedin />
            </div>

            <div>
              <div className="font-medium text-slate-200">
                LinkedIn
              </div>

              <div className="mt-1 text-sm text-slate-400">
                linkedin.com/in/jasontunstill
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ironhead3829"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition hover:border-slate-700 hover:bg-slate-900"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-800 text-purple-400 transition group-hover:text-purple-300">
              <FaGithub />
            </div>

            <div>
              <div className="font-medium text-slate-200">
                GitHub
              </div>

              <div className="mt-1 text-sm text-slate-400">
                github.com/ironhead3829
              </div>
            </div>
          </a>

          {/* Resume */}
          <a
            href={`${import.meta.env.BASE_URL}Jason_Tunstill_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition hover:border-slate-700 hover:bg-slate-900"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-800 text-red-400 transition group-hover:text-red-300">
              <FaFilePdf />
            </div>

            <div>
              <div className="font-medium text-slate-200">
                Résumé
              </div>

              <div className="mt-1 text-sm text-slate-400">
                View my current résumé
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
