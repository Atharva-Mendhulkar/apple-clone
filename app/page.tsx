import Navbar from "@/components/Navbar";
import IPhoneSection from "@/components/IPhoneSection";
import WatchSection from "@/components/WatchSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <IPhoneSection />
      <WatchSection />
      <ValentineSection />
      <Footer />
    </main>
  );
}
