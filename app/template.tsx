'use client'
import {motion} from "framer-motion";
import {FC} from "react";

interface TemplateProps {
    children: React.ReactNode
}

const Template: FC<TemplateProps> = ({children}) => {
    return (
        <motion.div
            initial={{y: 20,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{ease: 'easeInOut',duration: 0.75}}>
            {children}
        </motion.div>
    );
}

export default Template;