import Link from "next/link";
import CompButtonCTA from "@/app/components/compButtonCTA";

export default function CompHeroCTA() {
    return(
        <>
            {/*BUTTON CTA*/}
            <div className={"sm:py-4"}>
                <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}>
                    <CompButtonCTA label={"Start your dream project ✨"} />
                </Link>
                <p className={"pt-8"}>
                    <span className={"text-red-500"}>1 slot left. </span>
                    <span className={"text-slate-500"}>Want to talk first? </span>
                    <span className={"text-black"}>
                        <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}>Get in touch <span className={"text-sm"}>→</span></Link>
                    </span>
                </p>
            </div>
        </>
    )
}