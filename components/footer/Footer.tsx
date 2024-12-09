import Link from "next/link";
import { P14, P18 } from "../ui";
import {
    FaLinkedin,
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaRss,
} from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-full tablet:h-f bg-footerBg py-10 tablet:py-20">
            <div className="flex flex-col tablet:flex-row text-footerText gap-8 h-full w-3/4 mx-auto">
                <div className="flex flex-col justify-between h-full w-full">
                    <div className="flex flex-col gap-4">
                        <strong className="text-5xl font-bold">
                            Have an idea?, Let&apos;s talk.
                        </strong>
                        <P18>
                            Or, just say hello. I love to hear from people.
                        </P18>
                        <P18 className="mt-10">vbalrai [at] gmail [.] com</P18>
                        <div className="flex flex-rows gap-3 mt-10">
                            <FaLinkedin style={{ fontSize: "1.875rem" }} />
                            <FaFacebook style={{ fontSize: "1.875rem" }} />
                            <FaYoutube style={{ fontSize: "1.875rem" }} />
                            <FaTwitter style={{ fontSize: "1.875rem" }} />
                            <FaMedium style={{ fontSize: "1.875rem" }} />
                            <FaRss style={{ fontSize: "1.875rem" }} />
                        </div>
                    </div>
                    <P14 className="font-normal pb-10 mt-4 max-tablet:hidden">
                        Designed & developed by Vipan Balrai.
                    </P14>
                </div>
                <nav
                    className="flex flex-col gap-10 h-full"
                    aria-label="footer links"
                >
                    <h3 className="text-2xl font-bold underline">Topics</h3>
                    <ul className="flex flex-col tablet:flex-row flex-wrap w-full gap-4 text-xl">
                        <li className="hover:underline whitespace-nowrap">
                            <Link href="/node">Artificail Intelligency</Link>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <Link href="/node">Machine Learning</Link>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <Link href="/node">Data Science</Link>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <Link href="/node">
                                Data Structures & Algorithms
                            </Link>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <Link href="/node">NodeJS</Link>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <Link href="/node">Javascript</Link>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <Link href="/node">Typescript</Link>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <Link href="/node">Java</Link>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <Link href="/node">Cloud</Link>
                        </li>
                        <li className="hover:underline whitespace-nowrap">
                            <Link href="/node">System Design</Link>
                        </li>
                    </ul>
                </nav>
                <P14 className="font-normal pb-10 mt-4 tablet:hidden">
                    Designed & developed by Vipan Balrai.
                </P14>
            </div>
        </footer>
    );
};

export default Footer;
