import {FC} from "react";
import Link from "next/link";
import {twMerge} from "tailwind-merge";

interface NavItemSmProps {
    onClick: () => void;
    text: string;
    href: string;
    active: boolean;
}

const NavItemSm: FC<NavItemSmProps> = ({onClick, text, active, href}) => {
    return (
        <Link onClick={onClick} href={href}>
            <h1
                className={twMerge("text-5xl my-5 cursor-pointer hover:underline font-light", active ? "" : "")}>{text}</h1>
        </Link>
    );
}

export default NavItemSm;