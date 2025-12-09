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
        <section className="min-h-screen max-container flex gap-7 fp">
            {/* Hero Left */}
            <div className="w-[45%] flex flex-col gap-9">
                {/* First Row */}
                <div className="flex flex-col gap-5">
                    <div className="text-accent text-lg font-big-shoulders font-semibold uppercase">[ A COJECTIVE Initiative ]</div>
                    <div className="text-6xl text-white font-big-shoulders font-semibold uppercase leading-tight">Find Clarity. Discover Your Purpose. Start Your Journey Forward.</div>
                    <p className="text-base text-text-light font-geist font-normal">A powerful FREE live session that helps students, freshers, and career-restarters understand their strengths, uncover their purpose, build confidence, and identify the exact next step in their personal and professional journey.</p>
                </div>
                {/* End of First Row */}

                {/* Second Row */}
                <div className="grid grid-flow-row grid-cols-[repeat(2,max-content)] gap-x-9 gap-y-16 text-white">

                    {eventDetails.map((detail, index) => (
                        <div key={index} className="flex  flex-col gap-4">
                            <div className="flex items-center gap-3 text-xs font-geist font-normal ">
                                <Image src={detail.icon} alt="Calendar" width={26} height={26} />
                                <div>{detail.title}</div>
                            </div>
                            <div className="text-2xl font-big-shoulders font-semibold">{detail.value}</div>
                        </div>
                    ))}
                </div>

                {/* End of Second Row */}

                <PrimaryButton>Register For Free</PrimaryButton>


            </div>
            {/* End of Hero Left */}

            {/* Hero Right */}
            <div className="w-[55%] flex flex-col justify-end">

                <div className="h-[85%] grid grid-flow-col grid-cols-3 grid-rows-2 gap-5">
                    <div className="bg-red-300 rounded-t-full"></div>
                    <div className="bg-green-300 "></div>
                    <div className="bg-blue-300 col-span-2 row-span-2 rounded-t-full"></div>

                </div>
            </div>
            {/* End of Hero Right */}

        </section>
    );
}
