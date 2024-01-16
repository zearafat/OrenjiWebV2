import Image from "next/image";
import Link from "next/link";

import CompNavMenu from "@/app/components/compNavMenu";
import CompHeroHeader from "@/app/components/compHeroHeader";
import CompTeamMember from "@/app/components/compTeamMember"

// TEAM PHOTOS
import afif from "@/public/assets/team-photo/afif.webp"
import arya from "@/public/assets/team-photo/arya.webp"
import bagas from "@/public/assets/team-photo/bagas.webp"
import cheptari from "@/public/assets/team-photo/cheptari.webp"
import daniel from "@/public/assets/team-photo/daniel.webp"
import danin from "@/public/assets/team-photo/danin.webp"
import elsa from "@/public/assets/team-photo/elsa.webp"
import hans from "@/public/assets/team-photo/hans.webp"
import hega from "@/public/assets/team-photo/hega.webp"
import huda from "@/public/assets/team-photo/huda.webp"
import kamal from "@/public/assets/team-photo/kamal.webp"
import munir from "@/public/assets/team-photo/munir.webp"
import naufal from "@/public/assets/team-photo/naufal.webp"
import ocean from "@/public/assets/team-photo/ocean.webp"
import padilah from "@/public/assets/team-photo/padilah.webp"
import rezha from "@/public/assets/team-photo/rezha.webp"
import vetrick from "@/public/assets/team-photo/vetrick.webp"
import wahyu from "@/public/assets/team-photo/wahyu.webp"
import rizki from "@/public/assets/team-photo/rizki.webp"
import zea from "@/public/assets/team-photo/zea.webp"
import orenji from "@/public/assets/team-photo/orenji-team.webp"

import product_1 from "@/public/assets/products/product-1.webp"
import product_2 from "@/public/assets/products/product-2.webp"
import product_3 from "@/public/assets/products/product-3.webp"
import product_4 from "@/public/assets/products/product-4.webp"
import product_5 from "@/public/assets/products/product-5.webp"
import product_6 from "@/public/assets/products/product-6.webp"
import CompFAQ from "@/app/components/compFAQ";
import CompFooter from "@/app/components/compFooter";

