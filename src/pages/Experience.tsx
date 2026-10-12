import Amentum from "./experience/Amentum"
import Apex from "./experience/Apex"
import CurtissWright from "./experience/CurtissWright"

export default function Experience() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10">
      {/* Page Header */}
      <header className="mb-14">
        <h1 className="text-3xl font-semibold text-white">
          Experience
        </h1>

        <p className="mt-4 leading-8 text-slate-300">
          My professional experience spans software development, engineering systems,
          hardware/software integration, build and release automation, and technical problem
          solving. Much of my work has involved maintaining and extending production systems while
          also designing and building new applications, services, utilities, and internal tools.
        </p>
      </header>

      <nav aria-label="Jump to employer" className="mb-12 flex flex-wrap items-center gap-3">
        <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Jump to</span>
        <a href="#amentum" className="rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-500/60 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">Amentum</a>
        <a href="#apex-turbine" className="rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-500/60 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">APEX Turbine</a>
        <a href="#qualtech" className="rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-500/60 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">QualTech</a>
      </nav>

      <div className="space-y-20">
        {/* AMENTUM */}
        <Amentum />
        {/* APEX TURBINE */}
        <Apex />
        {/* QUALTECH / CURTISS-WRIGHT */}
        <CurtissWright />
      </div>
    </div>
  );
}
