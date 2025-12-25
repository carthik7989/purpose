'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import Image from 'next/image';
import GlowEffect from './GlowEffect';

const testimonials = [
    {
        quote: "I walked in confused. I walked out with direction.",
        description: "I had spent months overthinking my career. This session made me see my strengths clearly for the first time.",
        name: "Sneha",
        role: "Student",
        rating: 5,
        imageLeft: '/images/student-1.webp',
        imageRight: '/images/student-1-1.webp',
    },
    {
        quote: "This session changed my entire perspective on life.",
        description: "I finally understood what I truly want and how to achieve it. The clarity I gained is invaluable.",
        name: "Rahul",
        role: "Student",
        rating: 5,
        imageLeft: '/images/student-1.webp',
        imageRight: '/images/student-1-1.webp',
    },
    {
        quote: "The best investment I've made in <br/> myself.",
        description: "Every minute of this session was worth it. I now have a clear roadmap for my future.",
        name: "Priya",
        role: "Student",
        rating: 5,
        imageLeft: '/images/student-1.webp',
        imageRight: '/images/student-1-1.webp',
    },
    {
        quote: "From confusion to clarity in just one session.",
        description: "I was lost about my career path. Now I know exactly what steps to take next.",
        name: "Arjun",
        role: "Student",
        rating: 5,
        imageLeft: '/images/student-1.webp',
        imageRight: '/images/student-1-1.webp',
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    const handlePaginationClick = (index: number) => {
        if (swiperInstance) {
            swiperInstance.slideToLoop(index);
        }
    };

    return (
        <section className="relative w-full flex flex-col gap-10 md:gap-15 lg:gap-20 fp max-container overflow-hidden">
            <GlowEffect className="bottom-0 left-0 " />
            <GlowEffect className="bottom-0 right-0 " />

            <div className="flex flex-col gap-10 md:gap-13 z-1">
                {/* First Row */}
                <div className="flex flex-col gap-2 md:gap-5">
                    <div className="text-lg gold-text">[ Students reviews ]</div>
                    <h2 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-[58px] font-big-shoulders font-semibold text-white uppercase">What Our students Say</h2>
                </div>
                {/* End of First Row */}

                {/* Slider */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="w-full [&_.swiper-slide]:h-auto [&_.swiper-wrapper]:items-stretch"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col md:flex-row gap-20 xl:gap-10 2xl:gap-20">
                                {/* Left Column */}
                                <div className="w-full xl:w-[70%] flex flex-col gap-10  lg:gap-13">
                                    <div className="flex flex-col md:flex-row gap-10 lg:gap-13 xl:gap-10 2xl:gap-13">
                                        <div className="w-full md:w-[50%] xl:w-[60%] bg-cover bg-center rounded-[30px] min-h-[300px]" style={{ backgroundImage: `url(${testimonial.imageLeft})` }}></div>
                                        <div className="w-full md:w-[50%] xl:w-[40%] flex flex-col gap-7 md:gap-10">
                                            <Image className="w-[20%] mmd:w-[18%] sm:w-[12%] md:w-[18%] lg:w-[15%] xl:w-[20%] h-auto 2xl:w-[80px] 2xl:h-[60px]" src="icons/quote.svg" alt="Quote" width={80} height={60} />
                                            <div className="flex flex-col gap-6 text-white">
                                                <div className="text-2xl  lg:text-[36px] xl:text-3xl 2xl:text-[36px] font-big-shoulders font-semibold gold-text uppercase">"{testimonial.quote}"</div>
                                                <p>{testimonial.description}</p>
                                            </div>
                                            <div className="flex flex-col gap-3 md:gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <div className="text-lg font-big-shoulders gold-text uppercase font-semibold leading-none">— {testimonial.name}, {testimonial.role}</div>
                                                    <div className="text-xs text-white">{testimonial.role}</div>
                                                </div>
                                                <div className="flex gap-1">
                                                    {Array.from({ length: testimonial.rating }, (_, i) => (
                                                        <Image key={i} src="icons/star.svg" alt="Star" width={15} height={15} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Left Column */}

                                {/* Right Column - Student Images */}
                                <div className="hidden xl:block w-[30%] bg-cover bg-center rounded-[30px] min-h-[400px]" style={{ backgroundImage: `url(${testimonial.imageRight})` }}></div>
                                {/* End of Right Column */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* End of Slider */}
            </div>

            {/* Pagination */}
            <div className="w-full flex items-center gap-5 z-1">
                <div className="h-[2px] w-full bg-[repeating-linear-gradient(to_right,#fff_0_6px,transparent_6px_20px)]">
                </div>
                <div className="flex gap-8 md:gap-15 lg:gap-22 text-2xl md:text-4xl lg:text-5xl xl:text-[58px] font-big-shoulders font-semibold">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePaginationClick(index)}
                            className={`transition-colors duration-300 cursor-pointer ${activeIndex === index ? 'text-white' : 'text-primary'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
