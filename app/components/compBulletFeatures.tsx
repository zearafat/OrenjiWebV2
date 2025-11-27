export default function CompBulletFeatures() {
    return(
        <>
            {/*BULLETS FEATURE*/}
            <div className={"sm:py-12 pb-8"}>

                <div className={"pb-8 sm:pt-0 pt-3"}>
                    <p className={"space-x-6 sm:flex flex-wrap justify-center text-xl"}>
                        We create brand personality that is impossible to forget, through creative branding, charming 3D illustration, and expressive interfaces.
                    </p>
                </div>

                <ul className="list-none p-0 m-0 flex flex-col sm:flex-row sm:justify-center flex-wrap gap-x-6 gap-y-2 text-xl">
                    <li className="flex items-center gap-3">
                        <svg className="shrink-0 w-3.5 h-3.5 text-orange-600" viewBox="0 0 16 12" fill="none"
                             aria-hidden="true">
                            <path d="M1 5.917 5.724 10.5 15 1.5" stroke="currentColor" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span><strong>3D Illustration</strong></span>
                    </li>
                    <li className="flex items-center gap-3">
                        <svg className="shrink-0 w-3.5 h-3.5 text-orange-600" viewBox="0 0 16 12" fill="none"
                             aria-hidden="true">
                            <path d="M1 5.917 5.724 10.5 15 1.5" stroke="currentColor" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span><strong>UI/UX Design</strong></span>
                    </li>
                    <li className="flex items-center gap-3">
                        <svg className="shrink-0 w-3.5 h-3.5 text-orange-600" viewBox="0 0 16 12" fill="none"
                             aria-hidden="true">
                            <path d="M1 5.917 5.724 10.5 15 1.5" stroke="currentColor" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span><strong>Creative Direction</strong></span>
                    </li>
                </ul>
            </div>
        </>
    )
}
