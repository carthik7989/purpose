import Image from "next/image";
import CheckListItem from "./CheckListItem";
import GlowEffect from "./GlowEffect";


export default function Unique() {
    const checkListItemsOne = [
        "Resume building",
        "Interview trickse",
        "Job search tips",
        "Generic career advice",
    ];

    const checkListItemsTwo = [
        "Who you really are",
        "What your strengths naturally are",
        "What gives you energy",
        "What aligns with your personality",
        "What your identity is built for",
        "What your purpose is",
        "What direction is right for YOU",
    ];
    return (
        <section className="relative flex flex-col xl:flex-row justify-between items-center xl:items-stretch gap-3 fpx  max-container text-white overflow-hidden">
            <GlowEffect className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* First Column */}
            <div className="w-full sm:w-[65%] flex flex-col  gap-7 md:gap-10 2xl:gap-18 bg-background-dark px-7 py-9 md:px-11 md:py-13 rounded-[20px]">
                {/* First Row */}
                <div className="flex flex-col gap-7 2xl:gap-10">
                    <div className="text-xl md:text-[25px] xl:text-[23px] 2xl:text-[25px] font-big-shoulders gold-text font-semibold capitalize">Most career sessions focus on:</div>
                    <div className="grid gap-x-10 gap-y-5 ">

                        {checkListItemsOne.map((item, index) => (
                            <CheckListItem key={index} gap="gap-4" bgClass="bg-[#5ADC53]" bgSize="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" svgSize="w-4 h-4 2xl:w-5 2xl:h-5">{item}</CheckListItem>
                        ))}

                    </div>
                </div>
                {/* End of First Row */}

                {/* Second Row */}
                <p>But these only matter after clarity.And clarity never comes from external information.</p>
                {/* End of Second Row */}
                <Image className="self-center w-[40%] mlg:w-[35%] lg:w-[25%] xl:w-[35%] h-auto 2xl:w-[171px] 2xl:h-[145px]" src="/icons/spark-multi.svg" alt="Spark" width={171} height={145} />
            </div>
            {/* End of First Column */}

            <Image className="hidden xl:flex xl:w-[30%] xl:h-auto 2xl:w-[454px] 2xl:h-[521px] z-1" src="/images/unique.svg" alt="Unique" width={454} height={521} />
            <Image className="hidden sm:flex xl:hidden w-[559px] h-[628px] sm:w-full sm:h-auto -my-30 lg:-my-50 z-1" src="/images/unique-tab.svg" alt="Unique" width={559} height={628} />
            <Image className="w-full sm:hidden z-1" src="/images/unique-mob.svg" alt="Unique" width={378} height={473} />

            {/* Third Column */}
            <div className="w-full sm:w-[65%]  flex flex-col gap-7 md:gap-10 2xl:gap-18 bg-background-dark px-7 md:px-11 py-9 md:py-13 rounded-[20px]">
                {/* First Row */}
                <div className="flex flex-col gap-7 2xl:gap-10">
                    <div className="text-xl md:text-[25px] xl:text-[23px] 2xl:text-[25px] font-big-shoulders gold-text font-semibold capitalize">The Purpose Project focuses on:</div>
                    <div className="grid gap-x-10 gap-y-5 ">

                        {checkListItemsTwo.map((item, index) => (
                            <CheckListItem key={index} gap="gap-4" bgClass="bg-[#5ADC53]" bgSize="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" svgSize="w-4 h-4 2xl:w-5 2xl:h-5">{item}</CheckListItem>
                        ))}

                    </div>
                </div>
                {/* End of First Row */}

                {/* Second Row */}
                <p>But these only matter after clarity.And clarity never comes from external information.</p>
                {/* End of Second Row */}
            </div>
            {/* End of Third Column */}


        </section>
    );
}