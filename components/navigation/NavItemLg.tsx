import {FC} from "react";
import Link from "next/link";
import {twMerge} from "tailwind-merge";

interface NavItemLgProps {
    active: boolean;
    text: string;
    href: string;
}

const NavItemLg: FC<NavItemLgProps> = ({active, text, href}) => {
    return (
        <Link href={href}>
            <p className={twMerge("text-lg transition-colors duration-700 ease-linear hover:underline pointer px-3 py-2", active ? "bg-AtelierBQ-AccentLight": "")}>{text}</p>
        </Link>
    );
}

export default NavItemLg;