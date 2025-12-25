import PrimaryButton from "./PrimaryButton";

export default function CallToAction() {
    return (
        <section className="w-full flex flex-col md:flex-row gap-10 lg:gap-20 fp max-container text-white overflow-hidden">
            <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-10  ">
                <div className="flex flex-col gap-2 md:gap-5">
                    <div className="text-base md:text-lg font-big-shoulders gold-text uppercase">Your clarity is one step away.</div>
                    <h2 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-[58px] font-big-shoulders font-semibold leading-tight uppercase ">Your clarity is one step away.</h2>
                </div>
                <p>Join The Purpose Project — a free session that helps you discover yourself, your purpose, and your next step.</p>
                <PrimaryButton>Register For Free</PrimaryButton>
            </div>
            <div className="w-full md:w-1/2 h-[250px] md:h-auto bg-background-light rounded-[15px] md:rounded-[30px] "></div>
        </section>
    );
}