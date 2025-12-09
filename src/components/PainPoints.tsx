import Image from "next/image";

export default function PainPoints() {
    const points = [
        "Feeling stuck in a career that doesn&apos;t fulfill you?",
        "Overwhelmed by the noise of the digital world?",
        "Unsure of your true purpose and direction?",
        "Lacking the confidence to take the next step?",
        "Afraid of failure and judgment from others?",
        "Waiting for the &apos;perfect moment&apos; that never comes?"
    ];

    return (
        <section className="flex flex-col items-center fp gap-13 max-container text-white">
            <div className="text-[46px] font-big-shoulders font-normal ">We saw people who didn’t know:</div>

            <div className="w-[90%] grid grid-cols-8 grid-rows-4 gap-8 font-geist text-xl font-normal">
                <div className="flex justify-center items-center px-11 py-8 rounded-t-[30px] rounded-bl-[30px] gold-gradient-dark text-center col-span-2">What they were naturally good at</div>
                <div className="flex justify-center items-center px-11 py-8 rounded-t-[30px] rounded-bl-[30px] gold-gradient-dark text-center col-span-2 col-start-1 row-start-2">What made them feel alive</div>
                <div className="flex justify-center items-center px-11 py-8 rounded-t-[30px] rounded-bl-[30px] gold-gradient-dark text-center col-span-2 col-start-1 row-start-3">Why they felt low or confused</div>
                <div className="flex justify-center items-center px-11 py-8 rounded-t-[30px] rounded-bl-[30px] gold-gradient-dark text-center col-span-2 col-start-4 row-start-4">What step to take next</div>
                <div className="flex justify-center items-center col-span-4 row-span-3 col-start-3 row-start-1">
                    <Image src="/images/question-mark.webp" alt="Question Mark" width={246} height={372} />
                </div>
                <div className="flex justify-center items-center px-11 py-8 rounded-t-[30px] rounded-bl-[30px] gold-gradient-dark text-center col-span-2 col-start-7 row-start-1">What direction aligned with who they are</div>
                <div className="flex justify-center items-center px-11 py-8 rounded-t-[30px] rounded-bl-[30px] gold-gradient-dark text-center col-span-2 col-start-7 row-start-2">Whether their passion could become income</div>
                <div className="flex justify-center items-center px-11 py-8 rounded-t-[30px] rounded-bl-[30px] gold-gradient-dark text-center col-span-2 col-start-7 row-start-3">How to rebuild confidence after failures</div>
            </div>
        </section>
    );
}
