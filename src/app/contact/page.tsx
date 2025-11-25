import Footer from "@/components/shared/footer";
import HeadNavigation from "@/components/shared/head_navi";
import ParallaxLayout from "@/components/shared/parallax-layout";

export default function ContactPage() {
  return (
    <ParallaxLayout backgroundImage="/fond_ecran_haut.svg">
      <div className="fixed top-0 left-0 right-0 w-full z-20 p-4">
        <HeadNavigation />
      </div>
      <main className="pt-32 px-4 pb-20 flex-1">
        <h1>ContactPage</h1>
      </main>
      <Footer />
    </ParallaxLayout>
  );
}
