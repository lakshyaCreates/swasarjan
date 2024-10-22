import { Logo } from "../logo";
import { Wrapper } from "../section-builders";

export const Header = () => {
    return (
        <Wrapper>
            <header className="flex h-fit items-center justify-between pb-4 pt-6">
                <Logo contextActive />
            </header>
        </Wrapper>
    );
};
