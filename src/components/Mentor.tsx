import PrimaryButton from "./PrimaryButton";
import CheckListItem from "./CheckListItem";
import Image from "next/image";
import GlowEffect from "./GlowEffect";


export default function Mentor() {
    const checkListItems = [
        "Eye-opening",
        "Transformative",
        "Safe",
        "Guided",
        "Practical",
        "Life-shifting",
    ];
    return (
        <section className=" flex flex-col fp max-container gap-6 md:gap-0 overflow-hidden">

            {/* First Row */}
            <div className="relative grid grid-cols-8 grid-rows-[repeat(9,auto)] gap-5 md:gap-8 text-white ">
                <Image className='absolute bottom-50 left-5 sm:bottom-50 sm:left-20 md:left-0 xl:bottom-0 2xl:bottom-6 2xl:left-0 w-[30%] sm:w-[18%] md:w-[13%] lg:w-[10%] xl:w-[7%] 2xl:w-[60.9px] 2xl:h-[61.25px]' src="/icons/swirl.svg" alt="Swirl" width={60.9} height={61.25} />
                <Image className='absolute top-10 right-5 md:top-50 md:right-0 sm:top-15 sm:right-20 xl:-top-5 xl:right-0 2xl:top-0 2xl:right-0 w-[25%] sm:w-[18%] md:w-[13%] lg:w-[10%] xl:w-[6%] 2xl:w-[75.76px] 2xl:h-[68.61px]' src="/icons/spark.svg" alt="Spark" width={75.76} height={68.61} />
                <GlowEffect className="top-0 left-30" />
                <GlowEffect className="bottom-0 right-30" />
                <GlowEffect bgClass="bg-[#4399E2]" className="top-0 right-0" />

                {/* Grid 1 */}
                <div className="h-[220px] sm:h-[300px] lg:h-[350px] xl:h-auto bg-amber-100 col-span-4 row-span-3 md:col-span-3 md:row-span-5 xl:col-span-2  xl:row-span-7 rounded-b-full border-l-16 border-b-8 border-accent z-1"></div>
                {/* End of Grid 1 */}

                {/* Grid 2 */}
                <div className="h-[220px] sm:h-[300px] lg:h-[350px] xl:h-auto bg-amber-100 col-span-4 row-span-3 col-start-5 row-start-6 md:col-span-3 md:row-span-5 md:col-start-6 md:row-start-5 xl:col-span-2 xl:row-span-7 xl:col-start-7 xl:row-start-3 rounded-t-full border-l-16 border-t-8 border-primary z-1"></div>
                {/* End of Grid 2 */}

                {/* Grid 3 */}
                <div className="flex flex-col gap-3 md:gap-5 col-span-8 col-start-1 row-start-4 md:col-span-5 md:row-span-2 md:col-start-4 md:row-start-1 xl:col-span-3 xl:row-span-2 xl:col-start-3 xl:row-start-3  self-start z-1">
                    <div className="text-2xl text-[38px] lg:text-5xl xl:text-4xl 2xl:text-5xl font-big-shoulders font-normal uppercase">MEET YOUR MENTORS</div>
                    <p>Learn from mentors who’ve transformed careers, identities, and confidence levels for over two decades.</p>
                </div>
                {/* End of Grid 3 */}

                {/* Grid 4 */}
                <div className="flex flex-col gap-3  col-span-5 col-start-1 row-start-5 md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-3 xl:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-5 z-1">
                    <div className="text-lg md:text-xl font-big-shoulders font-medium uppercase gold-text max-w-max custom-underline">
                        Tina Kalra
                    </div>
                    <div className="text-sm md:text-lg font-big-shoulders font-medium">HR Leader • People Development Expert • Purpose Mentor</div>
                    <div className="text-xs md:text-base font-geist font-normal">Experience: 20+ years</div>
                </div>
                {/* End of Grid 4 */}

                {/* Grid 5 */}
                <div className="flex flex-col gap-3 col-span-5 row-start-9 md:col-span-3 md:row-span-2 md:col-start-3 md:row-start-7 xl:col-span-2 xl:row-span-2 xl:col-start-5 xl:row-start-6 z-1">
                    <div className="text-lg md:text-xl font-big-shoulders font-medium uppercase gold-text max-w-max custom-underline">
                        MALATHI KS
                    </div>
                    <div className="text-sm md:text-lg font-big-shoulders font-medium">People Leader • Clarity Coach • Confidence Rewiring Specialist</div>
                    <div className="text-xs md:text-base font-geist font-normal">Experience: Close to 3 decades in Corporate</div>
                </div>
                {/* End of Grid 5 */}
            </div>
            {/* End of First Row */}


            {/* Second Row */}

            <div className="grid grid-cols-8 grid-rows-[repeat(2,auto)] md:grid-rows-1 gap-8 ">
                {/* Left Column */}
                <div className="w-full 2xl:w-[90%] flex flex-col gap-6 md:pt-18 xl:pt-0 text-white col-span-8 md:col-span-4 md:row-span-1">
                    <div className="text-xl font-big-shoulders font-medium uppercase gold-text">About Tina:</div>
                    <p>Tina has spent more than two decades shaping the careers, confidence, and identities of individuals across IT, consulting, leadership, and talent development. Having coached over 1,000 students, freshers, working professionals, and career restarters, she brings a rare combination of structured clarity frameworks and deep emotional intelligence.</p>
                    <p>Her expertise is rooted in understanding human behavior — how people think, how they react to their environment, why they feel stuck, and how they can rebuild confidence through clarity and identity-definition.</p>
                    <p> She has been the “turning point” for many individuals who were lost, confused, unsure, or carrying self-doubt. Tina’s approach is empathetic, reflective, and rooted in real-world experience, not theory.</p>

                </div>
                {/* End of Left Column */}
                {/* Right Column */}
                <div className=" flex flex-col gap-6 md:pt-18 text-white col-span-8 row-start-2 md:col-span-4 md:col-start-5 md:row-span-1">

                    <div className="text-xl font-big-shoulders font-medium uppercase gold-text">About Malathi:</div>
                    <p>Malathi is known for her deep, reflective coaching style that helps individuals understand themselves at a foundational level. With a background in people management, emotional intelligence, and guided transformation, she specializes in clarity coaching, mindset shifts, and breaking long-held limiting beliefs.</p>
                    <p>Her strength lies in helping participants see their blind spots — the patterns, fears, habits, and internal narratives that silently hold them back. With a warm yet powerful style, Malathi helps people rebuild their internal voice and step into confidence and self-belief.</p>
                </div>
                {/* End of Right Column */}
            </div>
            {/* End of Second Row */}

            {/* Third Row */}
            <div className="grid grid-cols-8 grid-rows-[repeat(2,auto)] xl:grid-rows-1 gap-8  md:mt-20">
                {/* Grid 1 */}
                <div className="flex flex-col gap-10 col-span-8 xl:col-span-4 xl:row-span-1">
                    <div className="flex flex-col gap-6">
                        <div className="text-2xl md:text-[38px] lg:text-[46px] xl:text-4xl 2xl:text-[46px] font-big-shoulders font-regular text-white leading-tight">Why both mentors together create magic:</div>
                        <p className="text-accent">Tina brings strategy, clarity, and structure.<br />Malathi brings depth, reflection, and emotional grounding.</p>
                    </div>
                    <PrimaryButton>Reserve My Free Spot</PrimaryButton>
                </div>
                {/* End of Grid 1 */}

                {/* Grid 2 */}
                <div className="flex flex-col gap-10 col-span-8 row-start-2 xl:col-span-4 xl:col-start-5 xl:row-span-1">
                    <div className="text-2xl md:text-[38px] lg:text-[46px] xl:text-4xl 2xl:text-[46px] font-big-shoulders font-regular text-white">Together, they create a session that is:</div>
                    <div className="grid grid-flow-col grid-cols-[repeat(2,max-content)] grid-rows-3 sm:grid-cols-[repeat(3,max-content)] sm:grid-rows-2 xl:grid-cols-[repeat(2,max-content)] xl:grid-rows-3 gap-x-10 gap-y-5 text-white">
                        {checkListItems.map((item, index) => (
                            <CheckListItem key={index}>{item}</CheckListItem>
                        ))}
                    </div>
                </div>
                {/* End of Grid 2 */}
            </div>
            {/* End of Third Row */}



        </section>
    );
}
