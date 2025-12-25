import Image from "next/image";
import { title } from "process";
import GlowEffect from "./GlowEffect";

export default function Struggle() {
    const struggleData = [
        "Why they felt low or confused",
        "Can’t identify what excites them",
        "Have been conditioned to doubt themselves",
        "Follow others’ paths instead of their own",
        "Feel overwhelmed with choices",
        "Fear making the wrong move"
    ]

    const LeadsToData = [
        {
            title: "Confusion",
            icon: "/icons/confusion.svg",
            cardClass: "col-span-2 xl:col-span-1 xl:col-start-1 "

        },
        {
            title: "Self-Doubt",
            icon: "/icons/self-doubt.svg",
            cardClass: "col-span-2 col-start-3 xl:col-span-1 xl:col-start-2"

        },
        {
            title: "Procrastination",
            icon: "/icons/procrastination.svg",
            cardClass: "col-span-2 row-start-2 sm:col-start-5 sm:row-start-1 xl:col-span-1 xl:col-start-3"

        },
        {
            title: "Anxiety",
            icon: "/icons/anxiety.svg",
            cardClass: "col-span-2 col-start-3 row-start-2 sm:col-start-2 xl:col-span-1 xl:col-start-4 xl:row-start-1"

        },
        {
            title: "Feeling Stuck",
            icon: "/icons/stuck.svg",
            cardClass: "col-span-2 col-start-2 row-start-3 sm:col-start-4 sm:row-start-2 xl:col-span-1 xl:col-start-5 xl:row-start-1 "

        },
    ]
    return (
        <section className="relative flex flex-col items-center gap-10 md:gap-15 2xl:gap-25 max-container fp overflow-hidden">
            <GlowEffect className="top-30 -left-30" />
            <GlowEffect bgClass="bg-primary" opacity="opacity-50" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* First Row */}
            <div className="flex flex-col items-center gap-4 2xl:gap-8 font-big-shoulders">
                <h2 className="text-2xl md:text-[38px] lg:text-[46px] xl:text-4xl 2xl:text-[46px] text-white font-normal text-center md:text-left">You’re not lost. You’re just not guided.</h2>
                <div className="text-lg md:text-[26px] gold-text font-semibold">Most people struggle because they:</div>
            </div>
            {/* End of First Row */}

            {/* Second Row */}
            <div className="w-full xl:w-[85%] 2xl:w-[70%] grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-4 md:gap-10 2xl:gap-15 text-sm md:text-base lg:text-xl text-center z-1">
                {struggleData.map((item, index) => (
                    <div key={index} className="flex items-center justify-center bg-background-dark px-2 py-3 sm:px-4 sm:py-4 lg:px-11 lg:py-8 rounded-[15px] md:rounded-[30px]">
                        <div className="gold-text">{item}</div>
                    </div>
                ))}
            </div>
            {/* End of Second Row */}


            {/* Third Row */}
            <div className="flex flex-col items-center gap-10 md:gap-15 text-white">
                <div className="text-lg md:text-[25px] font-big-shoulders gold-text">This leads to:</div>
                <div className="w-full grid grid-cols-4 grid-rows-3 sm:grid-cols-6 sm:grid-rows-2 xl:grid-cols-5 xl:grid-rows-1 gap-10 md:gap-15 font-geist text-sm md:text-base lg:text-lg xl:text-base 2xl:text-lg">
                    {LeadsToData.map((item, index) => (
                        <div key={index} className={`relative ${item.cardClass}`}>
                            {/* Arrow - behind the card */}
                            {/* Arrow - behind the card */}
                            <Image
                                className={`absolute -right-[65px] -top-13 z-0
                                    ${index === 1 ? "hidden sm:block" : ""}
                                    ${index === 2 ? "block sm:hidden xl:block" : ""}
                                    ${index === 4 ? "hidden" : ""}
                                    ${index === 3 ? "right-[-20px] top-[50px] sm:-right-[65px] sm:-top-13 rotate-140 sm:rotate-0 " : undefined}
                                `}

                                src="/icons/arrow.svg"
                                alt="arrow"
                                width={114.54}
                                height={141.82}
                            />
                            {/* Card - in front */}
                            <div className={"relative flex flex-col items-center justify-center gap-2 bg-background-dark px-4 py-4 md:px-8 md:py-3 rounded-[20px] z-10"}>
                                <Image className="w-[24px] h-[24px] md:w-[26px] md:h-[26px]" src={item.icon} alt={item.title} width={26} height={26} />
                                <div>{item.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center lg:text-left">The Purpose Project breaks this cycle by giving you clarity, direction, and understanding of YOUR unique path.</p>
            </div>
            {/* End of Third Row */}
        </section>
    );
}