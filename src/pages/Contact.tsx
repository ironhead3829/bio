import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaFilePdf,
} from "react-icons/fa";

const iconClass = "h-7 w-7 shrink-0 transition-transform group-hover:scale-110";

const linkClass =
  "group flex items-center gap-4 rounded-lg border border-slate-800 " +
  "bg-slate-900/50 px-4 py-3 transition-colors duration-200 " +
  "hover:border-slate-600 hover:bg-slate-800/70 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400";

const iconBoxClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg " +
  "bg-slate-800/80 text-xl transition-transform duration-200 " +
  "group-hover:scale-110";

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10">
      <header>
        <h1 className="text-3xl font-semibold text-white">Contact</h1>
        <p className="mt-4 w-full leading-7 text-slate-400">
          Thanks for taking the time to learn more about my background and
          experience. If you would like to discuss a software engineering
          opportunity or have a question about my work, feel free to get in
          touch.
        </p>
      </header>

      <section className="mt-10 w-full" aria-labelledby="contact-links-heading">
        <h2 id="contact-links-heading" className="text-xl font-semibold text-white">
          Get in Touch
        </h2>
        <div className="mt-6 space-y-3">
          <a href="mailto:tunstij@gmail.com" className={linkClass}>
            <span className={iconBoxClass}>
              <FaEnvelope className={`${iconClass} text-[#C9D1D9]`} />
            </span>
            <span className="min-w-0">
              <span className="block font-medium text-slate-200">Email</span>
              <span className="mt-0.5 block break-all text-sm text-slate-400">
                tunstij@gmail.com
              </span>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/jasontunstill"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <span className={iconBoxClass}>
              <FaLinkedin className={`${iconClass} text-[#0A66C2]`} />
            </span>
            <span className="min-w-0">
              <span className="block font-medium text-slate-200">LinkedIn</span>
              <span className="mt-0.5 block break-all text-sm text-slate-400">
                linkedin.com/in/jasontunstill
              </span>
            </span>
          </a>

          <a
            href="https://github.com/ironhead3829"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <span className={iconBoxClass}>
              <FaGithub className={`${iconClass} text-[#C9D1D9]`} />
            </span>
            <span className="min-w-0">
              <span className="block font-medium text-slate-200">GitHub</span>
              <span className="mt-0.5 block break-all text-sm text-slate-400">
                github.com/ironhead3829
              </span>
            </span>
          </a>

          <a
            href={`${import.meta.env.BASE_URL}Jason_Tunstill_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <span className={iconBoxClass}>
              <FaFilePdf className={`${iconClass} text-[#F87171]`} />
            </span>
            <span className="min-w-0">
              <span className="block font-medium text-slate-200">Resume</span>
              <span className="mt-0.5 block text-sm text-slate-400">
                View my current resume
              </span>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
