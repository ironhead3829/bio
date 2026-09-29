import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const tooltipClass =
        "pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 " +
        "whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-slate-200 " +
        "opacity-0 shadow-lg transition-opacity group-hover:opacity-100 " +
        "group-focus-visible:opacity-100";
    const linkClass = "group relative inline-flex text-xl transition-colors hover:text-sky-400"

    return (
        <>
            <footer className="w-full border-t border-slate-800 bg-slate-950">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="font-medium text-slate-300">Jason Tunstill</p>
                        <p>Software Engineer</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-5">
                        <a
                            href="https://github.com/ironhead3829"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github"
                            className={linkClass}
                        >
                            <div className="text-purple-400 transition group-hover:text-purple-300">
                                <FaGithub />
                            </div>
                            <span role="tooltip" className={tooltipClass}>GitHub</span>
                        </a>
                        <a
                            href="www.linkedin.com/in/jasontunstill"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClass}
                        >
                            <div className="text-blue-500 transition group-hover:text-blue-400">
                                <FaLinkedin />
                            </div>
                            <span role="tooltip" className={tooltipClass}>LinkedIn</span>                        
                        </a>
                        <a
                            href={`${import.meta.env.BASE_URL}Jason_Tunstill_Resume.pdf`}
                            download
                            className={linkClass}
                        >
                            <div className="text-red-400 transition group-hover:text-red-300">
                                <HiOutlineDocumentArrowDown />
                            </div>
                            <span role="tooltip" className={tooltipClass}>Download Resume</span>                        
                        </a>

                        <span className="text-slate-500">
                            © {currentYear} Jason Tunstill
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}
