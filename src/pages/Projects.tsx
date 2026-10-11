import { FaGithub, FaLaptopCode, FaGraduationCap, FaMicrochip } from "react-icons/fa";
import Badge from "../components/Badge";
import BadgeList from "../components/BadgeList";
import BulletList from "../components/BulletList";

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
                    <article className={projectClass}>
                        <div className={projectHeaderClass}>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <h3 className="text-xl font-semibold text-white">
                                BankApp
                            </h3>

                            <span className="self-start rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                                Personal Project · In Redesign
                            </span>
                        </div>
                        </div>

                        <p className="mt-5 leading-8 text-slate-300">
                            A personal finance application built around the
                            simplicity of a traditional checkbook register. I
                            started BankApp because existing financial
                            applications either included far more functionality
                            than I wanted or lacked features important to me,
                            particularly statement reconciliation.
                        </p>

                        <p className="mt-4 leading-8 text-slate-300">
                            The original application is a Ruby on Rails
                            application using server-rendered ERB views. It
                            supports multiple financial institutions and
                            accounts, transaction management, running balances,
                            filtering, searching, and pagination.
                        </p>

                        <BulletList>
                            <li>
                                Built user-scoped financial institutions,
                                accounts, transactions, payees, and categories
                                with PostgreSQL persistence.
                            </li>
                            <li>
                                Implemented a checkbook-style transaction
                                register with dynamically calculated account and
                                running balances.
                            </li>
                            <li>
                                Added transaction filtering and searching by
                                payee, category, date range, transaction type,
                                cleared status, amount, and general text.
                            </li>
                            <li>
                                Created JavaScript-assisted fields that allow a
                                user to select an existing payee, category, or
                                financial institution or create one without
                                leaving the current workflow.
                            </li>
                            <li>
                                Used Devise for authentication and scoped
                                financial data to the authenticated user.
                            </li>
                        </BulletList>

                        <p className="mt-5 leading-8 text-slate-300">
                            I am currently redesigning the application around a
                            Rails API with a React/TypeScript frontend. The
                            planned architecture will make interactive
                            workflows easier to implement while providing a
                            foundation for statement reconciliation, account
                            transfers, and additional financial features.
                        </p>

                        <BadgeList>
                            <Badge>Ruby on Rails</Badge>
                            <Badge>ERB</Badge>
                            <Badge>PostgreSQL</Badge>
                            <Badge>Bootstrap</Badge>
                            <Badge>Devise</Badge>
                            <Badge>JavaScript</Badge>
                        </BadgeList>

                        <a
                            href="https://github.com/ironhead3829/BankApp"
                            target="_blank"
                            rel="noreferrer"
                            className={githubClass}
                        >
                            <FaGithub aria-hidden="true" />
                            View on GitHub →
                        </a>
                    </article>

                    {/* Biography */}
                    <article className={projectClass}>
                        <div className={projectHeaderClass}>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <h3 className="text-xl font-semibold text-white">
                                Professional Biography & Portfolio
                            </h3>

                            <span className="self-start rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                                Personal Project · Current
                            </span>
                        </div>
                        </div>

                        <p className="mt-5 leading-8 text-slate-300">
                            This website serves both as a professional portfolio
                            and as my first practical React application. I began
                            the project after only limited introductory exposure
                            to React, using it as an opportunity to learn the
                            framework while building something useful.
                        </p>

                        <BulletList>
                            <li>
                                Built the site with React and TypeScript using
                                Vite as the development and build environment.
                            </li>
                            <li>
                                Created reusable components and page routing
                                with React Router.
                            </li>
                            <li>
                                Used Tailwind CSS to build the responsive
                                interface while learning utility-first styling.
                            </li>
                            <li>
                                Gained practical experience with React state and
                                lifecycle behavior using hooks including
                                <code className="mx-1 text-slate-300">
                                    useState
                                </code>
                                and
                                <code className="ml-1 text-slate-300">
                                    useEffect
                                </code>
                                .
                            </li>
                            <li>
                                Created and troubleshot a GitHub Actions
                                workflow for automated deployment to GitHub
                                Pages, including updating action dependencies
                                for compatibility with the current Node.js
                                runtime.
                            </li>
                        </BulletList>

                        <p className="mt-5 leading-8 text-slate-300">
                            AI tools have been part of the development workflow
                            for design ideas, troubleshooting, code review, and
                            refinement. I write and evaluate the implementation
                            myself and verify suggestions rather than treating
                            AI output as authoritative.
                        </p>

                        <BadgeList>
                            <Badge>React</Badge>
                            <Badge>TypeScript</Badge>
                            <Badge>Vite</Badge>
                            <Badge>Tailwind CSS</Badge>
                            <Badge>React Router</Badge>
                            <Badge>GitHub Actions</Badge>
                            <Badge>GitHub Pages</Badge>
                        </BadgeList>

                        <a
                            href="https://github.com/ironhead3829/biography"
                            target="_blank"
                            rel="noreferrer"
                            className={githubClass}
                        >
                            <FaGithub aria-hidden="true" />
                            View on GitHub →
                        </a>
                    </article>

                    {/* Local AI */}
                    <article className={projectClass}>
                        <div className={projectHeaderClass}>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <h3 className="text-xl font-semibold text-white">
                                Local AI Development Environment
                            </h3>

                            <span className="self-start rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                                Personal Experiment · Ongoing
                            </span>
                        </div>
                        </div>

                        <p className="mt-5 leading-8 text-slate-300">
                            An ongoing experiment with locally hosted language
                            models for software development. The goal is to
                            learn more about local LLM tooling, explore a
                            private/offline alternative to cloud services, and
                            evaluate whether local models can reduce reliance on
                            paid AI development tools.
                        </p>

                        <BulletList>
                            <li>
                                Host Ollama on a Windows 11 PC and expose the
                                service across my local network for use from a
                                separate development machine.
                            </li>
                            <li>
                                Verified remote Ollama API access with
                                <code className="mx-1 text-slate-300">
                                    curl
                                </code>
                                before integrating it with development tools.
                            </li>
                            <li>
                                Configured VS Code and Continue to use
                                Qwen3.5:9B for interactive coding assistance
                                including code generation, refactoring,
                                debugging, and code-related questions.
                            </li>
                            <li>
                                Configured Qwen2.5-Coder:1.5B separately for
                                code autocomplete.
                            </li>
                            <li>
                                Run nomic-embed-text locally through Ollama as
                                the configured embedding model.
                            </li>
                            <li>
                                Evaluate the setup through normal development
                                work rather than synthetic benchmarks, comparing
                                its practical usefulness with cloud-based
                                assistants over time.
                            </li>
                        </BulletList>

                        <BadgeList>
                            <Badge>Ollama</Badge>
                            <Badge>Qwen</Badge>
                            <Badge>Continue</Badge>
                            <Badge>VS Code</Badge>
                            <Badge>Local LLMs</Badge>
                            <Badge>Windows 11</Badge>
                        </BadgeList>
                    </article>
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
                    <article className={projectClass}>
                        <div className={projectHeaderClass}>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <h3 className="text-xl font-semibold text-white">
                                Universal Variable Differential Transformer
                                Simulator
                            </h3>

                            <span className="self-start rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                                Senior Design Capstone · UAH · 2014
                            </span>
                        </div>
                        </div>

                        <p className="mt-5 leading-8 text-slate-300">
                            A two-semester, three-person Computer Engineering
                            senior design project to develop a proof-of-concept
                            lower-cost method of simulating LVDT and RVDT
                            signals for development and testing. The prototype
                            combined analog circuitry, data conversion, an
                            Arduino Uno, and signal-processing firmware.
                        </p>

                        <p className="mt-4 leading-8 text-slate-300">
                            I was responsible for the hardware design and
                            implementation. My work covered the analog signal
                            path from the input conditioning circuitry through
                            data conversion, filtering, amplification, and the
                            output circuitry.
                        </p>

                        <BulletList>
                            <li>
                                Selected components and designed the signal
                                conditioning, ADC interface, DAC approach,
                                filters, transformer stages, op-amp circuits,
                                voltage dividers, amplifiers, and supporting
                                circuitry.
                            </li>
                            <li>
                                Performed the analog circuit calculations and
                                used ModelSim to simulate the complete signals
                                entering and leaving the Arduino portion of the
                                design.
                            </li>
                            <li>
                                Assembled the proof-of-concept hardware on
                                breadboards and tested and troubleshot it using
                                an oscilloscope and multimeter.
                            </li>
                            <li>
                                Worked with the firmware developer on
                                hardware/software integration and reviewed
                                implementation changes as the team addressed
                                sampling and throughput limitations.
                            </li>
                            <li>
                                Prepared the final technical report and user
                                manual from the team's collected design and test
                                information and created the circuit schematics
                                and system diagrams.
                            </li>
                        </BulletList>

                        <div className="mt-6 rounded-lg border border-sky-900/60 bg-slate-900/60 p-5 sm:p-6">
                            <h4 className="flex items-center gap-2 font-semibold text-slate-100">
                                <FaMicrochip className="text-sky-400" aria-hidden="true" />
                                Alternative Architecture
                            </h4>

                            <p className="mt-3 leading-8 text-slate-300">
                                After encountering throughput constraints in the
                                implemented architecture, I proposed a
                                conceptual alternative that preserved the AC
                                waveform in the analog signal path. In-phase and
                                inverted versions of the reference signal would
                                be scaled with digitally controlled
                                potentiometers and recombined with a summing
                                amplifier, leaving the microcontroller
                                responsible for controlling the potentiometers
                                rather than continuously reconstructing the
                                waveform.
                            </p>

                            <p className="mt-5 leading-8 text-slate-300">
                                The concept was not prototyped or validated, but
                                it represented a different approach to the
                                performance problem: simplifying the
                                architecture to remove processing from the
                                critical signal path rather than continuing to
                                optimize around the constraint.
                            </p>
                        </div>

                        <BadgeList>
                            <Badge>Analog Circuit Design</Badge>
                            <Badge>Arduino</Badge>
                            <Badge>ADC / DAC</Badge>
                            <Badge>ModelSim</Badge>
                            <Badge>Oscilloscope</Badge>
                            <Badge>Hardware Integration</Badge>
                            <Badge>Technical Documentation</Badge>
                        </BadgeList>
                    </article>

                    {/* Catan */}
                    <article className={projectClass}>
                        <div className={projectHeaderClass}>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <h3 className="text-xl font-semibold text-white">
                                Settlers of Catan Recreation
                            </h3>

                            <span className="self-start rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                                CPE 453: Senior Software Studio · UAH · 2012
                            </span>
                        </div>
                        </div>

                        <p className="mt-5 leading-8 text-slate-300">
                            A team project to develop a playable C++/Qt
                            recreation of Settlers of Catan. My work focused on
                            backend game logic, persistence, localization, and
                            integration with the shared application rather than
                            the user interface.
                        </p>

                        <BulletList>
                            <li>
                                Implemented resource distribution based on dice
                                rolls and player settlements and cities.
                            </li>
                            <li>
                                Implemented trading calculations and checks for
                                whether players had sufficient resources for
                                game actions.
                            </li>
                            <li>
                                Developed plain-text persistence for saving
                                enough game state to close the application and
                                later resume an in-progress game.
                            </li>
                            <li>
                                Implemented Qt internationalization using
                                translatable strings, Qt Linguist tooling, and
                                QTranslator.
                            </li>
                            <li>
                                Supported runtime switching between English and
                                Spanish, with the visible interface updating
                                without restarting the application.
                            </li>
                            <li>
                                Worked in a shared SVN codebase using
                                Agile-style one-week development iterations,
                                use-case diagrams, progress reviews, and formal
                                project presentations.
                            </li>
                        </BulletList>

                        <BadgeList>
                            <Badge>C++</Badge>
                            <Badge>Qt</Badge>
                            <Badge>Persistence</Badge>
                            <Badge>Localization</Badge>
                            <Badge>Qt Linguist</Badge>
                            <Badge>UML</Badge>
                            <Badge>SVN</Badge>
                        </BadgeList>
                    </article>

                    {/* Game of Life */}
                    <article className={projectClass}>
                        <div className={projectHeaderClass}>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <h3 className="text-xl font-semibold text-white">
                                Conway&apos;s Game of Life
                            </h3>

                            <span className="self-start rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                                CPE 353: Software Design & Engineering · UAH ·
                                2011
                            </span>
                        </div>
                        </div>

                        <p className="mt-5 leading-8 text-slate-300">
                            An individual C++/Qt implementation of Conway&apos;s
                            Game of Life built from functional requirements and
                            a user-interface mockup supplied by the course
                            professor.
                        </p>

                        <BulletList>
                            <li>
                                Built an interactive 11 × 21 cell grid from 231
                                dynamically created Qt tool buttons.
                            </li>
                            <li>
                                Implemented generation processing using separate
                                current-state and next-state arrays.
                            </li>
                            <li>
                                Implemented toroidal boundary behavior so cells
                                interact correctly across all four edges and
                                corners of the grid.
                            </li>
                            <li>
                                Used QTimer to run the simulation at a
                                configurable interval with start, stop, and
                                finite or continuous generation modes.
                            </li>
                            <li>
                                Allowed birth and survival rules to be
                                configured independently, supporting the
                                standard B3/S23 rules as well as alternate rule
                                sets.
                            </li>
                            <li>
                                Designed and implemented a simple human-readable
                                file format for saving and restoring simulation
                                rules and grid state.
                            </li>
                        </BulletList>

                        <BadgeList>
                            <Badge>C++</Badge>
                            <Badge>Qt</Badge>
                            <Badge>Qt Widgets</Badge>
                            <Badge>QTimer</Badge>
                            <Badge>Simulation</Badge>
                            <Badge>File Persistence</Badge>
                        </BadgeList>
                    </article>
                </div>
            </div>
        </section>
    );
}
