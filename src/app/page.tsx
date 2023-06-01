import Footer from "@/components/footer";
import Keyboard from "@/components/keyboard";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="bg-gradient-to-l h-52 w-52"></div>
      <Keyboard />
      <Footer />
    </main>
  );
}
