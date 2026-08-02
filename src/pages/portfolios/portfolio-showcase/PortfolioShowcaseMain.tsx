import CursorAndBackgroundProvider from "@/components/provider/CustomCursorProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import Skiper30 from "@/components/portfolio/Skiper30";
import CreativeAgencyFooter from "@/layouts/footers/CreativeAgencyFooter";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import StaggeredMenu from "@/components/shared/StaggeredMenu/StaggeredMenu";

const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "About us", link: "/about-creative-light" },
    { label: "Career", ariaLabel: "Join our team", link: "/career-light" },
    { label: "Portofolio", ariaLabel: "View project portfolio", link: "/portfolio-showcase-light" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact-us-light" },
];

const socialItems = [
    { label: "Instagram", link: "https://instagram.com" },
    { label: "Behance", link: "https://behance.net" },
    { label: "LinkedIn", link: "https://linkedin.com" },
];
const PortfolioShowcaseMain = () => {
    return (
        <>
            <CursorAndBackgroundProvider bgColor="#ffffff" customClass="">
                <AnimationWrapper>

                    {/* Global Components */}
                    <BackToTop />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <Skiper30 />
                            </main>
                            <CreativeAgencyFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </>
    );
};

export default PortfolioShowcaseMain;
