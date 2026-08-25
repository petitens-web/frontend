import GameLobbyPreview from "@/components/home/GameLobbyPreview";
import HeroBanner from "@/components/home/HeroBanner";
import JackpotTicker from "@/components/home/JackpotTicker";
import PromotionsSection from "@/components/home/PromotionsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <GameLobbyPreview />
      <JackpotTicker />
      <PromotionsSection />
      <WhyChooseUs />
    </main>
  );
}
