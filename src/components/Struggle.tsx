import Image from "next/image";
import { title } from "process";

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

        },
        {
            title: "Self-Doubt",
            icon: "/icons/self-doubt.svg",

        },
        {
            title: "Procrastination",
            icon: "/icons/procrastination.svg",

        },
        {
            title: "Anxiety",
            icon: "/icons/anxiety.svg",

        },
        {
            title: "Feeling Stuck",
            icon: "/icons/stuck.svg",

        },
    ]
    return (
        <section className="flex flex-col items-center gap-25 max-container fp">
            {/* First Row */}
            <div className="flex flex-col items-center gap-8 font-big-shoulders">
                <h2 className="text-[46px] text-white font-normal">You’re not lost. You’re just not guided.</h2>
                <div className="text-[26px] gold-text font-semibold">Most people struggle because they:</div>
            </div>
            {/* End of First Row */}

            {/* Second Row */}
            <div className="w-[70%] grid grid-cols-3 grid-rows-2 gap-15 text-xl text-center">
                {struggleData.map((item, index) => (
                    <div key={index} className="flex items-center justify-center bg-background-dark px-11 py-8 rounded-[30px]">
                        <div className="gold-text">{item}</div>
                    </div>
                ))}
            </div>
            {/* End of Second Row */}


            {/* Third Row */}
            <div className="flex flex-col items-center gap-15 text-white">
                <div className="text-[25px] font-big-shoulders gold-text">This leads to:</div>
                <div className="grid grid-cols-5 grid-rows-1 gap-15 font-geist text-lg">
                    {LeadsToData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-2 bg-background-dark px-8 py-3 rounded-[20px]">
                            <Image src={item.icon} alt={item.title} width={26} height={26} />
                            <div>{item.title}</div>
                        </div>
                    ))}
                </div>
                <p>The Purpose Project breaks this cycle by giving you clarity, direction, and understanding of YOUR unique path.</p>
            </div>
            {/* End of Third Row */}
        </section>
    );
}