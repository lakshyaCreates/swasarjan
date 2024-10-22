import { Hero } from "./_components/hero";
import { Philosophy } from "./_components/philosophy";
import { TopNotificationBar } from "./_components/top-notification-bar";

export default function HomePage() {
    return (
        <div className="space-y-24">
            <Hero />
            <Philosophy />
        </div>
    );
}
