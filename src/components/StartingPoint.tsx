import Image from "next/image";
import GlowEffect from "./GlowEffect";

export default function StartingPoint() {
    return (
        <section className="max-container fpx overflow-hidden">
            <div className="relative flex flex-col items-center gap-3 md:gap-13 bg-[#343434] text-white fp rounded-[20px] md:rounded-[30px] overflow-hidden">
                <Image className='absolute top-82 left-5 mmd:top-75 sm:top-60 md:top-80 md:left-10 lg:top-75 2xl:top-20 2xl:left-10 w-[11%] lg:w-[8%] 2xl:w-[106.19px] 2xl:h-[105.51px]' src="/icons/spark-multi.svg" alt="spark" width={106.19} height={105.51} />

                <Image className='absolute bottom-20 right-0 mmd:bottom-23 sm:bottom-27 md:bottom-45 md:right-5 lg:bottom-55  2xl:bottom-70 2xl:right-14 w-[10%] sm:w-[6%] lg:w-[5%] 2xl:w-[60.9px] 2xl:h-[61.25px]' src="/icons/spark.svg" alt="spark" width={60.9} height={61.25} />
                <Image className='absolute bottom-0 right-0 2xl:right-5 w-[15%] sm:w-[11%] md:w-[15%] lg:w-[13%] xl:w-[11%] 2xl:w-[155px] 2xl:h-[264px]' src="/images/person-smile.webp" alt="Person Smile" width={155} height={264} />
                <GlowEffect opacity="opacity-50" className="-bottom-25 -left-25" />
                <GlowEffect opacity="opacity-50" className="-top-25 -right-25" />
                <div className="flex flex-col items-center text-center gap-3 md:gap-5">
                    <p>Traditional career guidance did not help them — because it focused only on jobs, resumes, and interviews.</p>
                    <div className="text-lg md:text-[26px] font-big-shoulders gold-text capitalize">But clarity begins much before that.</div>
                    <p>It begins with YOU.</p>
                    <p className="w-full md:w-[85%]">That’s why we created The Purpose Project — a space where individuals can discover who they truly are, what energizes them, and what direction finally makes sense.</p>
                </div>
                <div className="text-lg md:text-[26px] font-big-shoulders gold-text capitalize">This session is that starting point.</div>
            </div>
        </section>
    );
}