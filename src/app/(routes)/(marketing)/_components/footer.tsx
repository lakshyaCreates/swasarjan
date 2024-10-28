import Link from "next/link";

import { Wrapper } from "@/components/section-builders";

export const Footer = () => {
    return (
        <Wrapper>
            <footer className="flex min-h-80 w-full flex-row flex-wrap items-start justify-center gap-12 rounded-t-[3rem] bg-brand-violet-500 px-10 py-16 text-center text-neutral-200 md:text-start">
                {data.map((row, index) => (
                    <div key={index} className="flex flex-col gap-y-4">
                        <h3 className="text-2xl font-semibold tracking-wide">
                            {row.title}
                        </h3>
                        <ul className="flex flex-col">
                            {row.link.map((item, index) => (
                                <Link
                                    href={item.href}
                                    key={index}
                                    className="max-w-40 text-lg font-medium text-neutral-300 transition-colors duration-150 ease-in hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </ul>
                    </div>
                ))}
            </footer>
        </Wrapper>
    );
};

const data = [
    {
        title: "About Us",
        link: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "About - Swa Sarjan",
                href: "/",
            },
            {
                label: "Blogs",
                href: "/",
            },
        ],
    },
    {
        title: "Get Involved",
        link: [
            {
                label: "Member",
                href: "/",
            },
            {
                label: "Privacy Policy",
                href: "/",
            },
            {
                label: "Terms & Conditions",
                href: "/",
            },
        ],
    },
    {
        title: "Resource Center",
        link: [
            {
                label: "Our Campaigns",
                href: "/",
            },
            {
                label: "Newsletter",
                href: "/",
            },
            {
                label: "Events",
                href: "/",
            },
            {
                label: "Our Gallery",
                href: "/",
            },
        ],
    },
    {
        title: "Contact Details",
        link: [
            {
                label: "+91 704 303 8000",
                href: "/",
            },
            {
                label: "swasarjan@gmail.com",
                href: "mailto:swasarjan@gmail.com",
            },
            {
                label: "A-10, Dwarkesh Appt., B/h Post Office, Rambagh, Maninagar, Ahmedabad, Gujarat 380008",
                href: "/",
            },
        ],
    },
];
