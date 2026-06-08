import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Industries } from '../components/Industries';
import { FAQ } from '../components/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      <FAQ />
    </main>
  );
}
