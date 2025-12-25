import Image from "next/image";
import GlowEffect from "./GlowEffect";
export default function Story() {
    return (
        <section className="flex flex-col xl:flex-row fpx gap-10 max-container overflow-hidden">
            {/* Left Column */}
            <div className="w-full xl:w-1/2 flex flex-col gap-8 text-white">
                <div className="flex flex-col gap-5 2xl:gap-0">
                    <h2 className="text-3xl md:text-5xl 2xl:text-[64px] font-big-shoulders font-bold  uppercase gold-text">
                        THE ORIGIN STORY
                    </h2>
                    <div className="text-xl md:text-3xl 2xl:text-[42px] font-geist font-light leading-tight">
                        Why we built The Purpose Project  a message directly from the mentors.
                    </div>
                </div>

                <div className="text-base md:text-xl font-geist font-medium">Over 5 decades of collect working experience in HR and leadership, we’ve watched something heartbreaking repeat itself:</div>
                <div className="flex flex-col gap-5">
                    <p>Brilliant people doubting themselves.</p>
                    <p>Talented students feeling lost.</p>
                    <p>Capable professionals unable to move forward.</p>
                    <p>Women returning to the workforce feeling invisible.</p>
                    <p>Freshers confused about where to begin.</p>

                </div>

                <div className="flex flex-col gap-5">
                    <p>Not because they lacked skills.</p>
                    <p>Not because they weren’t smart.</p>
                    <p>Not because they didn’t try.</p>
                </div>
                <p>But because they lacked the one thing that truly creates momentum: CLARITY.</p>
            </div>
            {/* End of Left Column */}

            {/* Right Column */}
            <div className="relative w-full xl:w-1/2 flex items-end gap-5">
                <Image className='absolute top-0 left-10 sm:left-30 md:left-40 lg:left-50 xl:top-10 2xl:left-30 w-[25%] mlg:w-[22%] sm:w-[17%] md:w-[15%] lg:w-[20%] 2xl:w-[150px] 2xl:h-[150px]' src="/icons/spark-multi-purple.svg" alt="spark" width={150} height={150.46} />
                <Image className='absolute bottom-40 left-10 sm:bottom-68 sm:left-20 lg:bottom-80 lg:left-30 xl:left-20 2xl:bottom-70 2xl:left-40 w-[13%] mmd:w-[11%] sm:w-[8%] md:w-[6%] lg:w-[10%] 2xl:w-[46.78px] 2xl:h-[45.91px]' src="/icons/spiral.svg" alt="spiral" width={46.78} height={45.91} />
                <GlowEffect className="top-0 -right-50" />
                <GlowEffect bgClass="bg-primary" className="top-60 -left-10" />
                <div className="w-[40%]  h-[140px] sm:h-[250px] lg:h-[275px] bg-amber-100 rounded-t-full z-1"></div>
                <div className="w-[60%]  h-[297px] sm:h-[407px] lg:h-[563px] bg-amber-100 rounded-t-full border-l-15 border-accent z-1"></div>
            </div>
            {/* End of Right Column */}
        </section>
    );
}