export default function Page() {
    return(
        <div>
            <CompNavMenu/>
            <div className={"sm:p-12 py-12 px-6 sm:mt-12"}>
                <div className={"container mx-auto"}>
                    <div className={"sm:text-center text-left space-y-14"}>
                        <CompHeroHeader headerText={"What makes us special"}/>
                        <p className={"text-xl w-5/12 mx-auto leading-relaxed"}>There are tons of other similar services
                            out there. Then what make us stand out over the rest?</p>
                    </div>
                </div>
            </div>
            <div className={"pt-14 pb-24 relative"}>
                <div className="overflow-hidden whitespace-nowrap">
                    {/*1st Row Marquee*/}
                    <div className="animate-marquee-members-top flex sm:space-x-4 space-x-2 sm:mb-8 mb-4">
                        <CompTeamMember
                            image={afif.src}
                            alt={"afif"}
                            name={"Afif"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={zea.src}
                            alt={"zea"}
                            name={"Zea"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={arya.src}
                            alt={"arya"}
                            name={"Arya"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={bagas.src}
                            alt={"bagas"}
                            name={"Bagas"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={cheptari.src}
                            alt={"cheptari"}
                            name={"Cheptari"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={daniel.src}
                            alt={"daniel"}
                            name={"Daniel"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={danin.src}
                            alt={"danin"}
                            name={"Danin"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={elsa.src}
                            alt={"elsa"}
                            name={"Elsa"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={hans.src}
                            alt={"hans"}
                            name={"Hans"}
                            arrowRotation={"❯"}
                        />


                        <CompTeamMember
                            image={afif.src}
                            alt={"afif"}
                            name={"Afif"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={arya.src}
                            alt={"arya"}
                            name={"Arya"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={bagas.src}
                            alt={"bagas"}
                            name={"Bagas"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={cheptari.src}
                            alt={"cheptari"}
                            name={"Cheptari"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={daniel.src}
                            alt={"daniel"}
                            name={"Daniel"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={danin.src}
                            alt={"danin"}
                            name={"Danin"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={elsa.src}
                            alt={"elsa"}
                            name={"Elsa"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={hans.src}
                            alt={"hans"}
                            name={"Hans"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={rizki.src}
                            alt={"rizki"}
                            name={"Rizki"}
                            arrowRotation={"❯"}
                        />
                    </div>

                    <div className="animate-marquee-members-bottom flex sm:space-x-4 space-x-2 sm:mb-8 mb-4">
                        <CompTeamMember
                            image={hega.src}
                            alt={"hega"}
                            name={"Hega"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={wahyu.src}
                            alt={"wahyu"}
                            name={"Wahyu"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={huda.src}
                            alt={"huda"}
                            name={"Huda"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={kamal.src}
                            alt={"kamal"}
                            name={"Kamal"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={munir.src}
                            alt={"munir"}
                            name={"Munir"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={naufal.src}
                            alt={"naufal"}
                            name={"Naufal"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={ocean.src}
                            alt={"ocean"}
                            name={"Ocean"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={padilah.src}
                            alt={"padillah"}
                            name={"Padillah"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={rezha.src}
                            alt={"rezha"}
                            name={"Rezha"}
                            arrowRotation={"❮"}
                        />


                        <CompTeamMember
                            image={hega.src}
                            alt={"hega"}
                            name={"Hega"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={huda.src}
                            alt={"huda"}
                            name={"Huda"}
                            arrowRotation={"❯"}
                        />
                        <CompTeamMember
                            image={kamal.src}
                            alt={"kamal"}
                            name={"Kamal"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={munir.src}
                            alt={"munir"}
                            name={"Munir"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={naufal.src}
                            alt={"naufal"}
                            name={"Naufal"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={ocean.src}
                            alt={"cean"}
                            name={"Ocean"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={padilah.src}
                            alt={"padillah"}
                            name={"Padillah"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={rezha.src}
                            alt={"rezha"}
                            name={"Rezha"}
                            arrowRotation={"❮"}
                        />
                        <CompTeamMember
                            image={vetrick.src}
                            alt={"vetrick"}
                            name={"Vetrick"}
                            arrowRotation={"❮"}
                        />
                    </div>
                </div>
            </div>
            <div className={"container mx-auto space-y-14"}>
                <div>
                    <h2 className={"sm:text-4xl text-2xl font-bold tracking-tighter pb-10 w-5/12 mx-auto"}>
                        {"We are full team"}
                        <span className={"text-orange-600"}>.</span>
                    </h2>
                    <div className="w-5/12 mx-auto space-y-8">
                        <p className="text-lg">
                            Believe it or not, most agencies out there are run by just one person. They are
                            basically one-man shows. Some even claim to have a team, but really, all their team
                            members are outsourced from other countries.
                        </p>
                        <p className="text-lg">
                            Over here at Orenji Studio, we have got a full team of 10+ people. Everyone is from the
                            same country, Indonesia, so speed and language are not barriers when it comes to
                            delivering value to our clients. That is a stark contrast to those agencies with their
                            entire team outsourced from different countries at a lower cost.
                        </p>
                    </div>
                </div>
                <div className={"mx-40 text-center"}>
                    <Image src={orenji}
                           alt={"Orenji Team"}
                           width={1222}
                           height={473}
                           quality={100}
                    />
                </div>
            </div>
            <div className={"container mx-auto space-y-14"}>
                <div>
                    <h2 className={"sm:text-4xl text-2xl font-bold tracking-tighter pb-10 w-5/12 mx-auto"}>
                        {"We make our own design assets"}
                        <span className={"text-orange-600"}>.</span>
                    </h2>
                    <div className="w-5/12 mx-auto space-y-8">
                        <p className="text-lg">
                            While other agencies buy design assets or pay third-party outsourcers, we proudly create
                            our assets, in-house. Elsa and Wahyu are two of our best illustrators. We also have Danin
                            and Alzea as our top 3D illustrators.
                        </p>
                        <p className="text-lg">
                            Do not believe us? Just check out our products on marketplaces like UI8 and Icon Scout.
                            We are not just experts in UI/UX design; we are also great at creating design assets that
                            many of our customers love.
                        </p>
                        <div className={"flex flex-row space-x-4"}>
                            <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}>
                                <button type="button"
                                        className={"sm:px-[32px] sm:py-[22px] py-4 px-14 sm:text-xl text-lg tracking-tight font-medium text-center " +
                                            "btn-gradient-orenji hover:shadow-xl hover:shadow-orange-200/50 hover:-translate-y-1 " +
                                            "hover:scale-100 duration-300"}>
                                    Check UI8 ❯
                                </button>
                            </Link>
                            <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}>
                                <button type="button"
                                        className={"sm:px-[32px] sm:py-[22px] py-4 px-14 sm:text-xl text-lg tracking-tight font-medium text-center " +
                                            "btn-gradient-orenji hover:shadow-xl hover:shadow-orange-200/50 hover:-translate-y-1 " +
                                            "hover:scale-100 duration-300"}>
                                    Check Icon Scout ❯
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex flex-row space-x-2 py-20"}>
                <Image src={product_1}
                       alt={"product 1"}
                       width={326}
                       height={235}
                       quality={100}
                />
                <Image src={product_2}
                       alt={"product 2"}
                       width={326}
                       height={235}
                       quality={100}
                />
                <Image src={product_3}
                       alt={"product 3"}
                       width={326}
                       height={235}
                       quality={100}
                />
                <Image src={product_4}
                       alt={"product 4"}
                       width={326}
                       height={235}
                       quality={100}
                />
                <Image src={product_5}
                       alt={"product 5"}
                       width={326}
                       height={235}
                       quality={100}
                />
                <Image src={product_6}
                       alt={"product 6"}
                       width={326}
                       height={235}
                       quality={100}
                />
            </div>
            <div className={"container mx-auto space-y-14"}>
                <div>
                    <h2 className={"sm:text-4xl text-2xl font-bold tracking-tighter pb-10 w-5/12 mx-auto"}>
                        {"We charges fairly"}
                        <span className={"text-orange-600"}>.</span>
                    </h2>
                    <div className="w-5/12 mx-auto space-y-8">
                        <p className="text-lg">
                            If you think our rate is expensive, wait until you see how much other agencies will charge
                            you for essentially the same thing. Many agencies believe they have the right to charge very
                            high because they think they provide better value than us, when in reality it is just the same.
                            Cool agency website with fancy animation does not mean better value though.
                        </p>
                        <p className="text-lg">
                            We charge you fairly. We believe that if you are satisfied with our service (without feeling
                            being robbed), you will tell your friends or colleagues about us, which will ultimately bring
                            new clients to us. Additionally, unlike many others, we do not rely solely on service business.
                            We also sell our own products, remember? So we do not
                            have to rob our clients ;)
                        </p>
                    </div>
                </div>
            </div>
            {/*SECTION FAQ*/}
            <CompFAQ/>
            {/*SECTION FOOTER*/}
            <CompFooter/>
        </div>
    )
}