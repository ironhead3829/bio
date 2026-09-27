import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClass = ({ isActive }: { isActive: boolean }) => 
        `transition-colors hover:text-sky-400 ${
            isActive ? "text-sky-400" : "text-slate-300"
        }`;

    return (
        <nav className="w-full border-b border-slate-800 bg-slate-950">
            <div className="flex w-full items-center justify-between px-6 py-4">
                <NavLink
                    to="/"
                    className="text-xl font-semibold tracking-tight text-white"
                >
                    Jason Tunstill
                </NavLink>

                <div className="flex items-center gap-6 text-sm font-medium">
                    <NavLink to="/" end className={linkClass}>Home</NavLink>
                    <NavLink to="/about" className={linkClass}>About</NavLink>
                    <NavLink to="/experience" className={linkClass}>Experience</NavLink>
                    <NavLink to="/projects" className={linkClass}>Projects</NavLink>
                    <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                    {/* TODO -- fix dowload link */}
                    <a
                        href={`${import.meta.env.BASE_URL}Jason_Tunstill_Resume.pdf`}
                        download
                        className="rounded-md border border-sky-500 px-4 py-2 text-sky-400 transition-colors hover:bg-sky-500 hover:text-slate-950"
                    >
                        Resume ↓
                    </a>
                </div>
            </div>
        </nav>
    );
}
