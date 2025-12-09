import Image from "next/image";

export default function Session() {
    return (
        <section className="flex justify-between items-stretch gap-9 fpy max-container">
            <Image src="images/before-session.svg" alt="Before Session" width={718} height={414} />
            <div className="w-px bg-white shrink-0"></div>
            <Image src="images/after-session.svg" alt="After Session" width={720} height={414} />
        </section>
    );
}