'use client'
import {FC, useMemo, useState} from "react";
import {twMerge} from "tailwind-merge";
import NavItemLg from "@/components/navigation/NavItemLg";
import NavItemSm from "@/components/navigation/NavItemSm";
import {CiMenuBurger} from "react-icons/ci";
import Link from "next/link";
import {routesAvailable} from "@/routes";
import {usePathname} from "next/navigation";
import { motion } from "framer-motion";


const Navigation: FC = () => {

    const pathname = usePathname()

    const routes = useMemo(() => {
        return routesAvailable.map(route => {
            return {
                name: route.name,
                path: route.path,
                active: route.path === pathname
            }
        })
    }, [pathname])

    const [isOpen, setIsOpen] = useState(false)
    return (
        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ease: 'easeInOut',duration: 0.5}}>
            <div className={"px-10 py-5 flex w-full fixed top-0 left-0 justify-between items-center z-40 border-b-2 border-black border-opacity-10 bg-AtelierBQ-Light"}>
                <Link onClick={()=>setIsOpen(false)} href={"/"}><h1 className={"text-3xl  text-normal font-thin"}>Atelier B²</h1></Link>
                <div className={"lg:flex gap-7 hidden"}>
                    {
                        routes.map((route, index) => {
                            return <NavItemLg href={route.path} active={route.active} text={route.name} key={index}/>
                        })
                    }
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
                        {
                            routes.map((route, index) => {
                                return <NavItemSm onClick={()=>setIsOpen(false)} href={route.path} active={route.active} text={route.name} key={index}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Navigation;