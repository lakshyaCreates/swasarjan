import { SectionWrapper } from "@/components/section-builders";

import { HomeContactForm } from "./home-contact-form";

export const HomeContact = () => {
    return (
        <SectionWrapper
            wrapChildren
            heading="Contact Form"
            description="Our team will be in teach with you son!"
        >
            <HomeContactForm />
        </SectionWrapper>
    );
};
