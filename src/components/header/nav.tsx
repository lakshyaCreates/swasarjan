"use client";

import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import { cn } from "@/lib/utils";

export const Nav = () => {
    return <Mobile />;
};

const Mobile = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="lg">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        size={"sm"}
                        onClick={() => setOpen(!open)}
                        className="flex gap-x-2"
                    >
                        <span>Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className="h-full min-h-screen w-screen min-w-full">
                    <div className="flex w-full items-start justify-center gap-y-4 p-6">
                        <Accordion
                            type="single"
                            collapsible
                            className="flex w-full flex-col gap-y-2"
                        >
                            {data.map((item, index) => (
                                <>
                                    {item.dropdown ? (
                                        <AccordionItem
                                            value={item.label}
                                            className="border-0"
                                        >
                                            <AccordionTrigger className="text-2xl font-semibold hover:no-underline [&[data-state=open]]:text-muted-foreground">
                                                {item.label}
                                            </AccordionTrigger>
                                            <AccordionContent className="ml-8 flex flex-col gap-y-2 text-2xl font-semibold">
                                                {item.subItems?.map(
                                                    (subItem, index) => (
                                                        <Link
                                                            href={subItem.href}
                                                            key={index}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ),
                                                )}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-2xl font-semibold"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </>
                            ))}
                        </Accordion>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

const Desktop = () => {
    const pathname = usePathname();

    const getRootPath = (path: string) => {
        const parts = path.split("/");
        return parts.length > 1 ? `/${parts[1]}` : path;
    };

    const path = getRootPath(pathname);

    return (
        <div className="flex items-center justify-center gap-x-4">
            {data.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className={cn(
                        "group relative flex items-center text-lg font-semibold",
                        path === item.href && "font-bold text-brand-orange-500",
                    )}
                >
                    <span>{item.label}</span>
                    {item.dropdown && item.subItems && (
                        <>
                            <IoIosArrowDown className="group ml-1 mt-1.5 size-3 transition-transform duration-150 ease-in group-hover:rotate-180" />
                            <div className="invisible absolute -left-1/2 top-8 z-50 flex h-fit min-w-52 max-w-52 flex-col rounded-xl border bg-background p-2 opacity-0 shadow-sm transition-all duration-150 ease-in group-hover:visible group-hover:opacity-100">
                                {item.subItems.map((subItem, index) => (
                                    <Link
                                        key={index}
                                        href={subItem.href}
                                        className="group/subLink flex cursor-grab items-center gap-x-1 rounded-xl bg-transparent px-3 py-2 hover:bg-brand-orange-50/50"
                                    >
                                        <span>{subItem.label}</span>
                                        <span>
                                            <FaAngleRight className="mt-1 size-3 -rotate-180 opacity-0 transition-all duration-150 ease-in group-hover/subLink:rotate-0 group-hover/subLink:opacity-100" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </Link>
            ))}
        </div>
    );
};

interface DataProps {
    label: string;
    dropdown?: boolean;
    href: string;
    subItems?: {
        label: string;
        href: string;
    }[];
}

const data: DataProps[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
        dropdown: true,
        subItems: [
            {
                label: "Our Story",
                href: "/about/our-story",
            },
            {
                label: "Our Founder",
                href: "/about/our-founder",
            },
            {
                label: "Our Team",
                href: "/about/our-team",
            },
        ],
    },
    {
        label: "Events",
        href: "/events",
    },
    {
        label: "Projects",
        href: "/projects",
    },
    {
        label: "Media",
        href: "/media",
        dropdown: true,
        subItems: [
            {
                label: "Newsroom",
                href: "/media/newsroom",
            },
            {
                label: "Gallery",
                href: "/media/gallery",
            },
            {
                label: "Reports",
                href: "/media/reports",
            },
            {
                label: "Resources",
                href: "/media/resources",
            },
        ],
    },
    {
        label: "Contact Us",
        href: "#contact-us",
    },
];
