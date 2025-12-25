import CountdownTimer from "./CountdownTimer";
import PrimaryButton from "./PrimaryButton";

export default function StickyBar() {
    return (

        <section className="w-full flex justify-between items-center fpx py-5 md:py-4 sticky bottom-0 left-0  z-50 bg-white rounded-t-[20px] max-container overflow-hidden">
            <div className="text-lg mmd:text-xl mlg:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] font-big-shoulders font-semibold uppercase">event starts in</div>
            <CountdownTimer variant="minimal" />
            <PrimaryButton className="hidden sm:flex">Register For Free</PrimaryButton>
        </section>

    );
}