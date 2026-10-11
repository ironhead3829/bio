
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const tooltipClass =
        "pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 " +
        "whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-slate-200 " +
        "opacity-0 shadow-lg transition-opacity group-hover:opacity-100 " +
        "group-focus-visible:opacity-100";

    const linkClass =
        "group relative inline-flex items-center justify-center rounded-md p-1 " +
        "text-xl transition-transform duration-200 hover:scale-110 " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400";

    return (
        <footer className="w-full border-t border-slate-800 bg-slate-950">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="font-medium text-slate-300">
                        Jason Tunstill
                    </p>
                    <p>Software Engineer</p>
                </div>

                <div className="flex flex-wrap items-center gap-5">
                    <a
                        href="https://github.com/ironhead3829"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={linkClass}
                    >
                        <FaGithub
                            className="text-slate-200"
                            aria-hidden="true"
                        />
                        <span role="tooltip" className={tooltipClass}>
                            GitHub
                        </span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jasontunstill"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={linkClass}
                    >
                        <FaLinkedin
                            className="text-[#0A66C2]"
                            aria-hidden="true"
                        />
                        <span role="tooltip" className={tooltipClass}>
                            LinkedIn
                        </span>
                    </a>

                    <a
                        href={`${import.meta.env.BASE_URL}Jason_Tunstill_Resume.pdf`}
                        download
                        aria-label="Download Resume"
                        className={linkClass}
                    >
                        <FaFilePdf
                            className="text-[#F87171]"
                            aria-hidden="true"
                        />
                        <span role="tooltip" className={tooltipClass}>
                            Download Resume
                        </span>
                    </a>

                    <span className="text-slate-500">
                        © {currentYear} Jason Tunstill
                    </span>
                </div>
            </div>
        </footer>
    );
}
