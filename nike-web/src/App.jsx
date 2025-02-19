import React from "react"
import { CustomerReviews, Footer, Hero, PopularProduct, Services, SpecialOffers, Subscribe, SuperQuality } from "./sections"
import Nav from "./components/Nav"

function App() {

  return (
    <main>
      <section>
        <Nav />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10 ">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8 text-white">
        <Footer />
      </section>
    </main>
  )
}

export default App
