import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { TopNotificationBar } from "./_components/top-notification-bar";

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
            <Footer />
        </>
    );
}
