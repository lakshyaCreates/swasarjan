import { Header } from "@/components/header";

import { TopNotificationBar } from "./(home)/_components/top-notification-bar";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <TopNotificationBar />
            <Header />
            <main>{children}</main>
        </>
    );
}
