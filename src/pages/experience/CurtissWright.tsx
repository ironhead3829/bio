import Badge from "../../components/Badge";
import { FaProjectDiagram } from "react-icons/fa";
import BadgeList from "../../components/BadgeList";
import BulletList from "../../components/BulletList"

export default function CurtissWright() {
    return (
        <>
            <section id="qualtech" className="scroll-mt-24">
            <div className="rounded-xl border border-slate-700/70 border-l-4 border-l-sky-400 bg-slate-900/70 px-5 py-5 shadow-sm shadow-black/10 sm:px-6">
                <div className="mb-3 flex items-center gap-2 text-sky-400">
                <FaProjectDiagram aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest">Professional Experience</span>
                </div>
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white">
                    QualTech NP / Curtiss-Wright
                    </h2>

                    <p className="mt-1 font-medium text-sky-300">
                    Associate Engineer / Project Lead
                    </p>
                </div>

                <p className="text-sm text-slate-300">
                    July 2009 - January 2015 · Huntsville, Alabama
                </p>
                </div>
            </div>

            <div className="mt-6 space-y-10">
                <p className="leading-8 text-slate-300">
                Before moving into full-time software engineering, I worked in
                engineering project execution and qualification testing. This
                role gave me experience with formal engineering requirements,
                test specifications, technical documentation, manufacturing
                processes, and customer deliverables.
                </p>

                <div>
                <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                    Engineering Projects & Qualification Testing
                </h3>

                <BulletList>
                    <li>
                    Developed engineering schedules, project documentation, and
                    customer deliverables.
                    </li>
                    <li>
                    Wrote manufacturing and acceptance procedures.
                    </li>
                    <li>
                    Developed qualification test procedures and analyzed results
                    against specified requirements.
                    </li>
                    <li>
                    Worked with qualification programs involving LOCA, seismic,
                    insulation-resistance, helium-leak, dielectric, and
                    environmental testing, including work governed by IEEE 317.
                    </li>
                    <li>
                    Worked with technicians who performed the physical testing
                    while I developed procedures, analyzed resulting data, and
                    prepared engineering documentation.
                    </li>
                    <li>
                    Coordinated technical work and deliverables as part of
                    project-lead responsibilities.
                    </li>
                </BulletList>
                </div>

                <BadgeList>
                <Badge>Test Engineering</Badge>
                <Badge>IEEE 317</Badge>
                <Badge>Qualification Testing</Badge>
                <Badge>Test Procedures</Badge>
                <Badge>Data Analysis</Badge>
                <Badge>Engineering Documentation</Badge>
                <Badge>Project Management</Badge>
                <Badge>Manufacturing</Badge>
                </BadgeList>
            </div>
            </section>
        </>
    );
}
