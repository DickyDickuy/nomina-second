import {
    animationParagraph,
    brandImgAnim,
    buttonBounceAnimation,
    careerAnimation,
    contactBgAnimation,
    ctaAnimation,
    designAwardAnimation,
    designChooseAnimation,
    designProjectAnimation,
    eyeAnimation,
    funfactPanelAnimation,
    footerVerticalStretchAnim,
    gsapBackgroundAnim,
    heroAnimation,
    heroBgAnimation,
    imageRevealAnimation,
    innerServiceAnimation,
    panelAnimation,
    panelPinAnimation,
    perspectiveAnim,
    portfolioAnimation,
    portfolioItemPinAnimation,
    portfolioProjectAnimation,
    portfolioShowcaseAnimation,
    PortfolioSlicerAnimation,
    portfolioTitleAnimation,
    PPAboutAnimation,
    productBannerAnimation,
    projectDetailsAnim,
    revalEffectAnimation,
    scrollAnimation,
    scrollMovingText,
    servicePanelAnimation,
    setupTextHoverEffect,
    splitTextAnimation,
    studioProjectAnimation,
    teamAnimation,
    teamSectionAnimation,
    textInvertAnim1,
    textInvertAnim2,
    textInvertAnim3,
    textPerspectiveAnimation,
    textRevealAnimation,
    textRightScrollAnimation,
    videoAnimation,
    zoomInAnimation,
} from "@/hooks/useGsapAnimation";
import { parallaxSlider } from "@/utils/ParallaxSlider";
import { bounceAnimation, textBounceAnimation } from "@/utils/titleAnimation";

// Create a central animation configuration object
// Each key represents a route (page path)
// Each value is an array of animation functions to run on that route

