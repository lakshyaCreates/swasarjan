import { CSRPartners } from "./_components/csr-partners";
import { CTABanner } from "./_components/cta-banner";
import { Hero } from "./_components/hero";
import { Philosophy } from "./_components/philosophy";
import { RecentEvents } from "./_components/recent-events";
import { RecentProjects } from "./_components/recent-projects";

export default function HomePage() {
    return (
        <div className="space-y-24 py-24">
            <Hero />
            <Philosophy />
            <CSRPartners />
            <RecentEvents />
            <CTABanner />
            <RecentProjects />
        </div>
    );
}
