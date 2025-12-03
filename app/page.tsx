import { Header } from '@/components/header';
import { Hero } from '@/components/hero/hero';

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex bg-background justify-center min-h-screen py-6">
        <Hero />
      </section>
    </>
  );
}
