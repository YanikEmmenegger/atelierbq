import {FC} from "react";


interface Heading1Props {
    text: string;
}

const Heading1: FC<Heading1Props> = ({text}) => {
    return (
        <h1 className={"text-4xl w-full mx-auto text-start md:text-5xl font-normal"}>
            {text}
        </h1>
    );
}

export default Heading1;