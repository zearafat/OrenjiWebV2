import Image from "next/image";
import servicesIllustration from "@/public/assets/illustrations/services-circle.webp";

export default function CompServices() {
    return (
        <section className={"py-16 sm:py-24"}>
            <div className={"container mx-auto px-4"}>
                <div className={"max-w-5xl mx-auto"}>
                    <div className={"relative"}>
                        <div className={"relative w-full mx-auto"}>
                            <Image
                                src={servicesIllustration}
                                alt="3D illustration showing Orenji Studio's services with characters and design tools"
                                width={2000}
                                height={2000}
                                quality={100}
                                className={"w-full h-auto"}
                                priority={false}
                            />
                        </div>
                        <div className={"absolute inset-0 flex items-center justify-center"}>
                            <div className={"text-center px-4"}>
                                <p className={"text-sm sm:text-lg text-slate-600 mb-2 sm:mb-3"}>
                                    What we do best
                                </p>
                                <h2 className={"text-sm sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight leading-tight"}>
                                    UI/UX, <span className={"text-orange-600"}>3D Illustration,</span>
                                    <br />
                                    Animation, Branding,
                                    <br />
                                    Web Development
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}