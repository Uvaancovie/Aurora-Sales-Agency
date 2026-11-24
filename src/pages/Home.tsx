import { Hero } from '../components/Hero';
import { ClientsStrip } from '../components/home/ClientsStrip';
import { Problem } from '../components/home/Problem';
import { Included } from '../components/home/Included';
import { HowItWorks } from '../components/home/HowItWorks';
import { Results } from '../components/home/Results';
import { ReplyCards } from '../components/home/ReplyCards';
import { Packages } from '../components/home/Packages';
import { FreeCheck } from '../components/home/FreeCheck';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/home/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsStrip />
      <Problem />
      <Included />
      <HowItWorks />
      <Results />
      <ReplyCards />
      <Packages />
      <FreeCheck />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
