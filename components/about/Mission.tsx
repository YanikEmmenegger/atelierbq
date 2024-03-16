import {FC} from "react";
import Heading1 from "@/components/Heading1";


const Mission: FC = () => {
    return (
        <div className={"py-5"}>
            <Heading1 text={"Leitbild"}></Heading1>
            <p className={"text-lg pb-10 font-light"}>
                Unser Leitbild ist die Basis unserer Arbeit und unseres Handelns. Es ist uns wichtig und prägt unsere tägliche Arbeit.
            </p>
            <ul>
                <li>
                    <h3>Unsere Vision</h3>
                    <p>Wir wollen die Welt ein Stückchen besser machen.</p>
                </li>
                <li>
                    <h3>Unsere Mission</h3>
                    <p>Wir wollen die Welt ein Stückchen besser machen.</p>
                </li>
                <li>
                    <h3>Unsere Werte</h3>
                    <p>Wir wollen die Welt ein Stückchen besser machen.</p>
                </li>
            </ul>
        </div>

    );
}

export default Mission;