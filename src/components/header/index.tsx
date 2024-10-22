import { Logo } from "../logo";
import { Wrapper } from "../section-builders";

import { CTA } from "./cta";
import { Nav } from "./nav";

export const Header = () => {
    return (
        <Wrapper>
            <header className="flex h-fit items-center justify-between pb-4 pt-6">
                <Logo contextActive />
                <Nav />
                <div className="hidden lg:block">
                    <CTA />
                </div>
            </header>
        </Wrapper>
    );
};
