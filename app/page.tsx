import HeroSection from "@/components/home/hero";
import ProductCategories from "@/components/home/category";
import About from "@/components/home/about";
import WhyChooseUs from "@/components/home/why";
import LatestPosts from "@/components/home/blogs";
import QuoteForm from "@/components/common/request-Quote";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] w-full overflow-hidden">
      <HeroSection />
      <main className="w-full flex flex-col justify-center items-center">
        <section className="w-full lg:w-[85vw]">
          <ProductCategories />
        </section>
        <section
          id="About"
          className="w-full justify-center items-stretch my-5"
        >
          <About />
        </section>
        <section className="w-full justify-center items-stretch">
          <WhyChooseUs />
        </section>
        <section className="w-full justify-center items-stretch">
          <LatestPosts />
        </section>
        <section id="Quote" className="w-full justify-center items-stretch">
          <QuoteForm />
        </section>
      </main>
    </div>
  );
}
