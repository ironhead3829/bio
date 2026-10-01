import type { ReactNode } from "react";

interface BulletListProps {
    children: ReactNode;
}


export default function BulletList({ children }: BulletListProps) {
    return (
        <>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
                {children}
            </ul>
        </>
    )
};
