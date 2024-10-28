import { CSRPartners } from "./_components/csr-partners";
import { CTABanner } from "./_components/cta-banner";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { HomeContact } from "./_components/home-contact";
import { Philosophy } from "./_components/philosophy";
import { RecentEvents } from "./_components/recent-events";
import { RecentProjects } from "./_components/recent-projects";
import { Testimonials } from "./_components/testimonials";

export default function HomePage() {
    return (
        <div className="space-y-24 pt-24">
            <Hero />
            <Philosophy />
            <CSRPartners />
            <RecentEvents />
            <CTABanner />
            <RecentProjects />
            <Testimonials />
            <HomeContact />
            <Footer />
        </div>
    );
}