import {FC} from "react";

interface SkillProps {
    title: string;
    text: string;
    img: string;
}

const SkillItem: FC<SkillProps> = ({text, img, title}) => {
    return (
        <div>
            <div className={"p-5"}>
                <img src={img} alt={title} className={"mx-auto w-20 h-20"}/>
            </div>
            <div className={"bg-AtelierBQ-Light p-5"}>
                <h3 className={"text-center"}>{title}</h3>
                <p className={"p-5 font-thin"}>{text}</p>
            </div>
        </div>
    );
}

export default SkillItem;