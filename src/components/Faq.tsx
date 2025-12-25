'use client';

import { useState } from "react";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Is the training free?",
            answer: "Yes, the live session is completely free. We believe everyone deserves access to clarity and purpose, which is why we offer this transformative session at no cost."
        },
        {
            question: " Will I get a recording of the session?",
            answer: "The session typically lasts 60-90 minutes, packed with valuable insights and actionable strategies."
        },
        {
            question: "What if I have never attended such sessions before?",
            answer: "No prior experience is needed. This session is designed for anyone seeking clarity and purpose, regardless of their background."
        },
        {
            question: "Will I get personal guidance?",
            answer: "No prior experience is needed. This session is designed for anyone seeking clarity and purpose, regardless of their background."
        },
        {
            question: "What do I need to bring?",
            answer: "Yes, registered participants will receive session materials and resources to support their journey forward."
        },
        {
            question: "I feel very lost — will this help me?",
            answer: "Absolutely! This session is specifically designed for people who are seeking clarity and haven't yet discovered their purpose."
        }
        ,
        {
            question: "I’m from a non-technical background. Will this still be useful?",
            answer: "Yes, registered participants will receive session materials and resources to support their journey forward."
        }
        ,
        {
            question: "Can I join if I’m working?",
            answer: "Yes, registered participants will receive session materials and resources to support their journey forward."
        }
        ,
        {
            question: "How do I join the session?",
            answer: "Yes, registered participants will receive session materials and resources to support their journey forward."
        }
        ,
        {
            question: "Will I receive materials after the session?",
            answer: "Yes, registered participants will receive session materials and resources to support their journey forward."
        }

    ];
    return (
        <section className="w-full flex flex-col gap-7 md:gap-15 fp max-container bg-background-light overflow-hidden">

            {/* First Row */}
            <div>
                <div className="flex flex-col gap-2">
                    <div className="text-lg">[ ask me queries ]</div>
                    <h2 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-[58px] font-big-shoulders font-semibold uppercase leading-none">Frequently Asked Questions</h2>
                </div>
            </div>
            {/* End First Row */}

            {/* Second Row */}
            <div className="flex flex-col 2xl:flex-row gap-8 md:gap-15 lg:gap-15 xl:gap-15 2xl:gap-8">
                <div className="w-full 2xl:w-[60%]">
                    <div className="space-y-5 md:space-y-8 2xl:space-y-10">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`relative ${index !== faqs.length - 1 ? 'pb-5 md:pb-8 2xl:pb-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[repeating-linear-gradient(to_right,#333_0_6px,transparent_6px_15px)]' : ''}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full flex items-center justify-between text-left"
                                >
                                    <span className="text-base md:text-xl lg:text-2xl font-big-shoulders font-bold capitalize text-[#333333] pr-4">
                                        {index + 1}. {faq.question}
                                    </span>
                                    <span className=" text-3xl text-[#333333] shrink-0">
                                        {openIndex === index ? '−' : '+'}
                                    </span>
                                </button>
                                {openIndex === index && (
                                    <p className="mt-4 text-[#4E4E4E] leading-relaxed">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full 2xl:w-[40%] flex flex-col sm:flex-row 2xl:flex-col gap-5 lg:gap-8">
                    <div className="w-full h-[250px] lg:h-[350px] 2xl:h-[50%] bg-background-dark rounded-[30px]"></div>
                    <div className="w-full h-[250px] lg:h-[350px] 2xl:h-[50%] bg-background-dark rounded-[30px]"></div>

                </div>
            </div>
            {/* End of Second Row */}
        </section>
    )
}