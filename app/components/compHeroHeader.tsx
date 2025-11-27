type props = {
    headerText: string
}

export default function CompHeroHeader({headerText} : props) {
    return(
        <>
            <div>
                <h1 className={"sm:text-[48px] text-3xl font-bold tracking-tighter"}>
                    {headerText}
                    <span className={"text-orange-600"}>.</span>
                </h1>
            </div>
        </>
    )
}