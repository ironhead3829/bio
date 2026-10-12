import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";

import BankApp from "./projects/personal/BankApp"
import Biography from "./projects/personal/Biography"
import LocalAI from "./projects/personal/LocalAI"

import UVDTS from "./projects/academic/UVDTS"
import Catan from "./projects/academic/Catan"
import Conway from "./projects/academic/Conway"

const projectHeaderClass =
    "rounded-lg border border-slate-700/70 border-l-4 border-l-sky-400 " +
    "bg-slate-900/70 px-5 py-4 sm:px-6";

const projectClass = "space-y-0 border-b border-slate-800/80 pb-12 last:border-b-0 last:pb-0";

const githubClass =
    "mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-700 " +
    "px-4 py-2 text-sm font-medium text-sky-300 transition-colors " +
    "hover:border-sky-500/60 hover:bg-slate-800 focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-sky-400";

export default function Projects() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-12">
            <h1 className="text-3xl font-semibold text-white">
                Projects
            </h1>

            <p className="mt-4 leading-8 text-slate-300">
                A selection of personal and academic projects spanning web
                development, desktop applications, hardware/software
                integration, embedded systems, and local AI tooling.
            </p>

            <nav aria-label="Project categories" className="mt-8 flex flex-wrap items-center gap-3">
                <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Jump to</span>
                <a href="#personal-projects" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-sky-500/60 hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
                    <FaLaptopCode className="text-sky-400" aria-hidden="true" />
                    Personal Projects
                </a>
                <a href="#academic-projects" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-sky-500/60 hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
                    <FaGraduationCap className="text-sky-400" aria-hidden="true" />
                    Academic Projects
                </a>
            </nav>

            {/* Personal Projects */}
            <div id="personal-projects" className="mt-14 scroll-mt-24">
                <h2 className="flex items-center gap-3 text-2xl font-semibold text-white">
                    <FaLaptopCode className="text-sky-400" aria-hidden="true" />
                    Personal Projects
                </h2>

                <div className="mt-8 space-y-12">
                    {/* BankApp */}
                    <BankApp projectHeaderClass={projectHeaderClass} projectClass={projectClass} githubClass={githubClass} />
                    {/* Biography */}
                    <Biography projectHeaderClass={projectHeaderClass} projectClass={projectClass} githubClass={githubClass} />
                    {/* Local AI */}
                    <LocalAI projectHeaderClass={projectHeaderClass} projectClass={projectClass} />
                </div>
            </div>

            {/* Academic Projects */}
            <div id="academic-projects" className="mt-20 scroll-mt-24 border-t border-slate-800 pt-12">
                <h2 className="flex items-center gap-3 text-2xl font-semibold text-white">
                    <FaGraduationCap className="text-sky-400" aria-hidden="true" />
                    Academic Projects
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                    Selected projects from my Computer Engineering coursework
                    at the University of Alabama in Huntsville.
                </p>

                <div className="mt-8 space-y-12">
                    {/* UVDTS */}
                    <UVDTS projectHeaderClass={projectHeaderClass} projectClass={projectClass} />
                    {/* Catan */}
                    <Catan projectHeaderClass={projectHeaderClass} projectClass={projectClass} />
                    {/* Game of Life */}
                    <Conway projectHeaderClass={projectHeaderClass} projectClass={projectClass} />
                </div>
            </div>
        </section>
    );
}
