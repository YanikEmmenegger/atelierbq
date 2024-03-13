'use client'
import {FC, useState} from "react";
import {twMerge} from "tailwind-merge";
import NavItemLg from "@/components/navigation/NavItemLg";
import NavItemSm from "@/components/navigation/NavItemSm";
import {CiMenuBurger} from "react-icons/ci";
import Link from "next/link";


const Navigation: FC = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={"p-5 flex w-full fixed top-0 left-0 justify-between items-center bg-AtelierBQ-Light z-40"}>
                <Link onClick={()=>setIsOpen(false)} href={"/"}><h1 className={"text-3xl  text-normal font-thin"}>Atelier B²</h1></Link>
                <div className={"lg:flex gap-7 hidden"}>
                    {/*<NavItemLg href={"#"} active={true} text={"Home"}/>*/}
                    <NavItemLg href={"#"} active={false} text={"Projekte"}/>
                    <NavItemLg href={"#"} active={false} text={"Bauten"}/>
                    <NavItemLg href={"#"} active={false} text={"Über uns"}/>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} id={"nav-opener"} className={"lg:hidden"}>
                    <CiMenuBurger

                        className={twMerge('hover:scale-105 transition-all duration-300', isOpen ? "rotate-45" : "rotate-0")}
                        fontSize={"50px"}/>
                </div>

            </div>
            <div
                className={twMerge('nav-content w-full h-[100vh] fixed lg:hidden ease-in-out bg-AtelierBQ-Light z-30 top-0 transition-all duration-300', isOpen ? 'visible opacity-100 right-0' : 'invisible opacity-0 -right-[100vw]')}>
                <div className={"flex flex-col justify-center items-center h-full"}>
                    <div className={"flex flex-col"}>
                        {/*<NavItemSm href={"#"} active={true} text={"Home"} onClick={() => setIsOpen(!isOpen)}/>*/}
                        <NavItemSm href={"projects/"} active={false} text={"Projekte"} onClick={() => setIsOpen(false)}/>
                        <NavItemSm href={"#"} active={false} text={"Bauten"} onClick={() => setIsOpen(false)}/>
                        <NavItemSm href={"#"} active={false} text={"Über uns"} onClick={() => setIsOpen(false)}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;