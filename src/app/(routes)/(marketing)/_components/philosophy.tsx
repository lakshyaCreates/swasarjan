import Link from "next/link";

import {
    SectionHeading,
    SectionText,
    Wrapper,
} from "@/components/section-builders";
import { Button } from "@/components/ui/button";

export const Philosophy = () => {
    return (
        <Wrapper>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
                <div className="col-span-1 flex flex-col items-center justify-center gap-y-4 text-center lg:col-span-3 lg:items-start lg:justify-start lg:text-start">
                    <SectionHeading>Our Philosophy</SectionHeading>
                    <SectionText className="w-[90%] text-xl lg:text-2xl">
                        Bringing change, along with uplifting oneself and the
                        people around Self-Development
                    </SectionText>
                    <SectionText>
                        Allow me to shed light on the genesis of our mission,
                        where understanding replaces denouncement, and
                        compassion triumphs over pain. We will provide a
                        detailed account of the principles that guide our NGO's
                        impactful system.
                    </SectionText>
                    <Button asChild>
                        <Link href={"/about"}>Learn More</Link>
                    </Button>
                </div>
                <div className="col-span-1 flex items-center justify-center lg:col-span-2 lg:justify-end">
                    <div className="col-span-1 grid grid-cols-2 place-content-center place-items-center gap-x-16 gap-y-8 text-center lg:text-start">
                        {values.map((value) => (
                            <div key={value} className="col-span-1 w-full">
                                <SectionHeading className="!text-2xl font-semibold">
                                    Our Mission
                                </SectionHeading>
                                <SectionText className="">
                                    Recreating the views of society
                                </SectionText>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const values = [1, 2, 3, 4];