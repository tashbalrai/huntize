import { P14, P18 } from "../ui";

const Footer = () => {
    return (
        <footer className="w-full h-f bg-footerBg">
            <div className="flex flex-row text-footerText gap-8 ">
                <div className="flex flex-col pt-40 pl-28 justify-between h-full w-1/2">
                    <div>
                        <strong className="text-5xl font-bold">
                            Have an idea?, Let&apos;s talk.
                        </strong>
                        <P18 className="mt-8">
                            Or, just say hello. I love to hear from people.
                        </P18>
                        <P18 className="mt-4">vbalrai [at] gmail [.] com</P18>
                    </div>
                    <P14 className="font-normal pb-10">
                        Designed & developed by Vipan Balrai.
                    </P14>
                </div>
                <div className="flex flex-col gap-10 pt-40 pr-28 h-full">
                    <strong className="text-2xl font-bold underline">
                        Topics
                    </strong>
                    <div className="flex flex-col flex-wrap gap-4">
                        <ul>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                            <li>NodeJs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
