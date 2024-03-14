import {FC} from "react";


interface Heading2Props {
    text: string;
}

const Heading2: FC<Heading2Props> = ({text}) => {
    return (
        <h1 className={"text-3xl font-normal"}>
            {text}
        </h1>
    );
}

export default Heading2;