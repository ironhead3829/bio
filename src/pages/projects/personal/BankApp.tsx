import { FaGithub } from "react-icons/fa";
import Badge from "../../../components/Badge";
import BadgeList from "../../../components/BadgeList";
import BulletList from "../../../components/BulletList";

interface ClassProps {
    projectHeaderClass: string;
    projectClass: string;
    githubClass: string;
}

export default function BankApp({projectHeaderClass, projectClass, githubClass}: ClassProps) {
    return (
        <>
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
        </>
    );
}
