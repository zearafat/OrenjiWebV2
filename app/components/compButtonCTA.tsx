type ButtonProps = {
    label: string;
}

export default function CompButtonCTA({label} : ButtonProps) {
    return (
        <>
            <button type="button"
                    className={"text-white sm:px-[32px] sm:py-[22px] py-4 px-14 sm:text-xl text-lg tracking-tight " +
                        "font-medium text-center btn-gradient-orenji border-[0.5px]" +
                        "hover:scale-100 hover:-translate-y-1 duration-300 hover:shadow-lg hover:shadow-orange-300/50 rounded-2xl"}>
                {label}
            </button>
        </>
    )
}