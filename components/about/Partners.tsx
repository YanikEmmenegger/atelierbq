'use client'
import { FC, useEffect, useState } from "react";
import Heading1 from "@/components/Heading1";
import { Partner } from "@/types/types";
import { mockPartner } from "@/mocks/partner";
import PartnerItem from "@/components/about/PartnerItem";

const Partners: FC = () => {
    const [partners, setPartners] = useState<Partner[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setPartners(mockPartner);
        }, 200);
    }, []);

    return (
        <div className='py-5'>
            <Heading1 text={"Partner"}/>
            <div className="flex flex-wrap justify-around mt-5">
                {partners.map((partner, index) => (
                    <div key={index} className="m-3" style={{ minWidth: 'calc(100% / 5 - 1.5rem)' }}> {/* Stellen Sie sicher, dass Sie den Abstand entsprechend anpassen */}
                        <PartnerItem href={partner.href} img={partner.img}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Partners;
