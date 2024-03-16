import {FC} from "react";
import Heading1 from "@/components/Heading1";


const Credo: FC = () => {
    return (
        <div className={"py-5"}>
            <Heading1 text={"Credo"}/>
            <p className={"text-lg pb-10 font-light"}>
                Bei Atelier B² glauben wir fest an die Kraft der Architektur, Lebensräume zu transformieren und das
                Wohlbefinden der Menschen zu verbessern. Unser Credo ist es, Ästhetik und Funktionalität harmonisch zu
                vereinen, indem wir nachhaltige Materialien und innovative Technologien einsetzen. Wir sehen jedes
                Projekt als eine Gelegenheit, nicht nur den Bedürfnissen der heutigen Gesellschaft gerecht zu werden,
                sondern auch einen bleibenden Wert für die Zukunft zu schaffen. Durch die enge Zusammenarbeit mit
                unseren Klienten streben wir danach, Räume zu erschaffen, die inspirieren, die Gemeinschaft fördern und
                eine tiefe Verbindung zur Natur herstellen. </p>
        </div>
    );
}

export default Credo;