'use client'
import {FC, useState} from "react";
import {RxCross1} from "react-icons/rx";
import {twMerge} from "tailwind-merge";
import NavItemLg from "@/components/navigation/NavItemLg";
import NavItemSm from "@/components/navigation/NavItemSm";


const Navigation: FC = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={"p-5 flex w-full fixed top-0 left-0 justify-between items-center bg-AtelierBQ-Light z-40"}>
                <h1 className={"text-3xl  text-normal font-thin"}>Atelier B²</h1>
                <div className={"lg:flex gap-7 hidden"}>
                    <NavItemLg href={"#"} active={true} text={"Home"}/>
                    <NavItemLg href={"#"} active={false} text={"Angebot"}/>
                    <NavItemLg href={"#"} active={false} text={"Über uns"}/>
                    <NavItemLg href={"#"} active={false} text={"Vision"}/>
                    <NavItemLg href={"#"} active={false} text={"Werte"}/>
                    <NavItemLg href={"#"} active={false} text={"Credo"}/>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} id={"nav-opener"} className={"lg:hidden"}>
                    <RxCross1
                        className={twMerge('hover:scale-105 transition-all duration-300', isOpen ? "rotate-0" : "rotate-45")}
                        fontSize={"50px"}/>
                </div>

            </div>
            <div
                className={twMerge('nav-content w-full h-[100vh] fixed lg:hidden ease-in-out bg-AtelierBQ-Light z-30 top-0 transition-all duration-300', isOpen ? 'visible opacity-100 right-0' : 'invisible opacity-0 -right-[100vw]')}>
                <div className={"flex flex-col justify-center items-center h-full"}>
                    <div className={"flex flex-col"}>
                        <NavItemSm href={"#"} active={true} text={"Home"} onClick={() => setIsOpen(!isOpen)}/>
                        <NavItemSm href={"#"} active={false} text={"Angebot"} onClick={() => setIsOpen(!isOpen)}/>
                        <NavItemSm href={"#"} active={false} text={"Über uns"} onClick={() => setIsOpen(!isOpen)}/>
                        <NavItemSm href={"#"} active={false} text={"Vision"} onClick={() => setIsOpen(!isOpen)}/>
                        <NavItemSm href={"#"} active={false} text={"Werte"} onClick={() => setIsOpen(!isOpen)}/>
                        <NavItemSm href={"#"} active={false} text={"Credo"} onClick={() => setIsOpen(!isOpen)}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;