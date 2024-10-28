"use client";

import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import {
    SectionLink,
    SectionText,
    Wrapper,
} from "@/components/section-builders";
import { Button } from "@/components/ui/button";

export const TopNotificationBar = () => {
    const pathname = usePathname();

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        allowedPages.map((page) => {
            if (pathname !== page) return null;
        });
    }, [pathname]);

    return (
        <Wrapper>
            <div
                className={cn(
                    "group relative pb-3 pt-6 text-center",
                    isVisible
                        ? "flex items-center justify-center space-x-12"
                        : "hidden",
                )}
            >
                <SectionText className="mx-4 space-x-1">
                    <span>
                        Your each click, contribution and share is helping a
                        child in need!
                    </span>
                    <SectionLink href="/events">Learn more</SectionLink>
                    <span>about our recent campaigns</span>
                </SectionText>
                <Button
                    size={"icon"}
                    variant={"outline"}
                    onClick={() => setIsVisible(!isVisible)}
                    className="absolute right-0 top-1/2 h-3 w-3 p-2 transition-opacity duration-100 ease-in group-hover:opacity-100 md:opacity-0 lg:right-12"
                >
                    <XIcon className="!size-3" />
                </Button>
            </div>
        </Wrapper>
    );
};

const allowedPages = ["/"];