import { title } from "process";
import GlowEffect from "./GlowEffect";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";

interface Cycle {
    title: string;
    rounded: "left" | "right";
    cycleClass: string;
}
const cycle: Cycle[] = [
    {
        title: "A powerful self-discovery\nexercise to uncover\nhidden strengths",
        rounded: "left",
        cycleClass: "md:top-0 md:left-10 lg:left-30 xl:top-5  2xl:top-10 xl:left-60 col-start-1 row-start-1 col-span-2 row-span-1 sm:col-span-1"
    }
    ,
    {
        title: "How to evaluate career\noptions with a clarity-\nfirst mindset",
        rounded: "left",
        cycleClass: "md:top-35 md:left-0 lg:top-40 lg:left-20 xl:top-50 xl:left-35 2xl:top-60 2xl:left-45 col-start-1 row-start-2 col-span-2 row-span-1 sm:col-span-1"
    },
    {
        title: "The one clarity question \n that instantly shifts your \n thinking",
        rounded: "left",
        cycleClass: "md:top-70 md:-left-5 lg:top-80 lg:left-0 xl:top-95 xl:left-20 2xl:top-110 col-start-1 row-start-3 col-span-2 row-span-1 sm:col-span-1 sm:col-start-2 sm:row-start-1"
    },
    {
        title: "Understanding identity,\n purpose, and energy \n alignment",
        rounded: "right",
        cycleClass: "md:-top-10 md:right-55 xl:-top-5 xl:right-70 2xl:top-0 2xl:right-60 col-start-2 row-start-4 col-span-2 row-span-1 sm:col-span-1 sm:col-start-2 sm:row-start-3"
    },
    {
        title: " How to find your “why” \n without confusion",
        rounded: "right",
        cycleClass: "md:top-18 md:right-10 lg:top-25 xl:top-30 xl:right-30 2xl:top-40 2xl:right-10 col-start-3 row-start-1 col-span-2 row-span-1 sm:col-span-1 sm:col-start-2 sm:row-start-2"
    },
    {
        title: "Understanding identity,\n purpose, and energy \n alignment",
        rounded: "right",
        cycleClass: "md:top-45 md:right-0 lg:top-55  xl:top-65 xl:right-20 2xl:top-80 2xl:right-10 col-start-3 row-start-2 col-span-2 row-span-1 sm:col-span-1 sm:col-start-3 sm:row-start-1"
    },
    {
        title: " Reflection tasks + a \n guided breakthrough \n moment",
        rounded: "right",
        cycleClass: "md:top-75 md:right-10 lg:top-90 lg:right-20 xl:top-100 xl:right-55 2xl:top-120 2xl:right-55 col-start-3 row-start-3 col-span-2 row-span-1 sm:col-span-1 sm:col-start-3 sm:row-start-2"
    }
]

const learnData = [
    {
        title: "A guided journey into self-awareness",
        subText: "You will understand the root of your thoughts, behaviors, choices, and strengths through scientifically backed reflection tools.",
        learnClass: "sm:col-span-2 xl:col-span-1 xl:col-start-1 xl:row-start-1",
    },
    {
        title: "Your strength blueprint",
        subText: "Learn how to identify natural strengths you’ve never noticed - strengths shaped by your personality, patterns, and lived experiences.",
        learnClass: "sm:col-span-2 xl:col-span-1 xl:col-start-2 xl:row-start-1",
    },
    {
        title: "The energy alignment method",
        subText: "Understand what drains you emotionally vs what energizes and excites you — crucial for choosing a career direction you can sustain long-term.",
        learnClass: "sm:col-span-2 xl:col-span-1 xl xl:col-start-3 xl:row-start-1",
    },
    {
        title: "Your earnable passion zone",
        subText: "A practical insight on how to align what you love, what you’re good at, and what the world pays for — without unrealistic expectations.",
        learnClass: "sm:col-span-2 xl:col-span-1 xl:col-start-1 xl:row-start-2",
    },
    {
        title: "Breaking limiting beliefs & conditioning",
        subText: "Learn why you feel low confidence, imposter syndrome, or self-doubt — and how to begin rewiring these patterns.",
        learnClass: "sm:col-span-2 xl:col-span-1 xl:col-start-2 xl:row-start-2",
    },
    {
        title: "The confidence loop framework",
        subText: "Understand how confidence is built through small wins, evidence, and alignment — not motivation.",
        learnClass: "sm:col-span-2 xl:col-span-1 xl:col-start-3 xl:row-start-2",
    }, {
        title: "Your 30-day purpose plan",
        subText: "A simple, clear guide on where to begin, what to do next, and how to build momentum.",
        learnClass: "sm:col-span-2 sm:col-start-2 xl:col-span-1 xl:col-start-2 xl:row-start-3",
    }
]
function Cycle({ title, rounded, cycleClass }: Cycle) {
    const isLeft = rounded === "left";

    return (
        <div className={`md:absolute bg-background-dark rounded-t-[15px] md:rounded-t-[20px] ${isLeft ? "rounded-bl-[15px] md:rounded-bl-[20px]" : "rounded-br-[15px] md:rounded-br-[20px]"}  p-4 md:p-5 lg:p-6  sm:whitespace-pre-wrap ${cycleClass}`}>
            {title}
        </div>
    );
}


