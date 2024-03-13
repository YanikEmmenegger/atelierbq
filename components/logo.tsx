import {FC} from "react";

interface LogoProps {
    fontSize: string;
}

const Logo: FC<LogoProps> = ({fontSize}) => {
    return (
        <div className='logo'>
            <h1 className={"text-5xl  text-normal font-thin"}>Atelier B²</h1>
            <h1 className={"text-5xl text-normal font-light"}>Atelier B²</h1>
            <h1 className={"text-5xl  text-normal font-normal"}>Atelier B²</h1>
        </div>
    );
}

export default Logo;