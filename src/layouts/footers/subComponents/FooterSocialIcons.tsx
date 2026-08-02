import { FacebookSvg, InstagramSvg, LinkedinSvg, YouTubeSvg } from '@/svg';
import Link from 'next/link';

export const FooterSocialIcons = ({ className }: { className: string }) => {
    return (
        <div className={className}>
            <Link href="https://www.instagram.com/nomina.creative/" target="_blank" aria-label="Instagram">
                <span><InstagramSvg /></span>
            </Link>{" "}
            <Link href="https://www.linkedin.com/company/nomina-indonesia/" target="_blank" aria-label="LinkedIn">
                <span><LinkedinSvg width="18" height="18" /></span>
            </Link>{" "}
            <Link href="#" aria-label="YouTube">
                <span><YouTubeSvg /></span>
            </Link>{" "}
            <Link href="#" aria-label="Facebook">
                <span><FacebookSvg /></span>
            </Link>
        </div>
    );
};
export const FooterSocialIconsTwo = ({ className }: { className: string }) => {
    return (
        <div className={className}>
            <Link href="https://www.instagram.com/nomina.creative/" target="_blank" aria-label="Instagram">
                <span><InstagramSvg /></span>
            </Link>{" "}
            <Link href="https://www.linkedin.com/company/nomina-indonesia/" target="_blank" aria-label="LinkedIn">
                <span><LinkedinSvg width="18" height="18" /></span>
            </Link>{" "}
            <Link href="#" aria-label="YouTube">
                <span><YouTubeSvg /></span>
            </Link>{" "}
            <Link href="#" aria-label="Facebook">
                <span><FacebookSvg /></span>
            </Link>
        </div>
    );
};

