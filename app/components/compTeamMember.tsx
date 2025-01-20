import Image from "next/image";

type props = {
    image: string
    name: string
    alt: string
    arrowRotation: string
}

export default function CompTeamMember({image, name, alt, arrowRotation} : props) {
    return(
        <>
            <div className={"flex flex-row items-center space-x-4 px-8"}>
                <Image
                    src={image}
                    alt={alt}
                    width={100}
                    height={100}
                    quality={100}
                />
                <div className={"text-4xl font-light hover:text-orange-600"}>{name}
                    <span className={"rotate"}> {arrowRotation}</span>
                </div>
            </div>
        </>
    )
}