import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Services } from '../components/Services';
import { Clients } from '../components/Clients';
import { Process } from '../components/Process';
import { Belief } from '../components/Belief';
import { CaseStudies } from '../components/CaseStudies';
import { About } from '../components/About';
import { BookCall } from '../components/BookCall';
import { Contact } from '../components/Contact';
import { site } from '../content/site';

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Clients />
      <Process />
      <Belief title={site.beliefs[0].title} quote={site.beliefs[0].quote} />
      <CaseStudies />
      <About />
      <Belief title={site.beliefs[1].title} quote={site.beliefs[1].quote} />
      <BookCall />
      <Contact />
    </>
  );
}
