import Image from "next/image";
import clientsLogo from '@/public/assets/images/etc/clients.webp';

export default function compClientsLogo() {
    return(
        <div className={"py-12"}>
            <div className={"flex justify-center"}>
                <Image
                    src={clientsLogo}
                    alt={"Clients"}
                    width={1300}
                    height={50}
                />
            </div>
        </div>
    )
}