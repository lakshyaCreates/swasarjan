import Link from "next/link";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const Wrapper = ({
    id,
    className,
    children,
}: Props & { id?: string }) => {
    return (
        <section
            id={id}
            className={cn(
                "mx-auto h-full w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl",
                className,
            )}
        >
            {children}
        </section>
    );
};

export const SectionText = ({ className, children }: Props) => {
    return (
        <p
            className={cn(
                "text-lg font-medium leading-6 text-accent-foreground",
                className,
            )}
        >
            {children}
        </p>
    );
};

export const SectionLink = ({
    href = "/",
    className,
    children,
}: Props & { href: string }) => {
    return (
        <Link
            href={href}
            className="text-brand-violet-500 text-lg font-bold hover:underline"
        >
            {children}
        </Link>
    );
};
