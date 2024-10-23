import { Share2Icon } from "lucide-react";

import { ImageSwiper } from "./lukacho/image-swiper";
import { SectionText } from "./section-builders";
import { Button } from "./ui/button";

export const ItemCard = ({
    title,
    desc,
    date,
    href,
    location,
    images,
}: {
    title: string;
    desc: string;
    date: string;
    href: string;
    location: string;
    images: string[];
}) => {
    return (
        <div className="xs:min-w-[180px] xs:max-w-[180px] flex w-full min-w-[80vw] max-w-[80vw] flex-col gap-y-4 overflow-hidden md:min-w-[220px] md:max-w-[220px] lg:min-w-[280px] lg:max-w-[280px] xl:min-w-[300px] xl:max-w-[300px]">
            <div className="group relative">
                <ImageSwiper images={images} />
                <div className="absolute bottom-0 right-0 rounded-br-2xl rounded-tl-xl bg-brand-orange-500 px-2 py-1 font-semibold tracking-wide text-accent opacity-100 transition-opacity duration-150 ease-in group-hover:opacity-0">
                    {date}
                </div>
            </div>
            <div className="flex flex-col gap-y-2 text-start">
                <SectionText className="line-clamp-2 text-xl font-bold !leading-6 md:text-2xl">
                    {title}
                </SectionText>
                <SectionText className="line-clamp-3 !leading-6">
                    {desc}
                </SectionText>
            </div>
            <div className="flex justify-between">
                <Button>Explore</Button>
                <Button variant={"outline"} className="pb-2">
                    <Share2Icon className="size-3" />
                </Button>
            </div>
        </div>
    );
};
