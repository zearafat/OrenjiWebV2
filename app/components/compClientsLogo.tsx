import Image from "next/image";
import clientsLogo from '@/public/assets/images/etc/clients.webp';

export default function compClientsLogo() {
    return(
        <section id={"ClientLogo"}>
            <div className={"sm:py-12 py-6"}>
                <div className={"flex justify-center"}>
                    <Image
                        src={clientsLogo}
                        alt="Clients"
                        sizes="100vw"
                        className="md:w-3/4 w-full" // w-full for mobile, md:w-3/4 for medium screens and up
                        quality={100}
                    />
                </div>
            </div>
        </section>
    )
}