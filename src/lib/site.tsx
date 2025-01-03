import Link from "next/link";

export const site = {
    name: "Swa Sarjan Foundation",
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
    homePage: {
        notification: (
            <div>
                Together, we can create a brighter future! Join our efforts by
                contributing, sharing, or volunteering.{" "}
                <Link
                    href={"/who-we-are/our-story"}
                    className="text-lg font-bold text-brand-violet-500 hover:underline"
                >
                    Know More!
                </Link>
            </div>
        ),
    },
};
