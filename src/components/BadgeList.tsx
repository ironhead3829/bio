import type { ReactNode } from "react";

interface BadgeListProps {
    children: ReactNode;
}

export default function BadgeList({ children }: BadgeListProps) {
    return (
        <>
            <div className="mt-5 flex flex-wrap gap-2">
                {children}
            </div>
        </>
    )
};
