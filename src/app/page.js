import Sidebar from "@/components/sidebar";
import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <>
      <div class="flex flex-row justify-center w-70">
        <Sidebar />
        <HeroSection />
      </div>
      <div class="flex justify-center w-70">
        <Pagination />
      </div>
      <Footer />
    </>
  );
}
