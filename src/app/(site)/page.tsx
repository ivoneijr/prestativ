'use client';

import Benefits from './components/Benefits';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Who from './components/Who';

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