export const animationConfig: Record<string, (() => void)[]> = {
    //home page animation
    "/": [
        textPerspectiveAnimation,
        studioProjectAnimation,
        textRevealAnimation,
        revalEffectAnimation,
        designProjectAnimation,
        textInvertAnim2,
        animationParagraph,
        scrollMovingText,
        textRightScrollAnimation,
        servicePanelAnimation,
        videoAnimation,
        teamAnimation,
        PortfolioSlicerAnimation,
        textInvertAnim3,
        footerVerticalStretchAnim,
    ],
    //design studio page
    "/design-studio": [
        animationParagraph,
        textRevealAnimation,
        revalEffectAnimation,
        scrollMovingText,
        textRightScrollAnimation,
        videoAnimation,
        designProjectAnimation,
        teamAnimation,
        teamSectionAnimation,
        textInvertAnim2,
        textInvertAnim3,
        footerVerticalStretchAnim,
    ],
    //digital marketing page
    "/digital-marketing": [zoomInAnimation],
    //design agency page
    "/design agency": [
        textRightScrollAnimation,
        designChooseAnimation,
        designProjectAnimation,
        designAwardAnimation,
        revalEffectAnimation,
        videoAnimation,
        textInvertAnim2,
    ],
    //creative agency page
    "/creative-agency": [
        funfactPanelAnimation,
        buttonBounceAnimation,
        servicePanelAnimation,
        textBounceAnimation,
        animationParagraph,
        bounceAnimation,
        textInvertAnim1,
        videoAnimation,
        panelAnimation,
    ],
    //unique-ai-image page
    "/unique-ai-image": [animationParagraph],
    //corporate agency page
    "/corporate-agency": [
        zoomInAnimation,
        scrollMovingText,
        panelAnimation,
        eyeAnimation,
    ],
    //mobile application page
    "/mobile-application": [panelPinAnimation, gsapBackgroundAnim],
    //IT solution page
    "/it-solution": [animationParagraph, splitTextAnimation],
    //crypto currency page
    "/cryptocurrency": [
        animationParagraph,
        textRevealAnimation,
        zoomInAnimation,
        heroBgAnimation,
    ],
    //startup agency page
    "/startup-agency": [
        animationParagraph,
        textRevealAnimation,
        portfolioTitleAnimation,
        ctaAnimation,
        buttonBounceAnimation,
    ],
    //fashion studio page
    "/fashion-studio": [
        imageRevealAnimation,
        portfolioProjectAnimation,
        zoomInAnimation,
    ],
    //personal portfolio page
    "/personal-portfolio": [
        animationParagraph,
        textRevealAnimation,
        setupTextHoverEffect,
        splitTextAnimation,
    ],
    //personal portfolio page
    "/shop-modern": [productBannerAnimation],
    //portfolio webgl showcase page
    "/portfolio-webgl-showcase": [parallaxSlider],
    //portfolio perspective slider page
    "/portfolio-perspective-slider-light": [
        revalEffectAnimation,
        perspectiveAnim,
    ],
    //portfolio horizontal showcase page
    "/portfolio-horizontal-showcase-light": [parallaxSlider],
    //portfolio slicer page
    "/portfolio-slicer-light": [PortfolioSlicerAnimation],
    //portfolio showcase page
    "/portfolio-showcase-light": [portfolioShowcaseAnimation, footerVerticalStretchAnim],
    //portfolio showcase page
    "/brand-showcase-light": [brandImgAnim],
    //about me page
    "/about-me-light": [
        setupTextHoverEffect,
        animationParagraph,
        PPAboutAnimation,
    ],
    //about me page
    "/about-us-light": [
        funfactPanelAnimation,
        textBounceAnimation,
        panelAnimation,
        footerVerticalStretchAnim,
    ],
    //about modern page
    "/about-modern-light": [scrollMovingText],
    //about creative page
    "/about-creative-light": [
        textRevealAnimation,
        animationParagraph,
        scrollMovingText,
        zoomInAnimation,
        teamAnimation,
        footerVerticalStretchAnim,
    ],
    //about startup page
    "/about-startup-light": [panelAnimation, eyeAnimation],
    //service-1 page
    "/service-1-light": [textPerspectiveAnimation, innerServiceAnimation],
    //service-2 page
    "/service-2-light": [
        servicePanelAnimation,
        innerServiceAnimation,
        panelAnimation,
        videoAnimation,
        textInvertAnim1,
    ],
    //service-3 page
    "/service-3-light": [scrollMovingText],
    //service-4 page
    "/service-4-light": [imageRevealAnimation, scrollMovingText],
    //service-details page
    "/service-details-light": [imageRevealAnimation],
    //service-details-2 page
    "/service-details-2-light": [imageRevealAnimation],
    //career-details page
    "/career-details-light": [careerAnimation],
    //team page
    "/team-light": [buttonBounceAnimation],
    //portfolio metro page
    "/portfolio-metro-light": [
        textRightScrollAnimation,
        designProjectAnimation,
        revalEffectAnimation,
        scrollMovingText,
        textInvertAnim2,
    ],
    //portfolio metro page
    "/portfolio-pinterest-light": [
        textPerspectiveAnimation,
        studioProjectAnimation,
        textRevealAnimation,
        videoAnimation,
    ],
    //portfolio details creative slider page
    "/portfolio-details-creative-slider-light": [portfolioItemPinAnimation],
    //portfolio details creative slider page
    "/portfolio-details-modern-light": [
        textRightScrollAnimation,
        scrollAnimation,
        textInvertAnim2,
    ],
    //portfolio details video page
    "/portfolio-details-video-light": [projectDetailsAnim],
    //shop with slider page
    "/shop-with-slider-light": [productBannerAnimation],
    //contact me page
    "/contact-me-light": [setupTextHoverEffect, animationParagraph],
    //contact me page
    "/contact": [contactBgAnimation],
    //registrasi page
    "/registrasi": [footerVerticalStretchAnim],
    // staggered menu additional pages
    "/career-light": [careerAnimation, footerVerticalStretchAnim],
    "/contact-us-light": [contactBgAnimation, footerVerticalStretchAnim],
    "/career-account-executive": [careerAnimation, footerVerticalStretchAnim],
    "/career-3d-designer": [careerAnimation, footerVerticalStretchAnim],
    "/job-application-form": [careerAnimation, footerVerticalStretchAnim],
};
