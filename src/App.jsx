import { useEffect } from 'react'
import Header from './components/Header.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Hero from './sections/Hero.jsx'
import Stats from './sections/Stats.jsx'
import Services from './sections/Services.jsx'
import WhyUs from './sections/WhyUs.jsx'
import Featured from './sections/Featured.jsx'
import Process from './sections/Process.jsx'
import QuoteForm from './sections/QuoteForm.jsx'
import Financing from './sections/Financing.jsx'
import Projects from './sections/Projects.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Faq from './sections/Faq.jsx'
import Contacts from './sections/Contacts.jsx'
import CtaBanner from './sections/CtaBanner.jsx'
import Footer from './sections/Footer.jsx'

// Revela elementos .reveal ao entrar no viewport.
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('reveal--in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal--in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Parallax suave em elementos [data-parallax].
function useParallax() {
  useEffect(() => {
    const els = [...document.querySelectorAll('[data-parallax]')]
    if (!els.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      const vh = window.innerHeight
      els.forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.bottom < 0 || r.top > vh) return
        const speed = parseFloat(el.dataset.parallax) || 0.12
        const offset = (r.top + r.height / 2 - vh / 2) * -speed
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
      })
      raf = 0
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}

export default function App() {
  useScrollReveal()
  useParallax()
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Featured />
        <Process />
        <QuoteForm />
        <Financing />
        <Projects />
        <Testimonials />
        <Faq />
        <Contacts />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
