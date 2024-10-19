import { Header } from "@/components/header";
import { TopNotificationBar } from "@/components/top-notification-bar";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <TopNotificationBar />
            <Header />
            <main>{children}</main>
        </div>
    );
}
