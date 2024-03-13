'use client'
import {FC, useState} from "react";
import {RxCross1} from "react-icons/rx";
import {twMerge} from "tailwind-merge";


const Navigation: FC = () => {

    const [isopened, setIsopened] = useState(false)
    return (
        <>

            <div id={"nav-content"}>
                <div
                    className={twMerge('nav-content w-full bg-AtelierBQ-Light h-[100vh] fixed top-0  ease-in-out transition-all duration-300', isopened ? 'visible opacity-100 right-0' : 'invisible opacity-0 -right-[100vw]')}>
                    <div className={"flex flex-col justify-center items-center h-full"}>
                        <div className={"flex flex-col"}>
                            <h1 onClick={()=>setIsopened(!isopened)} className={"text-5xl p-5 cursor-pointer hover:underline"}>Home</h1>
                            <h1 onClick={()=>setIsopened(!isopened)} className={"text-5xl p-5 cursor-pointer hover:underline"}>Contact</h1>
                            <h1 onClick={()=>setIsopened(!isopened)} className={"text-5xl p-5 cursor-pointer hover:underline"}>About Us</h1>

                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => {
                setIsopened(!isopened)
            }} id={"nav-opener"} className={twMerge('nav p-4 cursor-pointer fixed right-0 top-0')}>
                <RxCross1 className={twMerge('hover:scale-105 transition-all duration-300', isopened ? "rotate-0" : "rotate-45")}
                          fontSize={"70px"}/>
            </div>
        </>
    );
}

export default Navigation;