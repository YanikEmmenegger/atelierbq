import {FC} from "react";
import Link from "next/link";
import Image from "next/image";

interface PartnerItemProps {
    href: string;
    img: string;
}

const PartnerItem: FC<PartnerItemProps> = ({href, img}) => {
    return (
        <div className={"cursor-pointer"}>
            <Link target={"_blank"} href={href}>
                <Image src={img} alt={"Partner Image"} width={150} height={150} className={"cursor-pointer"}/>
            </Link>
        </div>
    );
}

export default PartnerItem;