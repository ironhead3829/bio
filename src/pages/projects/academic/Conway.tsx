import Badge from "../../../components/Badge";
import BadgeList from "../../../components/BadgeList";
import BulletList from "../../../components/BulletList";

interface ClassProps {
    projectHeaderClass: string;
    projectClass: string;
}

export default function Conway({projectHeaderClass, projectClass}: ClassProps) {
    return (
        <>
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
        </>
    );
}
