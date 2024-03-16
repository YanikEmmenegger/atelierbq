import {FC} from "react";
import {BsInstagram, BsTwitter} from "react-icons/bs";
import Link from "next/link";

interface FooterProps {

}

const Footer: FC<FooterProps> = ({}) => {


    return (
        <div className={"w-full bg-AtelierBQ-Dark text-AtelierBQ-Light bottom-0 pt-20 mt-32"}>
            <div className={"grid grid-cols-2 md:grid-cols-4 mx-auto text-center justify-between items-center w-4/5 h-auto pb-32"}>
                <div className={"pb-5 text-start"}>
                    <p>Beispielweg 3</p>
                    <p>3006 Bern</p>
                    <p>Schweiz</p>
                </div>
                <div className={"pt-5 flex gap-4 justify-center"}>
                    <BsInstagram className={"text-2xl"}/>
                    <BsTwitter className={"text-2xl"}/>
                </div>
                <div className={"pb-5 text-start"}>
                    <p className={"underline"}>Impressum</p>
                    <p className={"underline"}>Legals</p>
                    <p className={"underline"}>Kontakt</p>
                </div>
                <p className={"pb-5"}>© 2021 Atelier B²</p>
            </div>
            <div className={"mx-auto bottom-1 text-center items-center p-2"}><Link target={"_blank"} className={"underline opacity-30 font-thin"} href={"https://yanik.pro"}>
                Powered by Yanik</Link>
            </div>
        </div>
    );
}

export default Footer;