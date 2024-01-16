export default function compBulletFeatures() {
    return(
        <>
            {/*BULLETS FEATURE*/}
            <div className={"sm:py-12 py-6"}>
                <div className={"sm:hidden block"}>
                    <p>{"Unlimited revisions. Unlimited requests. Cancel anytime."}</p>
                </div>
                <ul className={"space-x-6 sm:flex flex-wrap justify-center hidden text-xl"}>
                    <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                        <svg className={"flex-shrink-0 w-3.5 h-3.5 text-orange-600"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>Unlimited revisions</span>
                    </li>
                    <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                        <svg className={"flex-shrink-0 w-3.5 h-3.5 text-orange-600"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>Unlimited requests</span>
                    </li>
                    <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                        <svg className={"flex-shrink-0 w-3.5 h-3.5 text-orange-600"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>Cancel or pause anytime</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
