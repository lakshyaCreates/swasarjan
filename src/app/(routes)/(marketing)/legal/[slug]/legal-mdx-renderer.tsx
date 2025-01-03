"use client";

import { MDXContent } from "@content-collections/mdx/react";
import { Hash } from "lucide-react";

type HeadingProps = {
    id?: string;
    children?: React.ReactNode;
};

const heading = (As: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
    const Heading = ({ id, children }: HeadingProps) => (
        <a
            href={`#${id}`}
            className="group relative no-underline focus-visible:ring-0"
        >
            <Hash
                className="dark:text-primary-400 absolute -left-5 hidden h-full p-1 text-brand-orange-500 group-hover:block group-focus-visible:block sm:-left-6"
                strokeWidth="3"
            />
            <As
                id={id}
                className="group-focus-visible:decoration-primary-500 text-brand-orange-500 group-focus-visible:underline group-focus-visible:decoration-2"
            >
                {children}
            </As>
        </a>
    );
    Heading.displayName = As;
    return Heading;
};

const paragraph = () => {
    const Heading = ({ children }: HeadingProps) => (
        <p className="font-medium text-black">{children}</p>
    );
    Heading.displayName = paragraph;
    return Heading;
};

export const LegalMdxRenderer = ({ content }: { content: string }) => {
    return (
        <MDXContent
            code={content}
            components={{
                h1: heading("h1"),
                h2: heading("h2"),
                h3: heading("h3"),
                h4: heading("h4"),
                h5: heading("h5"),
                h6: heading("h6"),
                p: paragraph(),
            }}
        />
    );
};
