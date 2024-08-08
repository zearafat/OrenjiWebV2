'use client';
import React, { useState, ReactNode } from 'react';
import Link from "next/link";
import Image from 'next/image';
import faq from '@/public/assets/illustrations/faq.webp';

type AccordionItemProps = {
    title: string;
    children: ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                className="flex justify-between items-center w-full py-4 border-b"
                onClick={() => setIsOpen(!isOpen)}>
                <h2 className="text-lg font-medium text-left">{title}</h2>
                <span>{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && <div className="py-4">{children}</div>}
        </div>
    );
};

const Accordion: React.FC = () => {
    return (
        <section id={"FAQ"}>
            <div className={"sm:pt-24 pt-8"}>
                <div className={"bg-slate-50 sm:p-24 px-4 py-12"}>
                    <div className={"container mx-auto"}>
                        <div className={"sm:flex sm:flex-row"}>
                            <div className={"shrink"}>
                                <div className={"pb-4"}>
                                    <h2 className={"text-4xl font-bold pb-4"}>
                                        What. The. FAQ
                                    </h2>
                                    <p>
                                        Can’t find your answers? Talk to us:
                                        <span className={"text-orange-600 underline pl-2"}>
                                            <Link href={"mailto:orenjistudio@hey.com"}>
                                                orenjistudio@hey.com
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                                <div className={"py-4"}>
                                    <Image src={faq} alt={"FAQ"} width={500} />
                                </div>
                            </div>
                            <div className={"flex-auto px-2"}>
                                <div className="max-w-3xl mx-auto">
                                    <AccordionItem title={"Is it really unlimited requests?"}>
                                        Absolutely. After subscribing, you will have the ability to submit an unlimited
                                        number of design requests.
                                        These will be handled sequentially, in alignment with your prioritization.
                                    </AccordionItem>
                                    <AccordionItem title={"How fast will I receive my designs?"}>
                                        Updates will be provided within 1 to 3 business days, subject to the intricacy
                                        of the design.
                                        For instance, social media assets might be completed in 1 business day, whereas
                                        a comprehensive
                                        page design could require up to 3 days for the initial draft. Each design is
                                        uniquely crafted to your
                                        specifications, eschewing the use of pre-made templates.
                                    </AccordionItem>
                                    <AccordionItem title={"Can we have regular meetings?"}>
                                        No. They can take up a lot of time. All our interactions will be asynchronous
                                        via the
                                        Trello or Email to enhance workflow efficiency. However, should you require a
                                        more
                                        thorough explanation on any specific feature or feedback, feel free to create a
                                        detailed
                                        Loom video to delve into the particulars.
                                    </AccordionItem>
                                    <AccordionItem title={"How long does it take to complete a project?"}>
                                        It is really depends on the project&apos;s scope and complexity.
                                        Our <b>ESTIMATION </b>
                                        is about 1-3 months to finish small - medium project. Again, it&apos;s just an
                                        estimation. Not a fixed timeframe.
                                    </AccordionItem>
                                    <AccordionItem title={"What if I don't like the design?"}>
                                        No problem at all. You are entitled to unlimited revisions. We will continue
                                        refining the work until it meets your exact standards. Recognizing your passion
                                        for your
                                        project and the need for perfection, we are committed to doing whatever it takes
                                        to achieve that.
                                    </AccordionItem>
                                    <AccordionItem title={"What services do you offer?"}>
                                        We offer UI/UX design (Both mobile and/or web), custom illustrations (Both 2D
                                        and/or 3D),
                                        branding and visual identity design, logo design, icon design, graphic design,
                                        and social media design. All with
                                        dedicated Project Manager and Creative Director in charge.
                                    </AccordionItem>
                                    <AccordionItem title={"Do you also offer Development services?"}>
                                        Yes we do. We offer website development and mobile app (Flutter) development
                                        service,
                                        <strong> with an additional fee</strong>. Please talk to us for more info.
                                    </AccordionItem>
                                    <AccordionItem title={"Why not hire a freelancer, or a full-time designer?"}>
                                        Employing a designer can be both costly and time-intensive. It involves
                                        attracting
                                        suitable candidates, sifting through numerous applications, providing a
                                        competitive
                                        salary, benefits, and covering various recruitment expenses.
                                        <br/>
                                        <br/>
                                        Orenji Studio offers a streamlined alternative, bypassing the cumbersome hiring
                                        process.
                                        This approach saves you thousands of dollars monthly and enables immediate
                                        commencement of
                                        your required design work, ensuring progress from day one rather than enduring
                                        weeks or months of delay.
                                    </AccordionItem>
                                    <AccordionItem title={"What design software do you use?"}>
                                        We use mainly Figma for UI/UX design and Blender for 3D illustrations.
                                    </AccordionItem>
                                    <AccordionItem title={"Can I pause or cancel my subscription?"}>
                                        Of course you can. You can pause the subscription at any point of the project,
                                        and
                                        pick up where you left off when you are ready to continue. As for cancellation,
                                        absolutely. No question asked.
                                    </AccordionItem>
                                    <AccordionItem title={"Can I ask for a refund?"}>
                                        Sadly, we are unable to provide any money-back guarantee. The significant
                                        creative effort
                                        and research required to deliver top-quality designs in a brief timeframe mean
                                        we must ensure
                                        compensation for our time and effort.
                                        <br/>
                                        <br/>
                                        However, if you find yourself dissatisfied with our service
                                        (though such cases are exceedingly rare), we encourage you to tell us and we
                                        will strive
                                        to address your concerns to the best of our ability.
                                    </AccordionItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;
