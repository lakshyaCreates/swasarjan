import { FaAngleRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import Link from "next/link";

import { Button } from "../ui/button";

export const CTA = () => {
    return (
        <div className="group relative">
            <Button size={"sm"} variant={"default"}>
                <span>Contribute</span>
                <IoIosArrowDown className="group -ml-1 mt-1 !h-3 !w-3 transition-transform duration-150 ease-in group-hover:rotate-180" />
            </Button>
            <div>
                <>
                    <div className="invisible absolute -left-1/2 top-10 z-50 flex h-fit min-w-52 max-w-52 flex-col rounded-xl border bg-background p-2 opacity-0 shadow-sm transition-all duration-150 ease-in group-hover:visible group-hover:opacity-100">
                        {data.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="group/subLink flex cursor-grab items-center gap-x-1 rounded-xl bg-transparent px-3 py-2 text-lg font-semibold hover:bg-brand-orange-50/50"
                            >
                                <span>{item.label}</span>
                                <span>
                                    <FaAngleRight className="mt-1 size-3 -rotate-180 opacity-0 transition-all duration-150 ease-in group-hover/subLink:rotate-0 group-hover/subLink:opacity-100" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </>
            </div>
        </div>
    );
};

interface DataProps {
    label: string;
    href: string;
}

const data: DataProps[] = [
    {
        label: "Become a Member",
        href: "auth/signup?role=member",
    },
    {
        label: "Become a Volunteer",
        href: "auth/signup?role=volunteer",
    },
    {
        label: "Donate",
        href: "/donate",
    },
];
