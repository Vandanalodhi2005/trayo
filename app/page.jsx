import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import BrandStory from "@/components/home/BrandStory";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GoodnessSection from "@/components/home/GoodnessSection";
import MakhanaShowcase from "@/components/home/MakhanaShowcase";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import FinalCTA from "@/components/home/FinalCTA";
import WaterBubbles from "@/components/home/WaterBubbles";
import BrandWatermark from "@/components/home/BrandWatermark";

export const metadata = {
  title: "TRAYO | A Crunch of Goodness — Premium Indian Makhana",
  description:
    "Meet your new favourite kind of crunch. Discover TRAYO's light, deliciously snackable Indian makhana made for everyday moments worth savouring.",
  openGraph: {
    title: "TRAYO | A Crunch of Goodness",
    description:
      "Deliciously snackable Indian makhana crafted for everyday moments worth savouring.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="relative">
      <BrandWatermark />
      <WaterBubbles variant="page" />
      <Hero />
      <Marquee tone="primary" />
      <BrandStory />
      <FeaturedProducts />
      <GoodnessSection />
      <MakhanaShowcase />
      <Marquee tone="charcoal" />
      <Testimonials />
      <Newsletter />
      <FinalCTA />
    </div>
  );
}
