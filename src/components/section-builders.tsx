import Link from "next/link";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const SectionWrapper = ({
    className,
    children,
    heading,
    description,
    wrapChildren,
}: Props & {
    wrapChildren?: boolean;
    heading: string;
    description: string;
}) => {
    return (
        <div className={cn("space-y-8", className)}>
            <Wrapper>
                <div className="flex flex-col items-center justify-center gap-y-2 text-center">
                    <SectionHeading>{heading}</SectionHeading>
                    <SectionText>{description}</SectionText>
                    <div className={cn(wrapChildren && "pt-6")}>
                        {wrapChildren && children}
                    </div>
                </div>
            </Wrapper>
            <div>{!wrapChildren && children}</div>
        </div>
    );
};

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

export const SectionHeading = ({ className, children }: Props) => {
    return (
        <h3
            className={cn(
                "text-3xl font-bold text-brand-orange-500 lg:text-4xl",
                className,
            )}
        >
            {children}
        </h3>
    );
};

export const SectionText = ({ className, children }: Props) => {
    return (
        <p
            className={cn(
                "text-lg font-medium leading-tight text-accent-foreground lg:text-xl",
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
            className="text-lg font-bold text-brand-violet-500 hover:underline"
        >
            {children}
        </Link>
    );
};
