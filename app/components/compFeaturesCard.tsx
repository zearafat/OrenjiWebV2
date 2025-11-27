import Image, { StaticImageData } from "next/image";

/**
 * Props interface for the FeatureStory component
 * @property image - Large 3D character illustration
 * @property imageAlt - Descriptive alt text for accessibility
 * @property heading - Feature title
 * @property description - Feature explanation
 * @property imagePosition - Controls layout direction (left or right)
 */
interface IPropsFeatureStory {
    image: StaticImageData | string;
    imageAlt: string;
    heading: string;
    description: string;
    imagePosition?: 'left' | 'right';
}

/**
 * CompFeatureStory Component
 * Large feature section with 3D character illustration and text content
 * Supports alternating left/right layouts for visual storytelling
 * Responsive: Stacks vertically on mobile, horizontal on desktop
 */
export default function CompFeatureStory(props: IPropsFeatureStory) {
    // Determine if image should be on left side (default) or right
    const isImageLeft = props.imagePosition === 'left' || !props.imagePosition;

    return (
        <div className={`
            flex flex-col gap-6
            sm:flex-row sm:items-center
            ${!isImageLeft ? 'sm:flex-row-reverse' : ''}
        `}>

            {/* 3D Character Illustration Side */}
            <div className={"flex-1 flex justify-center"}>
                {/* Image container with max width for proportional scaling */}
                <div className={"relative w-full max-w-md sm:max-w-lg"}>
                    <Image
                        src={props.image}
                        alt={props.imageAlt}
                        width={700}
                        height={700}
                        quality={100}
                        className={"w-full h-auto"}
                        // Set priority={true} if this is above the fold
                        priority={false}
                    />
                </div>
            </div>

            {/* Text Content Side */}
            <div className={"flex-1 max-w-xl"}>
                {/* Feature Heading */}
                <h3 className={`
                    font-bold text-2xl sm:text-3xl
                    tracking-tight
                    mb-3 sm:mb-4
                    `}>
                {props.heading}
                    </h3>

                {/* Feature Description */}
                <p className={`
                    text-slate-600
                    text-base sm:text-lg
                    leading-relaxed
                    `}>
                {props.description}
                    </p>
                    </div>
                    </div>
                    );
                }
