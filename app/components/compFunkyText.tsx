type Props = {
    label: string
    className: string
}

export default function CompFunkyText({label, className} : Props) {
    return (
        <>
            <p className={""}>
                <span className={className}>
                    {label}
                </span>
            </p>
        </>
    )
}