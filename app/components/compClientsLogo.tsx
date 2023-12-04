import Image from "next/image";
import clientsLogo from '@/public/assets/images/etc/clients.webp';

export default function compClientsLogo() {
    return(
        <section id={"ClientLogo"}>
            <div className={"py-12"}>
                <div className={"flex justify-center"}>
                    <Image
                        src={clientsLogo}
                        alt={"Clients"}
                        sizes={"100vw"}
                        style={{ width: '75%', height: 'auto' }}
                        quality={100}
                    />
                </div>
            </div>
        </section>
    )
}