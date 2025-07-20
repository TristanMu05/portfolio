import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Resume from '@/components/sections/Resume'
import Socials from '@/components/sections/Socials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Projects />
        <Resume />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
