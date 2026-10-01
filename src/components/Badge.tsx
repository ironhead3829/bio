import type { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
    return (
        <>
            <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
                {children}
            </span>
        </>
    );
}
