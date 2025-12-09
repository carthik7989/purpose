import Image from "next/image";
import CheckListItem from "./CheckListItem";

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
        <section className="flex justify-between gap-3 fp max-container text-white">

            {/* First Column */}
            <div className="flex flex-col gap-18 bg-background-dark px-11 py-13 rounded-[20px]">
                {/* First Row */}
                <div className="flex flex-col gap-10">
                    <div className="text-[25px] font-big-shoulders gold-text font-semibold capitalize">Most career sessions focus on:</div>
                    <div className="grid gap-x-10 gap-y-5 ">

                        {checkListItemsOne.map((item, index) => (
                            <CheckListItem key={index} gap="gap-4" bgClass="bg-[#5ADC53]" bgSize="w-8 h-8" svgSize="w-5 h-5">{item}</CheckListItem>
                        ))}

                    </div>
                </div>
                {/* End of First Row */}

                {/* Second Row */}
                <p>But these only matter after clarity.And clarity never comes from external information.</p>
                {/* End of Second Row */}
            </div>
            {/* End of First Column */}

            <Image src="/images/unique.svg" alt="Unique" width={454} height={521} />

            {/* Third Column */}
            <div className="flex flex-col gap-18 bg-background-dark px-11 py-13 rounded-[20px]">
                {/* First Row */}
                <div className="flex flex-col gap-10">
                    <div className="text-[25px] font-big-shoulders gold-text font-semibold capitalize">The Purpose Project focuses on:</div>
                    <div className="grid gap-x-10 gap-y-5 ">

                        {checkListItemsTwo.map((item, index) => (
                            <CheckListItem key={index} gap="gap-4" bgClass="bg-[#5ADC53]" bgSize="w-8 h-8" svgSize="w-5 h-5">{item}</CheckListItem>
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