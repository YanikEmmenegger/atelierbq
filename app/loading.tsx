import {FC} from "react";


const Loading: FC = () => {
    return (
        <div className={"w-full h-[100vh] animate-pulse fixed left-0 top-0 flex items-center justify-center"}>
            <div>
                <h1 className={"text-5xl  text-normal font-thin"}>Atelier B²</h1>
                <h1 className={"text-5xl text-normal font-light"}>Atelier B²</h1>
                <h1 className={"text-5xl  text-normal font-normal"}>Atelier B²</h1>
            </div>
        </div>
    );
}

export default Loading;