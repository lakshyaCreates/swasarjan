import Link from "next/link";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const SectionWrapper = ({
    heading,
    description,
}: {
    heading: string;
    description: string;
}) => {
    return (
        <Wrapper>
            <div className="space-y-4">
                <SectionHeading>{heading}</SectionHeading>
                <SectionText>{description}</SectionText>
            </div>
        </Wrapper>
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
                "text-lg font-medium leading-6 text-accent-foreground lg:text-xl",
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
