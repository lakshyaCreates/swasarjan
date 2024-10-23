import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { SectionText, Wrapper } from "@/components/section-builders";
import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <div>
            <Wrapper>
                <div className="-mt-6 w-full space-y-10 pb-16 text-center">
                    <div className="place-items-center space-y-4">
                        <h1 className="space-x-2 text-4xl font-extrabold lg:text-5xl">
                            <span>Share your</span>
                            <span className="relative text-brand-orange-500">
                                <Image
                                    src={"/hero-heading-vector.svg"}
                                    alt="Vector"
                                    width={500}
                                    height={500}
                                    className="pointer-events-none absolute -top-1 left-6 z-0 size-16 select-none"
                                />
                                <span className="relative z-10">love</span>
                            </span>
                            <span className="relative z-20">
                                to make someone&apos;s life better
                            </span>
                        </h1>
                        <SectionText className="w-3/4 !leading-tight">
                            Swa-Sarjan is about helping people who need your
                            help so that they can get back on their feet. We are
                            dedicated to providing the needy with basic needs.
                        </SectionText>
                    </div>
                    <div className="flex items-center justify-center gap-x-8">
                        <Button asChild>
                            <Link href={"/events"}>Explore Events</Link>
                        </Button>
                        {/* TODO: Add GSAP Scroll here */}
                        <Button variant={"outline"} asChild>
                            <Link href={"/#contact"}>Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </Wrapper>
            <div className="relative md:py-10">
                <Image
                    alt="Vector"
                    src={"/hero-graphic-vector.svg"}
                    width={1000}
                    height={1000}
                    className="absolute top-1/3 z-0 h-fit w-screen object-cover object-center"
                />
                <div className="relative flex w-full justify-center *:-mx-8">
                    <HeroImage
                        src="/img1.jpg"
                        className="mt-4 -rotate-[18deg]"
                    />
                    <HeroImage src="/img2.jpg" className="z-10" />
                    <HeroImage
                        src="/img3.jpg"
                        className="-mt-4 rotate-[16deg]"
                    />
                </div>
            </div>
        </div>
    );
};

const HeroImage = ({ src, className }: { src: string; className?: string }) => {
    return (
        <Image
            src={src}
            alt={"Image"}
            width={500}
            height={500}
            className={cn(
                "z-0 aspect-square size-36 rounded-2xl object-cover object-center sm:size-40 md:size-56 lg:size-72",
                className,
            )}
        />
    );
};
