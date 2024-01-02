import React from "react";
import Nav from "./components/Nav";
import {
  Hero,
  SuperQuality,
  SpecialOffer,
  Subscribe,
  CustomerReviews,
  Footer,
  PopularProducts,
} from "./sections";

const App = () => {
  return (
    <div>
      <main className="relative">
        <Nav/>
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding bg-black">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
