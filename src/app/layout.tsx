import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";
import { Providers } from "@/providers";

const darkerGrotesque = Darker_Grotesque({
    display: "swap",
    subsets: ["latin"],
    variable: "--font-darkerGrotesque",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// TODO: Setup SEO
export const metadata: Metadata = {
    title: "Swa Sarjan Foundation",
    description: "Swa Sarjan Foundation is a non-profit organization that aims to provide education to underprivileged children in India.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "relative overflow-x-hidden font-darkerGrotesque antialiased selection:bg-brand-orange-500/20",
                    darkerGrotesque.variable,
                )}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}