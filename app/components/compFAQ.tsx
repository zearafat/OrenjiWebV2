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
                                        Most designs are ready within 1-3 business days, depending on complexity.

                                        Simple requests like social media posts? Usually done in a day.
                                        Bigger projects like full page designs? Expect 2-3 days for the first draft.

                                        We custom-create everything from scratch for you—no templates,
                                        no shortcuts. Just your unique design.
                                    </AccordionItem>
                                    <AccordionItem title={"How do we communicate during the project?"}>
                                        Slack, daily async, meetings when needed.
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
                                    <AccordionItem title={"Is there any refund?"}>
                                        <p>Due to the nature of custom creative work, we have a
                                        no-refund policy once a project has started.</p>
                                        <br />
                                        Here&apos;s why:
                                            <p>Once we begin working on your project, our team invests
                                        significant time in research, strategy, and custom design
                                        work specifically for you. This work cannot be resold or
                                        reused, which is why refunds aren&apos;t possible after we start.</p>
                                        <br />
                                        <p>HOWEVER, we ensure your satisfaction through:</p>
                                        <ul>
                                            <li>✓ Clear project scope before starting</li>
                                            <li>✓ Regular check-ins and feedback sessions</li>
                                            <li>✓ Revision rounds to get it right</li>
                                            <li>✓ Direct communication with your designer</li>
                                            <li>✓ Approval at each milestone</li>
                                        </ul>
                                        <br />
                                        <p>We&apos;re confident in our work quality, and our process
                                        ensures you get exactly what you need.</p>
                                    </AccordionItem>
                                    <AccordionItem title={"Is there any guarantee that your work will bring results?"}>
                                        <p><strong>Let&apos;s be honest:</strong> Design alone doesn&apos;t guarantee business results.</p>
                                        <br />
                                        <p>
                                            Design alone won&apos;t magically increase your sales or make your app go viral. There are many factors at play like your product,
                                            market fit, pricing, marketing, and timing.
                                        </p>
                                        <br />
                                        <strong>What design CAN do:</strong>
                                        <ul>
                                            <li>- Build credibility and trust</li>
                                            <li>- Make a strong first impression</li>
                                            <li>- Create better user experiences</li>
                                            <li>- Help you stand out from competitors</li>
                                            <li>- Create emotional bonding with your users</li>
                                        </ul>
                                        <br />
                                        <strong>What we guarantee:</strong>
                                        <ul>
                                            <li>✓ High-quality, professional work</li>
                                            <li>✓ Strategic design thinking</li>
                                            <li>✓ Honest feedback and collaboration</li>
                                            <li>✓ Designs that make you look good</li>
                                        </ul>
                                        <br />
                                        <p>
                                            You&apos;re not alone in figuring out the best way to present your
                                            product. We&apos;re your partners in making it look and feel amazing!
                                        </p>
                                    </AccordionItem>
                                    <AccordionItem title={"Why choose Orenji Studio over hiring in-house or freelancers?"}>
                                        <p>
                                            Finding a talented designer who can handle both creative work AND understand your business
                                            goals is incredibly difficult, whether you&apos;re hiring full-time or freelance.
                                        </p>
                                        <br />
                                        <p>
                                            Many designers claim expertise in UI/UX design, but you only discover
                                            their true capabilities after weeks of onboarding. If it doesn&apos;t work out, you&apos;re back to
                                            square one: <strong>recruiting, interviewing, and waiting.</strong>
                                        </p>
                                        <br />
                                        <p>
                                            With Orenji Studio, you skip the painful hiring process entirely. You get a full team of
                                            specialists: UI/UX designers, 3D artists, and developers who&apos;ve already proven their skills
                                            through our portfolio. No recruitment costs, no management overhead, no risk of someone quitting.
                                        </p>
                                        <br />
                                        <p>
                                            <strong>The result?</strong> You save thousands in hiring costs, get access to multiple skill
                                            sets for less than one designer&apos;s salary, and can start immediately. Plus, you can
                                            pause or cancel anytime if your needs change.
                                        </p>
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
