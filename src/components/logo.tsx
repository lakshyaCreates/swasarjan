"use client";

import { FaAngleRight } from "react-icons/fa6";
import { IoDocumentsOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { SiGnuprivacyguard } from "react-icons/si";
import { TbSvg } from "react-icons/tb";

import Image from "next/image";
import Link from "next/link";

import { toast } from "sonner";

import { cn } from "@/lib/utils";

import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuGroup,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { getStringFromFile } from "@/actions/get-string-from-file";
import { copyToClipboard } from "@/helpers/copy-to-clipboard";

async function copyLogo() {
    const string = await getStringFromFile("swasarjan-main_logo.svg", "public");

    const res = copyToClipboard(string);

    if (res.response === "ok") {
        toast.success(res.message);
        return;
    } else {
        toast.error(res.message || "Something went wrong");
    }
}

export const Logo = ({ contextActive }: { contextActive?: boolean }) => {
    return (
        <>
            {contextActive && (
                <ContextMenu>
                    <ContextMenuTrigger>
                        <Image
                            width={500}
                            height={500}
                            src={"./swasarjan-main_logo.svg"}
                            alt="Swa Sarjan Logo"
                            className="min-w-44 max-w-44 select-none"
                            draggable={false}
                        />
                    </ContextMenuTrigger>
                    <ContextMenuContent
                        className="w-56 rounded-xl"
                        alignOffset={50}
                    >
                        {data.map((group, index) => (
                            <div key={index}>
                                <ContextMenuGroup>
                                    <ContextMenuLabel className="text-xl font-semibold tracking-wide text-muted-foreground">
                                        {group.label}
                                    </ContextMenuLabel>
                                    {group.content.map((item, index) => (
                                        <ContextMenuItem
                                            key={index}
                                            onClick={
                                                item.handler && item.handler
                                            }
                                            className="group rounded-xl pb-2 text-lg font-medium hover:!bg-brand-orange-50/50"
                                        >
                                            <Link
                                                href={item.href || ""}
                                                className={cn(
                                                    "group flex cursor-grab items-center",
                                                    !item.href
                                                        ? "pointer-events-none"
                                                        : "cursor-grab",
                                                )}
                                            >
                                                <item.icon className="mr-2 mt-1 size-4" />
                                                <span>{item.text}</span>
                                                {item.href && (
                                                    <span>
                                                        <FaAngleRight className="ml-1 mt-1 size-3 -rotate-180 opacity-0 transition-all duration-150 ease-in group-hover:rotate-0 group-hover:opacity-100" />
                                                    </span>
                                                )}
                                            </Link>
                                        </ContextMenuItem>
                                    ))}
                                </ContextMenuGroup>
                                {index < data.length - 1 && (
                                    <ContextMenuSeparator />
                                )}
                            </div>
                        ))}
                    </ContextMenuContent>
                </ContextMenu>
            )}
            {!contextActive && (
                <Image
                    width={500}
                    height={500}
                    src={"./swasarjan-main_logo.svg"}
                    alt="Swa Sarjan Logo"
                    className="min-w-44 max-w-44 select-none"
                    draggable={false}
                />
            )}
        </>
    );
};

interface DataProps {
    label: string;
    content: {
        text: string;
        icon: IconType;
        handler?: () => void;
        href?: string;
    }[];
}
const data: DataProps[] = [
    {
        label: "Platform",
        content: [
            {
                text: "Copy Logo as SVG",
                icon: TbSvg,
                handler: copyLogo,
            },
        ],
    },
    {
        label: "Legal Docs",
        content: [
            {
                text: "Terms and Conditions",
                icon: IoDocumentsOutline,
                href: "/terms-and-conditions",
            },
            {
                text: "Privacy Policy",
                icon: SiGnuprivacyguard,
                href: "/privacy-policy",
            },
        ],
    },
];
