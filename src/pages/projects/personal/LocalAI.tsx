import Badge from "../../../components/Badge";
import BadgeList from "../../../components/BadgeList";
import BulletList from "../../../components/BulletList";

interface ClassProps {
    projectHeaderClass: string;
    projectClass: string;
}

export default function LocalAI({projectHeaderClass, projectClass}: ClassProps) {
    return (
        <>
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
        </>
    );
}
