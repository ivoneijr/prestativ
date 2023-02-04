'use client';

import Benefits from './_components/Benefits';
import ContactUs from './_components/ContactUs';
import FAQ from './_components/FAQ';
import Footer from './_components/Footer';
import Hero from './_components/Hero';
import Partners from './_components/Partners';
import Who from './_components/Who';

export default function LandingPage() {
  return (
    <div className="bg-white">
      <main>
        <Hero />
        <Partners />
        <Benefits />
        <Who />
        <ContactUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
