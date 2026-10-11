import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaLayerGroup, FaWrench } from "react-icons/fa";



export default function Home() {
    const resumeUrl = `${import.meta.env.BASE_URL}Jason_Tunstill_Resume.pdf`;
    return (
        <div className="relative isolate overflow-hidden">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_5%,rgba(14,165,233,0.14),transparent_45%),radial-gradient(ellipse_at_5%_75%,rgba(59,130,246,0.09),transparent_45%)]" />
            <Hero />
            <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 md:pb-28 md:pt-14">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.85fr)] lg:gap-16">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-sky-400" />
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">Introduction</span>
                        </div>
                        <div className="space-y-5 text-base leading-8 text-slate-300 md:text-lg md:leading-9">
                            <p>
                                I'm Jason Tunstill, a software engineer with more than 11 years of experience building and supporting
                                production software across desktop, backend, web, and engineering systems. My primary background is in C++,
                                Python, Qt, and Ruby on Rails, with experience spanning cross-platform applications, real-time data acquisition,
                                REST APIs, hardware integration, CI/CD, and system design and integration.
                            </p>
                            <p>
                                I enjoy solving complex technical problems, modernizing legacy systems, and building software that is reliable
                                and maintainable. I'm also expanding my frontend experience with React and modern JavaScript—including building
                                this website as a React application.
                            </p>
                            <p>
                                Please feel free to explore this site to learn more about my experience, projects, and technical background.
                            </p>
                        </div>
                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link to="/experience" className="inline-flex items-center gap-3 rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/15 transition hover:-translate-y-0.5 hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400">
                                Explore Experience <FaArrowRight aria-hidden="true" />
                            </Link>
                            <Link to="/projects" className="inline-flex items-center gap-3 rounded-lg border border-slate-600 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-500 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400">
                                View Projects <FaArrowRight aria-hidden="true" />
                            </Link>
                            <a
                                href={resumeUrl}
                                download
                                className="inline-flex items-center gap-3 rounded-lg border border-slate-600 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-500 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                            >
                                Download Resume ↓
                            </a>
                        </div>
                    </div>
                    <aside className="self-start rounded-2xl border border-slate-700/70 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm md:p-7">
                        <div className="mb-6 flex items-center justify-between border-b border-slate-700/70 pb-4">
                            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">Explore the site</h2>
                            <span className="flex gap-1.5" aria-hidden="true"><i className="h-2 w-2 rounded-full bg-sky-400" /><i className="h-2 w-2 rounded-full bg-slate-600" /><i className="h-2 w-2 rounded-full bg-slate-600" /></span>
                        </div>
                        <div className="space-y-3">
                            <Link to="/experience" className="group flex items-start gap-4 rounded-xl border border-slate-700/60 bg-slate-950/60 p-4 transition hover:border-sky-500/60 hover:bg-slate-800/80">
                                <FaLayerGroup className="mt-1 shrink-0 text-sky-400" aria-hidden="true" />
                                <span><strong className="block text-sm text-white">Experience</strong><span className="mt-1 block text-sm leading-6 text-slate-400">Professional work and engineering systems</span></span>
                            </Link>
                            <Link to="/projects" className="group flex items-start gap-4 rounded-xl border border-slate-700/60 bg-slate-950/60 p-4 transition hover:border-sky-500/60 hover:bg-slate-800/80">
                                <FaCode className="mt-1 shrink-0 text-sky-400" aria-hidden="true" />
                                <span><strong className="block text-sm text-white">Projects</strong><span className="mt-1 block text-sm leading-6 text-slate-400">Personal and academic development</span></span>
                            </Link>
                            <Link to="/about" className="group flex items-start gap-4 rounded-xl border border-slate-700/60 bg-slate-950/60 p-4 transition hover:border-sky-500/60 hover:bg-slate-800/80">
                                <FaWrench className="mt-1 shrink-0 text-sky-400" aria-hidden="true" />
                                <span><strong className="block text-sm text-white">About</strong><span className="mt-1 block text-sm leading-6 text-slate-400">Background and approach to development</span></span>
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}
