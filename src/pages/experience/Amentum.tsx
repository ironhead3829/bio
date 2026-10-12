import Badge from "../../components/Badge";
import { FaCode } from "react-icons/fa";
import BadgeList from "../../components/BadgeList";
import BulletList from "../../components/BulletList"

export default function Amentum() {
    return (
        <>
            <section id="amentum" className="scroll-mt-24">
                <div className="rounded-xl border border-slate-700/70 border-l-4 border-l-sky-400 bg-slate-900/70 px-5 py-5 shadow-sm shadow-black/10 sm:px-6">
                <div className="mb-3 flex items-center gap-2 text-sky-400">
                    <FaCode aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-widest">Professional Experience</span>
                </div>
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white">
                        Amentum
                    </h2>

                    <p className="mt-1 font-medium text-sky-300">
                        Software Engineer
                    </p>
                    </div>

                    <p className="text-sm text-slate-300">
                    March 2026 - Present · Tullahoma, Tennessee
                    </p>
                </div>
                </div>

                <div className="mt-6 space-y-10">
                <p className="leading-8 text-slate-300">
                    I develop and maintain software used in engineering test and data
                    systems, working primarily with LabVIEW and C#. My work includes
                    implementing features, diagnosing defects, executing test plans,
                    and resolving problems discovered during testing. The larger
                    environment includes real-time applications that move data through
                    Kafka and Redis, while much of my work focuses on applications
                    that read and write Redis and T-SQL data and provide control or
                    visualization interfaces.
                </p>

                <div>
                    <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                        LabVIEW & DevExpress Grid Integration
                    </h3>

                    <p className="mt-3 leading-8 text-slate-300">
                        A significant portion of my recent work has involved improving
                        the integration between LabVIEW applications and DevExpress
                        XtraGrid controls implemented through .NET.
                    </p>

                    <BulletList>
                    <li>
                        Reworked a slow grid-update path that converted data between
                        LabVIEW strings and .NET objects through an intermediate
                        DataTable abstraction.
                    </li>
                    <li>
                        Replaced the conversion-heavy design with a simpler 2D string
                        array model, improving continuously updated grids from roughly
                        one update every 1.5 seconds to approximately 10 updates per
                        second.
                    </li>
                    <li>
                        Investigated intermittent DLL loading failures and grids
                        displaying a red-X failure state.
                    </li>
                    <li>
                        Traced the problem to DevExpress UI controls being exposed
                        through a LabVIEW class, allowing operations to execute from
                        arbitrary LabVIEW threads even though the WinForms controls
                        required UI-thread access.
                    </li>
                    <li>
                        Removed the LabVIEW class layer, consolidated the required
                        functionality into the C# DLL, stopped exposing the underlying
                        controls, and used Control.Invoke / BeginInvoke where
                        appropriate to marshal operations to the UI thread.
                    </li>
                    <li>
                        Previous red-X and related failures have not reappeared during
                        subsequent testing.
                    </li>
                    </BulletList>
                </div>

                <div>
                    <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                        Application Development & Maintenance
                    </h3>

                    <p className="mt-3 leading-8 text-slate-300">
                        I work within an established suite of engineering applications,
                        implementing new behavior while preserving existing workflows.
                    </p>

                    <BulletList>
                    <li>
                        Extended an existing mode-selection application to support
                        multiple launch configurations through a selection dialog
                        while preserving the behavior of its other modes.
                    </li>
                    <li>
                        Corrected grid row-deletion behavior and inconsistent
                        persistence of column values between manual saves, view
                        changes, and application exit.
                    </li>
                    <li>
                        Work within existing LabVIEW architectures including the JKI
                        State Machine and producer/consumer patterns, with some
                        exposure to DQMH.
                    </li>
                    </BulletList>
                </div>

                <div>
                    <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                        LabVIEW UI & Asynchronous Behavior
                    </h3>

                    <BulletList>
                    <li>
                        Built a consumer loop driven by a notifier to provide a more
                        visible alert state for a UI control.
                    </li>
                    <li>
                        Alternated the button background and text appearance at
                        500 ms intervals rather than relying on LabVIEW&apos;s
                        less-visible built-in blinking behavior.
                    </li>
                    <li>
                        Participate in peer review and merge-request feedback for
                        application changes.
                    </li>
                    </BulletList>
                </div>

                <div>
                    <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                        AI-Assisted Development
                    </h3>

                    <p className="mt-3 leading-8 text-slate-300">
                        I use company-approved AI development tools, including GitHub Copilot
                        and OpenCode, as part of my C# and LabVIEW development workflow.
                        LabVIEW&apos;s binary source format limits direct code analysis, so I
                        also use screenshots of block diagrams when working with AI-assisted
                        tools.
                    </p>

                    <BulletList>
                    <li>
                        Use AI assistance with C# development for code investigation,
                        implementation ideas, debugging, and review.
                    </li>
                    <li>
                        Use LabVIEW block-diagram screenshots to help understand unfamiliar
                        logic, investigate defects, identify potential design or concurrency
                        issues, and explore restructuring options.
                    </li>
                    <li>
                        Compare completed block diagrams against previously discussed logic
                        to help review whether an implementation matches the intended
                        behavior.
                    </li>
                    </BulletList>
                </div>

                <BadgeList>
                    <Badge>LabVIEW</Badge>
                    <Badge>C#</Badge>
                    <Badge>.NET</Badge>
                    <Badge>DevExpress XtraGrid</Badge>
                    <Badge>Redis</Badge>
                    <Badge>T-SQL</Badge>
                    <Badge>JKI State Machine</Badge>
                </BadgeList>
                </div>
            </section>
        </>
    )
}
