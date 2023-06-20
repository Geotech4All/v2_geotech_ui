import React from "react"

interface PageProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Page(props: PageProps) {
    const { children, className } = props;
    return (
        <main className={`p-3 min-h-screen ${className}`}>
            {children}
        </main>
    )
}
