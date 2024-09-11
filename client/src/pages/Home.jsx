import AboutSection from "../components/AboutSection";
import FeaturedDestinationsCard from "../components/FeaturedDestinationsCard";
import Features from "../components/Features";
import Hero from "../components/Hero";
import LatestJourneysSection from "../components/LatestJourneysSection";


export default function Home() {
  return (
    <div>
    <Hero />
    <Features />
    <FeaturedDestinationsCard />
    <LatestJourneysSection />
    <AboutSection />
    </div>
  )
}
