import PrimaryButton from "./PrimaryButton";
import CheckListItem from "./CheckListItem";

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
        <section className="flex flex-col fp max-container">

            {/* First Row */}
            <div className="grid grid-cols-8 grid-rows-[repeat(9,auto)] gap-8 text-white">
                {/* Grid 1 */}
                <div className="bg-amber-100 col-span-2 row-span-7 rounded-b-full border-l-16 border-b-8 border-accent"></div>
                {/* End of Grid 1 */}

                {/* Grid 2 */}
                <div className="bg-amber-100 col-span-2 row-span-7 col-start-7 row-start-3 rounded-t-full border-l-16 border-t-8 border-primary"></div>
                {/* End of Grid 2 */}

                {/* Grid 3 */}
                <div className="flex flex-col gap-5 col-span-3 row-span-2 col-start-3 row-start-3  self-start">
                    <div className="text-5xl font-big-shoulders font-normal uppercase">MEET YOUR MENTORS</div>
                    <p>Learn from mentors who’ve transformed careers, identities, and confidence levels for over two decades.</p>
                </div>
                {/* End of Grid 3 */}

                {/* Grid 4 */}
                <div className="flex flex-col gap-3  col-span-2 row-span-2 col-start-3 row-start-5 ">
                    <div className="text-xl font-big-shoulders font-medium uppercase gold-text max-w-max custom-underline">
                        Tina Kalra
                    </div>
                    <div className="text-lg font-big-shoulders font-medium">HR Leader • People Development Expert • Purpose Mentor</div>
                    <div className="text-base font-geist font-normal">Experience: 20+ years</div>
                </div>
                {/* End of Grid 4 */}

                {/* Grid 5 */}
                <div className="flex flex-col gap-3  col-span-2 row-span-2 col-start-5 row-start-6 ">
                    <div className="text-xl font-big-shoulders font-medium uppercase gold-text max-w-max custom-underline">
                        MALATHI KS
                    </div>
                    <div className="text-lg font-big-shoulders font-medium">People Leader • Clarity Coach • Confidence Rewiring Specialist</div>
                    <div className="text-base font-geist font-normal">Experience: Close to 3 decades in Corporate</div>
                </div>
                {/* End of Grid 5 */}
            </div>
            {/* End of First Row */}


            {/* Second Row */}

            <div className="grid grid-cols-8 grid-rows-1 gap-8">
                {/* Left Column */}
                <div className="w-[90%] flex flex-col gap-6 text-white col-span-4 row-span-1">
                    <div className="text-xl font-big-shoulders font-medium uppercase gold-text">About Tina:</div>
                    <p>Tina has spent more than two decades shaping the careers, confidence, and identities of individuals across IT, consulting, leadership, and talent development. Having coached over 1,000 students, freshers, working professionals, and career restarters, she brings a rare combination of structured clarity frameworks and deep emotional intelligence.</p>
                    <p>Her expertise is rooted in understanding human behavior — how people think, how they react to their environment, why they feel stuck, and how they can rebuild confidence through clarity and identity-definition.</p>
                    <p> She has been the “turning point” for many individuals who were lost, confused, unsure, or carrying self-doubt. Tina’s approach is empathetic, reflective, and rooted in real-world experience, not theory.</p>

                </div>
                {/* End of Left Column */}
                {/* Right Column */}
                <div className=" flex flex-col gap-6 pt-18 text-white col-span-4 col-start-5 row-span-1">

                    <div className="text-xl font-big-shoulders font-medium uppercase gold-text">About Malathi:</div>
                    <p>Malathi is known for her deep, reflective coaching style that helps individuals understand themselves at a foundational level. With a background in people management, emotional intelligence, and guided transformation, she specializes in clarity coaching, mindset shifts, and breaking long-held limiting beliefs.</p>
                    <p>Her strength lies in helping participants see their blind spots — the patterns, fears, habits, and internal narratives that silently hold them back. With a warm yet powerful style, Malathi helps people rebuild their internal voice and step into confidence and self-belief.</p>
                </div>
                {/* End of Right Column */}
            </div>
            {/* End of Second Row */}

            {/* Third Row */}
            <div className="grid grid-cols-8 grid-rows-1 gap-8 mt-20">
                {/* Grid 1 */}
                <div className="flex flex-col gap-10 col-span-4 row-span-1">
                    <div className="flex flex-col gap-6">
                        <div className="text-[46px] font-big-shoulders font-regular text-white leading-tight">Why both mentors together create magic:</div>
                        <p className="text-accent">Tina brings strategy, clarity, and structure.<br />Malathi brings depth, reflection, and emotional grounding.</p>
                    </div>
                    <PrimaryButton>Reserve My Free Spot</PrimaryButton>
                </div>
                {/* End of Grid 1 */}

                {/* Grid 2 */}
                <div className="flex flex-col gap-10 col-span-4 col-start-5 row-span-1">
                    <div className="text-[46px] font-big-shoulders font-regular text-white">Together, they create a session that is:</div>
                    <div className="grid grid-flow-col grid-cols-[repeat(2,max-content)] grid-rows-3 gap-x-10 gap-y-5 text-white">
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
