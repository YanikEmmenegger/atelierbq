'use client'
import {FC, useState} from "react";
import {RxCross1} from "react-icons/rx";
import {twMerge} from "tailwind-merge";

const Navigation2: FC = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={"p-5 flex w-full fixed top-0 left-0 justify-between items-center bg-AtelierBQ-Light z-40"}>
                <h1 className={"text-3xl  text-normal font-thin"}>Atelier B²</h1>
                <div onClick={() => setIsOpen(!isOpen)} id={"nav-opener"} className={""}>
                    <RxCross1
                        className={twMerge('hover:scale-105 transition-all duration-300', isOpen ? "rotate-0" : "rotate-45")}
                        fontSize={"50px"}/>
                </div>

            </div>
            <div
                className={twMerge('nav-content w-full h-[100vh] fixed ease-in-out bg-AtelierBQ-Light z-30 transition-all duration-300', isOpen ? 'visible opacity-100 right-0' : 'invisible opacity-0 -right-[100vw]')}>
                <div className={"flex flex-col justify-center items-center h-full"}>
                    <div className={"flex flex-col"}>
                        <h1 onClick={() => setIsOpen(!isOpen)}
                            className={"text-5xl p-5 cursor-pointer hover:underline"}>Home</h1>
                        <h1 onClick={() => setIsOpen(!isOpen)}
                            className={"text-5xl p-5 cursor-pointer hover:underline"}>Angebot</h1>
                        <h1 onClick={() => setIsOpen(!isOpen)}
                            className={"text-5xl p-5 cursor-pointer hover:underline"}>Über uns</h1>
                        <h1 onClick={() => setIsOpen(!isOpen)}
                            className={"text-5xl p-5 cursor-pointer hover:underline"}>Vision</h1>
                        <h1 onClick={() => setIsOpen(!isOpen)}
                            className={"text-5xl p-5 cursor-pointer hover:underline"}>Werte</h1>
                        <h1 onClick={() => setIsOpen(!isOpen)}
                            className={"text-5xl p-5 cursor-pointer hover:underline"}>Credo</h1>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation2;