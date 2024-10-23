import { ItemCard } from "@/components/item-card";
import { SectionWrapper } from "@/components/section-builders";
import { Button } from "@/components/ui/button";

export const RecentEvents = () => {
    return (
        <SectionWrapper
            wrapChildren
            heading="Our Recent Events"
            description="Check out some of our latest ongoing and past events"
        >
            <div className="place-self-senter xs:grid-cols-2 grid origin-center grid-cols-1 place-items-center content-center !gap-14 self-center lg:grid-cols-3">
                {dummyData.map((item, index) => (
                    <ItemCard key={index} {...item} />
                ))}
            </div>
        </SectionWrapper>
    );
};

const imgArr = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

const dummyData = [
    {
        title: "Event 1",
        desc: "Description for Event 1",
        date: "Jan 1, 2024",
        href: "/event1",
        location: "Location 1",
        images: imgArr,
    },
    {
        title: "Event 2",
        desc: "Description for Event 2",
        date: "Feb 15, 2024",
        href: "/event2",
        location: "Location 2",
        images: imgArr,
    },
    {
        title: "Event 3",
        desc: "Description for Event 3",
        date: "Mar 30, 2024",
        href: "/event3",
        location: "Location 3",
        images: imgArr,
    },
    {
        title: "Event 4",
        desc: "Description for Event 4",
        date: "Apr 10, 2024",
        href: "/event4",
        location: "Location 4",
        images: imgArr,
    },
    {
        title: "Event 5",
        desc: "Description for Event 5",
        date: "May 22, 2024",
        href: "/event5",
        location: "Location 5",
        images: imgArr,
    },
    {
        title: "Event 6",
        desc: "Description for Event 6",
        date: "Jun 5, 2024",
        href: "/event6",
        location: "Location 6",
        images: imgArr,
    },
];
