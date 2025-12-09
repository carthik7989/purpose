import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mentor from "@/components/Mentor";
import Story from "@/components/Story";
import PainPoints from "@/components/PainPoints";
import Curriculum from "@/components/Curriculum";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import StartingPoint from "@/components/StartingPoint";
import Struggle from "@/components/Struggle";
import Promise from "@/components/Promise";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import Session from "@/components/Session";
import Attend from "@/components/Attend";
import Unique from "@/components/Unique";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-white pt-20">
      <Navbar />
      <Hero />
      <Statistics />
      <Mentor />
      <Story />
      <PainPoints />
      <StartingPoint />
      <Struggle />
      <Promise />
      <Curriculum />
      <Session />
      <Attend />
      <Unique />
      <Testimonials />
      <Faq />
      <CallToAction />
      <Footer />
      <StickyBar />
    </main>
  );
}
