import Image from "next/image";

import { SectionWrapper } from "@/components/section-builders";
import Marquee from "@/components/ui/marquee";

export const CSRPartners = () => {
    return (
        <SectionWrapper
            heading="Our CSR Partners"
            description="Have a look at what brands we've worked with and get an idea of our experience."
        >
            <Marquee pauseOnHover reverse className="">
                {data.rowOne.map((logo, index) => (
                    <LogoImage key={index} src={logo.src} />
                ))}
            </Marquee>
            <Marquee pauseOnHover>
                {data.rowTwo.map((logo, index) => (
                    <LogoImage key={index} src={logo.src} />
                ))}
            </Marquee>
        </SectionWrapper>
    );
};

const LogoImage = ({ src }: { src: string }) => {
    return (
        <Image
            width={200}
            height={200}
            src={src}
            alt="Company Logo"
            className="mx-6 h-fit max-w-24 lg:max-w-28"
        />
    );
};

interface LogoProps {
    src: string;
}

interface DataProps {
    rowOne: LogoProps[];
    rowTwo: LogoProps[];
}

// TODO: Update the data for phase 0 launch
const data: DataProps = {
    rowOne: [
        {
            src: "/hdfc_bank-logo.png",
        },
        {
            src: "/toyoda_gosei-logo.png",
        },
        {
            src: "/hdfc_bank-logo.png",
        },
        {
            src: "/toyoda_gosei-logo.png",
        },
        {
            src: "/hdfc_bank-logo.png",
        },
        {
            src: "/toyoda_gosei-logo.png",
        },
    ],
    rowTwo: [
        {
            src: "/hdfc_bank-logo.png",
        },
        {
            src: "/toyoda_gosei-logo.png",
        },
        {
            src: "/hdfc_bank-logo.png",
        },
        {
            src: "/toyoda_gosei-logo.png",
        },
        {
            src: "/hdfc_bank-logo.png",
        },
        {
            src: "/toyoda_gosei-logo.png",
        },
    ],
};