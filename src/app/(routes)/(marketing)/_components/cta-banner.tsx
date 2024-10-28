import {
    SectionHeading,
    SectionText,
    Wrapper,
} from "@/components/section-builders";
import { Button } from "@/components/ui/button";

export const CTABanner = () => {
    return (
        <div className="h-fit w-screen bg-brand-orange-500 md:h-40">
            <Wrapper>
            <div className="mdm:py-0 flex h-full flex-col items-center justify-center gap-y-6 py-6 md:flex-row md:gap-y-0">
                    <div className="space-y-2 px-4 md:px-0">
                        <SectionHeading className="w-full text-center !leading-7 text-white md:text-start">
                            Looking to contribute to a cause you feel close to?
                        </SectionHeading>
                        <SectionText className="text-center font-semibold tracking-wide text-white/90 md:text-start">
                            We would love to be part of it!
                        </SectionText>
                    </div>
                    <Button
                        className="mx-24 bg-white text-xl font-bold text-orange-500 hover:bg-accent"
                        size={"lg"}
                    >
                        Contact Us
                    </Button>
                </div>
            </Wrapper>
        </div>
    );
};