export default function Curriculum() {


    return (
        <section className="relative flex flex-col items-center   fpt bg-background max-container text-white overflow-hidden">
            <GlowEffect className="top-1/2 -left-30 -translate-y-1/2" />
            <GlowEffect className="top-1/2 -right-30 -translate-y-1/2" />
            <div className="flex flex-col gap-10 md:gap-19 fpx items-center">
                {/* First Row */}
                <div className="flex flex-col items-center gap-6 font-big-shoulders">
                    <h2 className="text-3xl md:text-[46px] xl:text-5xl 2xl:text-[64px] gold-text">WHAT YOU WILL LEARN</h2>
                    <div className="w-full md:w-[70%] 2xl:w-[60%] text-2xl md:text-4xl 2xl:text-[46px] text-center leading-tight">What you will experience inside the FREE live session</div>
                </div>
                {/* End of First Row */}

                {/* Second Row */}
                <div className="relative flex flex-col items-center gap-10 md:gap-14">
                    <GlowEffect className="top-1/3 left-1/3 -translate-x-1/3 -translate-y-1/3" />
                    <GlowEffect className="top-1/3 right-1/3 translate-x-1/3 -translate-y-1/3" />
                    <div className="grid grid-cols-1 grid-rows-7 sm:grid-cols-4 sm:grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-4 xl:grid-cols-3 xl:grid-rows-3 gap-5 md:gap-9 z-1">

                        {learnData.map((learn, index) => {
                            return (
                                <div key={index} className={`flex flex-col gap-5 bg-background-dark rounded-[15px] md:rounded-[20px] p-6 ${learn.learnClass}`}>
                                    <div className="text-lg md:text-[25px] font-big-shoulders gold-text leading-tight">{index + 1}. {learn.title}</div>
                                    <p>{learn.subText}</p>
                                </div>
                            );


                        })}

                        <div className="hidden sm:flex justify-end items-center col-start-1 row-start-3 sm:row-start-4 xl:col-start- xl:row-start-3">
                            <Image className="w-[45%] lg:w-[40%] xl:w-[30%] 2xl:w-[102.5px] 2xl:h-[119.23px]" src="/icons/hand-drawn.svg" alt="curriculum" width={102.5} height={119.23} />
                        </div>

                        <div className="hidden sm:flex justify-center items-center col-start-3 row-start-3 sm:col-start-4 sm:row-start-4 xl:col-start-3 xl:row-start-3 ">
                            <Image className="w-[75%] md:w-[60%] xl:w-[40%] 2xl:w-[150px] 2xl:h-[155.46px]" src="/icons/spark-multi.svg" alt="curriculum" width={150} height={155.46} />
                        </div>
                    </div>

                    <PrimaryButton> I Want This Clarity</PrimaryButton>
                </div>
                {/* End of Second Row */}

                {/* Third Row */}
                <div className="w-full flex flex-col items-center gap-10 md:gap-16">
                    <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%] text-2xl md:text-4xl 2xl:text-[46px] font-big-shoulders text-center">Why most people feel stuck and how to break the cycle</div>

                    <div className="relative w-full grid grid-cols-4 grid-rows-[repeat(4, auto)] sm:grid-cols-3 sm:grid-rows-3 grid-flow-col gap-4 md:flex md:justify-center pt-0 md:pt-22 text-xs lg:text-sm 2xl:text-base capitalize">
                        <Image className="w-full sm:w-[90%] md:w-[45%] xl:w-[40%] 2xl:w-[587px] h-auto 2xl:h-[616px] col-span-4 row-span-1 row-start-5 col-start-1 sm:col-start-2  z-1" src="/images/young-woman.webp" alt="curriculum" width={587} height={616} />
                        <GlowEffect className="top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/3" />
                        <Image className="absolute top-113 left-40 mmd:top-100 mmd:left-45 mlg:left-55 sm:top-85 sm:left-95 md:top-20 md:left-88 lg:top-25 lg:left-120 xl:top-20 xl:left-145 2xl:top-20 2xl:left-1/2 w-[12%] sm:w-[8%] md:w-[6%] xl:w-[4%] 2xl:w-[39.14px] 2xl:h-[51px]" src="/icons/exclamation-mark.svg" alt="Exclamation Mark" width={39.14} height={51} />

                        {cycle.map((item, index) => (
                            <Cycle key={index} title={item.title} rounded={item.rounded} cycleClass={item.cycleClass} />
                        ))}

                    </div>
                </div>
                {/* End of Third Row */}


            </div>
            <div className="w-full flex flex-col items-center gap-2 md:gap-0 fp font-big-shoulders bg-background-light">
                <h2 className="text-3xl md:text-[46px] 2xl:text-[64px]  text-primary">WHAT YOU WILL LEARN</h2>
                <div className="text-lg md:text-[25px] text-text text-center md:text-left font-semibold">See the transformation you’ll experience in just one session</div>
            </div>
        </section>
    );
}
