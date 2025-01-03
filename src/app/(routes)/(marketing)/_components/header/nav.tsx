"use client";

import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useIsMounted } from "usehooks-ts";

import { cn } from "@/lib/utils";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { CTA } from "./cta";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Nav = () => {
    return (
        <div className="flex items-center gap-x-2">
            <Desktop />
            <div className="block pr-2 xl:hidden">
                <CTA />
            </div>
            <Mobile />
        </div>
    );
};

const Mobile = () => {
    const [open, setOpen] = useState(false);

    const pathname = usePathname();

    const getRootPath = (path: string) => {
        const parts = path.split("/");
        return parts.length > 1 ? `/${parts[1]}` : path;
    };

    const path = getRootPath(pathname);

    return (
        <nav className="block xl:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        size={"sm"}
                        variant={"secondary"}
                        onClick={() => setOpen(!open)}
                        className="flex gap-x-2"
                    >
                        <span>Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className="h-full min-h-screen w-screen min-w-full">
                    <div className="flex w-full items-start justify-center gap-y-4 p-6">
                        <Accordion
                            key={"mobile-accordion"}
                            type="single"
                            collapsible
                            className="flex w-full flex-col gap-y-2"
                        >
                            {data.map((item, index) => (
                                <span key={index}>
                                    {item.dropdown ? (
                                        <AccordionItem
                                            key={index}
                                            value={item.label}
                                            className="border-0"
                                        >
                                            <AccordionTrigger
                                                className={cn(
                                                    "text-2xl font-semibold hover:no-underline [&[data-state=open]]:text-muted-foreground",
                                                    path === item.href &&
                                                        "font-bold text-brand-orange-500 [&[data-state=open]]:text-brand-orange-300",
                                                )}
                                            >
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
                                            key={index}
                                            href={item.href}
                                            className={cn(
                                                "text-2xl font-semibold",
                                                path === item.href &&
                                                    "font-bold text-brand-orange-500",
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </span>
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

    const [ok, setOk] = useState(false);
    const isMounted = useIsMounted();

    useEffect(() => {
        void delay(1000).then(() => {
            if (isMounted()) setOk(true);
        });
    }, [isMounted]);

    const getRootPath = (path: string) => {
        const parts = path.split("/");
        return parts.length > 1 ? `/${parts[1]}` : path;
    };

    const path = getRootPath(pathname);

    return (
        <div className="hidden items-center justify-center gap-x-4 xl:flex">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative flex items-center text-lg font-semibold",
                    )}
                >
                    {item.href === "" && item.dropdown ? (
                        <p
                            className={cn(
                                path === item.href &&
                                    "cursor-pointer font-bold text-brand-orange-500",
                            )}
                        >
                            {item.label}
                        </p>
                    ) : (
                        <Link
                            href={item.href}
                            className={cn(
                                path === item.href &&
                                    "font-bold text-brand-orange-500",
                            )}
                        >
                            <span>{item.label}</span>
                        </Link>
                    )}
                    {item.subItems && (
                        <>
                            <IoIosArrowDown
                                className={cn(
                                    "group ml-1 mt-1.5 size-3 transition-transform duration-150 ease-in group-hover:rotate-180",
                                    path === item.href &&
                                        "font-bold text-brand-orange-500",
                                )}
                            />
                            <div className="invisible absolute -left-1/2 top-8 z-50 flex h-fit min-w-52 max-w-52 flex-col rounded-xl border bg-background p-2 opacity-0 shadow-sm transition-all duration-150 ease-in group-hover:visible group-hover:opacity-100">
                                {item.subItems.map((subItem, index) => (
                                    <Link
                                        key={index}
                                        href={subItem.href}
                                        className="group/subLink flex items-center gap-x-1 rounded-xl bg-transparent px-3 py-2 hover:bg-brand-orange-50/50"
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
                </div>
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
        label: "Who We Are?",
        href: "",
        dropdown: true,
        subItems: [
            {
                label: "Our Story",
                href: "/our-story",
            },
            {
                label: "Our Partners",
                href: "/our-partners",
            },
            {
                label: "Financials",
                href: "/financials",
            },
        ],
    },
    {
        label: "What We Do?",
        href: "",
        dropdown: true,
        subItems: [
            {
                label: "Education",
                href: "/what-we-do/education",
            },
            {
                label: "Healthcare",
                href: "/what-we-do/healthcare",
            },
            {
                label: "Environment",
                href: "/what-we-do/environment",
            },
            {
                label: "Blood Donation",
                href: "/what-we-do/blood-donation",
            },
            {
                label: "Livelihood",
                href: "/what-we-do/livelihood",
            },
            {
                label: "Awareness Programs",
                href: "/what-we-do/awareness-programs",
            },
        ],
    },
    {
        label: "Our Impact",
        href: "",
        dropdown: true,
        subItems: [
            {
                label: "Success Stories",
                href: "/success-stories",
            },
            {
                label: "Blogs",
                href: "/blogs",
            },
        ],
    },
    {
        label: "Resources",
        href: "",
        dropdown: true,
        subItems: [
            {
                label: "Compliance",
                href: "/resources/compliance",
            },
            {
                label: "Annual Reports",
                href: "/resources/annual-reports",
            },
            {
                label: "Media",
                href: "/resources/media",
            },
            {
                label: "Publications",
                href: "/resources/publications",
            },
        ],
    },
    {
        label: "Get Involved",
        href: "",
        dropdown: true,
        subItems: [
            {
                label: "Volunteer",
                href: "/get-involved/volunteer",
            },
            {
                label: "Intern",
                href: "/get-involved/intern",
            },
            {
                label: "Work with us",
                href: "/get-involved/work-with-us",
            },
            {
                label: "Contact Us",
                href: "/get-involved/contact-us",
            },
        ],
    },
];
