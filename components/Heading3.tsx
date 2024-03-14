import {FC} from "react";


interface Heading3Props {
    text: string;
}

const Heading3: FC<Heading3Props> = ({text}) => {
    return (
        <h1 className={"text-xl font-normal"}>
            {text}
        </h1>
    );
}

export default Heading3;