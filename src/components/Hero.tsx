import GlowEffect from './GlowEffect';
import PrimaryButton from './PrimaryButton';
import Image from 'next/image';


export default function Hero() {
    const eventDetails = [
        {
            title: "Event Date",
            value: "14th Dec 2025",
            icon: "/icons/calendar.svg",
        },
        {
            title: "Time",
            value: "11:30 AM",
            icon: "/icons/time.svg",
        },
        {
            title: "Format",
            value: "Live Zoom Session",
            icon: "/icons/video.svg",
        },
        {
            title: "Duration",
            value: "60 - 70 Minutes",
            icon: "/icons/duration.svg",
        },
    ];

    return (
        <section className="min-h-screen max-container flex flex-col lg:flex-row gap-15 2xl:gap-7 fp overflow-hidden">
            {/* Hero Left */}
            <div className="relative w-full lg:w-[45%] flex flex-col gap-9">
                {/* First Row */}
                <div className="flex flex-col gap-5 z-1">
                    <div className="text-accent text-base md:text-lg font-big-shoulders font-semibold uppercase">[ A COJECTIVE Initiative ]</div>
                    <div className="text-3xl md:text-[46px] lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-big-shoulders font-semibold uppercase leading-tight">Find Clarity. Discover Your Purpose. Start Your Journey Forward.</div>
                    <p className=" text-text-light font-geist font-normal">A powerful FREE live session that helps students, freshers, and career-restarters understand their strengths, uncover their purpose, build confidence, and identify the exact next step in their personal and professional journey.</p>
                </div>
                {/* End of First Row */}

                {/* Second Row */}
                <div className="grid grid-flow-row grid-cols-[repeat(2,max-content)] gap-x-9 gap-y-8 2xl:gap-y-16 text-white z-1">

                    {eventDetails.map((detail, index) => (
                        <div key={index} className="flex  flex-col gap-2 md:gap-4">
                            <div className="flex items-center gap-2 md:gap-3 text-xs font-geist font-normal ">
                                <Image className='w-5 h-5' src={detail.icon} alt="Calendar" width={26} height={26} />
                                <div>{detail.title}</div>
                            </div>
                            <div className="text-lg md:text-2xl font-big-shoulders font-semibold">{detail.value}</div>
                        </div>
                    ))}
                </div>

                {/* End of Second Row */}

                <PrimaryButton>Register For Free</PrimaryButton>
                <Image className='absolute -bottom-13 right-55 mmd:right-70 mlg:right-80 sm:-bottom-20 md:right-100 lg:right-15 lg:bottom-0 xl:right-0 2xl:-bottom-10  2xl:right-0 w-[15%] sm:w-[13%] lg:w-[15%] xl:w-[18%] 2xl:w-[150px] 2xl:h-[155.46px]' src="/icons/spark-multi.svg" alt="spark" width={150} height={155.46} />
                <GlowEffect className="top-40 left-30" />

            </div>
            {/* End of Hero Left */}

            {/* Hero Right */}
            <div className="relative w-full lg:w-[55%] flex flex-col justify-end">

                <div className="h-full lg:h-[85%] grid grid-flow-col grid-cols-3 grid-rows-2 gap-5">
                    <div className="bg-red-300 rounded-t-full"></div>
                    <div className="bg-green-300 "></div>
                    <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto bg-blue-300 col-span-2 row-span-2 rounded-t-full"></div>

                </div>
                <Image className='absolute -top-10 right-0 lg:top-15  2xl:top-20 2xl:right-20 -rotate-60 w-[12%] sm:w-[11%] md:w-[9%] 2xl:w-[44.17px] 2xl:h-[51.38px]' src="/icons/hand-drawn.svg" alt="Hand Drawn" width={44.17} height={51.38} />
            </div>
            {/* End of Hero Right */}

        </section>
    );
}
