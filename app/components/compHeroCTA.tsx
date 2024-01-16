import Link from "next/link";

export default function compHeroCTA() {
    return(
        <>
            {/*BUTTON CTA*/}
            <div className={"sm:py-4"}>
                <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}>
                    <button type="button"
                            className={"sm:px-[32px] sm:py-[22px] py-4 px-14 sm:text-xl text-lg tracking-tight font-medium text-center " +
                                "btn-gradient-orenji hover:shadow-xl hover:shadow-orange-200/50 hover:-translate-y-1 " +
                                "hover:scale-100 duration-300"}>
                        Start your dream project
                    </button>
                </Link>
                <p className={"pt-8"}>
                    <span className={"text-red-500"}>1 slot left. </span>
                    <span className={"text-slate-500"}>Want to talk first? </span>
                    <span className={"text-black"}><Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}>Get in touch <span className={"text-sm"}>→</span></Link></span>
                </p>
            </div>
        </>
    )
}