import {
    SectionHeading,
    SectionText,
    SectionWrapper,
    Wrapper,
} from "@/components/section-builders";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Marquee from "@/components/ui/marquee";

export const Testimonials = () => {
    return (
        <SectionWrapper
            heading="Our Testimonials"
            description="Have a look at what our contributors has to say about us"
        >
            <Marquee pauseOnHover>
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex h-80 w-80 flex-col items-start justify-between rounded-2xl border border-brand-orange-500 bg-transparent p-6 transition-all duration-150 ease-in hover:scale-[1.03] hover:bg-brand-orange-50/40"
                        >
                            <SectionText className="line-clamp-[8] !leading-6 tracking-wide text-black">
                                {item.text}
                            </SectionText>
                            <div className="flex items-center gap-x-4">
                                <Avatar>
                                    <AvatarImage
                                        src={item.imgSrc}
                                        alt="Image"
                                    />
                                    <AvatarFallback>LS</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <SectionText className="font-semibold">
                                        {item.name}
                                    </SectionText>
                                    <p className="text-lg font-medium tracking-wide text-muted-foreground">
                                        {item.designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Marquee>
        </SectionWrapper>
    );
};

const data = [
    {
        text: "People often wonder where the money would go. I can tell you, I started working with GiveIndia when the pandemic first broke a year ago. We validate them, it's a very good, reliable organization. People should have confidence in giving to GiveIndia and know that the money will be used immediately to help somebody.",
        name: "John Doe",
        designation: "Brand Manager",
    },
    {
        text: "GiveIndia's pursuit of bringing trust, convenience and choice for donors, is aligned with our goal to enable more informed and intentional generosity by everyday givers. We are happy to be a part of this respected group of funders who have come forward to support this effort.",
        imgSrc: "/",
        name: "John Doe",
        designation: "Brand Manager",
    },
];
