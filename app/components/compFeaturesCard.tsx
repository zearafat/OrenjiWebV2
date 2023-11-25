import Image, {StaticImageData} from "next/image";

interface IPropsFeatureCard {
    image: StaticImageData | string;
    imageAlt: string;
    heading: string;
    description: string;
}

export default function CompFeaturesCard(props: IPropsFeatureCard) {
    return(
        <div className={"p-8 border rounded-xl hover:-translate-y-1 hover:border-orange-300 duration-300"}>
            <div className={"flex flex-row"}>
                <Image
                    src={props.image}
                    alt={props.imageAlt}
                    width={50}
                    height={50}
                    quality={100}
                />
                <h3 className={"font-semibold text-xl tracking-tight py-2 px-4"}>
                    {props.heading}
                </h3>
            </div>
            <p className={"text-slate-600 pt-2"}>
                {props.description}
            </p>
        </div>
    )
}