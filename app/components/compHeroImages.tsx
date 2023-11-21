// app/components/compHeroImages.tsx
import Image from 'next/image'
import Porto1 from 'public/assets/images/portofolios/porto-1.webp'
import Porto2 from 'public/assets/images/portofolios/porto-2.webp'
import Porto3 from 'public/assets/images/portofolios/porto-3.webp'
import Porto4 from 'public/assets/images/portofolios/porto-4.webp'
import Porto5 from 'public/assets/images/portofolios/porto-5.webp'
import Porto6 from 'public/assets/images/portofolios/porto-6.webp'

export default function CompHeroImages() {
    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex space-x-4">
                <Image
                    src={Porto1}
                    alt={`Portfolio 1`}
                    width={660}
                    height={550}
                    layout="fixed"
                    className={"rounded-lg"}
                />
                <Image
                    src={Porto2}
                    alt={`Portfolio 2`}
                    width={660}
                    height={550}
                    layout="fixed"
                    className={"rounded-lg"}
                />
                <Image
                    src={Porto3}
                    alt={`Portfolio 3`}
                    width={660}
                    height={550}
                    layout="fixed"
                    className={"rounded-lg"}
                />
                <Image
                    src={Porto4}
                    alt={`Portfolio 4`}
                    width={660}
                    height={550}
                    layout="fixed"
                    className={"rounded-lg"}
                />
                <Image
                    src={Porto5}
                    alt={`Portfolio 5`}
                    width={660}
                    height={550}
                    layout="fixed"
                    className={"rounded-lg"}
                />
                <Image
                    src={Porto6}
                    alt={`Portfolio 6`}
                    width={660}
                    height={550}
                    layout="fixed"
                    className={"rounded-lg"}
                />
                <Image
                    src={Porto1}
                    alt={`Portfolio 1`}
                    width={660}
                    height={550}
                    layout="fixed"
                    className={"rounded-lg"}
                />
                <Image
                    src={Porto2}
                    alt={`Portfolio 2`}
                    width={660}
                    height={550}
                    layout="fixed"
                    className={"rounded-lg"}
                />
                <Image
                    src={Porto3}
                    alt={`Portfolio 3`}
                    width={660}
                    height={550}
                    layout="fixed"
                    className={"rounded-lg"}
                />
                <Image
                    src={Porto4}
                    alt={`Portfolio 4`}
                    width={660}
                    height={550}
                    layout="fixed"
                    className={"rounded-lg"}
                />
                <Image
                    src={Porto5}
                    alt={`Portfolio 5`}
                    width={660}
                    height={550}
                    layout="fixed"
                    className={"rounded-lg"}
                />
                <Image
                    src={Porto6}
                    alt={`Portfolio 6`}
                    width={660}
                    height={550}
                    layout="fixed"
                    className={"rounded-lg"}
                />
            </div>
        </div>
    );
}
