import Badge from "../../../components/Badge";
import BadgeList from "../../../components/BadgeList";
import BulletList from "../../../components/BulletList";

interface ClassProps {
    projectHeaderClass: string;
    projectClass: string;
}

export default function Catan({projectHeaderClass, projectClass}: ClassProps) {
    return(
        <>
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
        </>
    );
}
