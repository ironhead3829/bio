import { FaGithub } from "react-icons/fa";
import Badge from "../../../components/Badge";
import BadgeList from "../../../components/BadgeList";
import BulletList from "../../../components/BulletList";

interface ClassProps {
    projectHeaderClass: string;
    projectClass: string;
    githubClass: string;
}

export default function Biography({projectHeaderClass, projectClass, githubClass}: ClassProps) {
    return (
        <>
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
        </>
    );
}
