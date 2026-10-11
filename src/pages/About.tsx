import profilePhoto from "../assets/me.png";
import { FaCode, FaLayerGroup, FaBookOpen, FaHeart, FaRobot } from "react-icons/fa";

const sectionClass = "mx-auto w-full max-w-7xl px-6 py-10";
const headingClass = "flex items-center gap-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl";
const iconClass = "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-300";

export default function About() {
    return(
        <>
            <section className={`${sectionClass} pt-12 sm:pt-16`}>
                <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 p-6 shadow-xl shadow-black/10 sm:p-10">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />
                    <div className="relative grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
                        <div className="max-w-3xl space-y-6">
                            <div>
                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">The story so far</p>
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Me<span className="text-sky-400">.</span></h1>
                                <div className="mt-5 h-1 w-14 rounded-full bg-sky-400" aria-hidden="true" />
                            </div>
                            <p className="text-slate-300 leading-8">
                                I've been programming, on and off, for about 40 years, but my professional
                                career starter over 11 years ago. I started around age 10 with TI-BASIC and
                                later learned Apple BASIC as a teenager. The first program I designed on my own
                                was a simple Battleship-style game where the player and computer took turns
                                guessing coordinates to find each other's ship. The second time I ran it, the
                                computer sank my ship on its first guess. Despite that early defeat, I was
                                hooked. At the time, I dreamed of eventually developing computer games.
                            </p>

                            <p className="text-slate-300 leading-8">
                                My path into professional software engineering wasn't a straight one. I first
                                learned C and C++ in college at 18, but life took me in other directions before
                                I eventually returned to school. While working in the engineering industry, I
                                completed my Computer Engineering degree and continued expanding my programming
                                skills, including learning Qt. I moved into professional software development in
                                2015, fulfilling a goal I'd had since I was young.
                            </p>
                        </div>
                        <div className="mx-auto w-56 shrink-0 sm:w-64 md:w-72">
                            <div className="rounded-2xl border border-slate-600/70 bg-slate-800/70 p-2 shadow-2xl shadow-black/30">
                                <img src={profilePhoto} alt="Jason Tunstill" className="aspect-[3/4] w-full rounded-xl object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${sectionClass} border-t border-slate-800/70`}>
                <h2 className={headingClass}>
                    <span className={iconClass}><FaCode aria-hidden="true" className="h-5 w-5" /></span>
                    How I Approach Software Development
                </h2>

                <p className="mt-5 wfull text-slate-300 leading-8">
                    What I enjoy most about software engineering is solving problems. Sometimes that
                    means designing and building something new; other times it means tracking down a
                    difficult bug in an unfamiliar or complex system. Both require understanding the
                    problem, breaking it into manageable pieces, and finding a practical solution.
                </p>

                <p className="mt-5 w-full text-slate-300 leading-8">
                    When debugging, my first priority is usually to reproduce the problem
                    consistently. From there, I work through the system using whatever
                    tools make sense—debuggers and breakpoints, logging or print statements,
                    documentation, source-code analysis, and increasingly AI-assisted
                    development tools. I use AI as another tool for reviewing code, exploring
                    possible causes, evaluating potential solutions, and helping me work
                    through unfamiliar technologies. The tools may change, but the objective
                    is the same: understand what's actually happening rather than guessing at
                    the cause.
                </p>

                <p className="mt-5 w-full text-slate-300 leading-8">
                    I particularly enjoy the problems that don't stay neatly inside one layer
                    of a system. Over the years, I've had to trace issues through application
                    code, operating systems, libraries, databases, network communication, build
                    systems, and physical hardware. That breadth has become an important part
                    of how I approach engineering.
                </p>

                <div className="mt-9 w-full rounded-2xl border border-sky-400/15 bg-slate-900/60 p-6 sm:p-8">
                <h3 className="flex items-center gap-3 text-xl font-semibold text-white">
                    <FaRobot className="text-sky-300" aria-hidden="true" />
                    AI-Assisted Development
                </h3>

                <p className="mt-4 w-full text-slate-300 leading-8">
                    I use AI development tools as part of my engineering workflow to navigate
                    large codebases, investigate bugs, research unfamiliar APIs, review and
                    refactor code, reduce repetitive work, and explore implementation
                    approaches. My professional experience includes working with approved
                    AI-assisted development tools such as GitHub Copilot and OpenCode, while
                    I also explore tools such as ChatGPT, Gemini, and locally hosted models on
                    my own.
                </p>

                <p className="mt-4 w-full text-slate-300 leading-8">
                    I treat AI-generated code and recommendations as starting points rather
                    than authoritative answers. AI can produce incorrect code, make assumptions
                    about dependencies or library versions, and suggest solutions that do not
                    fit the existing design. I review its recommendations against the surrounding
                    code, consult documentation when necessary, compile and test changes, and
                    benchmark performance-related changes before accepting them.
                </p>

                <p className="mt-4 w-full text-slate-300 leading-8">
                    I am also exploring a more specification-driven workflow in which AI helps
                    develop requirements, design decisions, edge cases, acceptance criteria,
                    and testing plans before implementation. My goal is to preserve those
                    decisions in Markdown documentation so that both developers and future
                    AI-assisted development tools can understand the intended design before
                    making changes to the code.
                </p>
                </div>
            </section>

            <section className={`${sectionClass} border-t border-slate-800/70`}>
                <h2 className={headingClass}>
                    <span className={iconClass}><FaLayerGroup aria-hidden="true" className="h-5 w-5" /></span>
                    A Generalist by Choice
                </h2>

                <p className="mt-5 w-full text-slate-300 leading-8">
                    I've worked with C++, Python, Qt, QML, PySide6, Ruby on Rails, C#/.NET, LabVIEW, SQL, JavaScript, Typescript, React,
                    CI/CD systems, and a variety of other technologies. I don't consider being tied to any one of them the goal.
                </p>

                <p className="mt-5 w-full text-slate-300 leading-8">
                    I prefer to start with the problem and then consider which technologies are appropriate for solving it. Having
                    experience across desktop applications, backend services, web applications, databases, hardware integration, and
                    build and deployment systems gives me a broader perspective when making those decisions. It also means I'm
                    comfortable learning something new when the problem calls for it.
                </p>

                <p className="mt-5 w-full text-slate-300 leading-8">
                    My view of good software is similarly pragmatic. Reliability, maintainability, performance, usability, and
                    simplicity all matter, but the right balance depends on the application. The first responsibility of software
                    is to work correctly and solve the problem it was built to solve. Once that foundation is there, it can be refined
                    and improved.
                </p>
            </section>

            <section className={`${sectionClass} border-t border-slate-800/70`}>
                <h2 className={headingClass}>
                    <span className={iconClass}><FaBookOpen aria-hidden="true" className="h-5 w-5" /></span>
                    Always Learning
                </h2>

                <p className="mt-5 w-full text-slate-300 leading-8">
                    I'm continuing to broaden my skills rather than narrowing them to a single technology stack. I'm currently
                    learning React to expand on my previous web-development experience with Ruby on Rails and to gain more experience
                    building dynamic, component-based frontends. This website is part of that effort.
                </p>
                <p className="mt-5 w-full text-slate-300 leading-8">
                    I'm also exploring scientific Python tools such as NumPy, SciPy, and pandas, and I've begun looking at Rust. I'm particularly
                    interested in how AI can be incorporated into both software-development workflows and applications. I've been experimenting
                    with running large language models locally using Ollama and Qwen to better understand how applications can interact with local
                    models. I'm also gaining practical experience using AI-assisted development tools for coding, debugging, research, and learning
                    new technologies. These are areas I'm continuing to explore rather than technologies I claim professional expertise in, but
                    learning unfamiliar technologies has been a recurring part of my career.
                </p>
            </section>

            <section className={`${sectionClass} border-t border-slate-800/70`}>
                <h2 className={headingClass}>
                    <span className={iconClass}><FaHeart aria-hidden="true" className="h-5 w-5" /></span>
                    Outside of Software
                </h2>

                <p className="mt-5 w-full text-slate-300 leading-8">
                    Away from the computer, I enjoy projects where I can work with my hands. That might mean working on my truck or
                    tackling home-improvement projects such as installing flooring, replacing a bathroom vanity, or doing basic electrical
                    work like replacing light fixtures, ceiling fans, outlets, and switches. I enjoy playing PC games like World of
                    Warcraft and The Witcher III. I also enjoy reading science fiction and fantasy novels. 
                </p>

                <p className="mt-5 w-full text-slate-300 leading-8">
                    Most of all, I enjoy spending time with my family - my wife, three children, granddaughter, dad, and sister.
                    I also keep the memory of my mother, who passed away in 2025, close to me. Family is an important part of who I am.
                </p>
            </section>

        </>
    );
}
