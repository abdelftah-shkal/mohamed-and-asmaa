import { useState } from "react"
import { LanguageProvider, useLanguage } from "./hooks/useLanguage"
import ScrollProvider from "./hooks/useScroll"
import ErrorBoundary from "./components/ErrorBoundary"
import OpeningScreen from "./components/OpeningScreen/OpeningScreen"
import OpeningParticles from "./components/OpeningScreen/OpeningParticles"
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher"
import SparkleLayer from "./components/SparkleLayer/SparkleLayer"
import Hero from "./components/Hero/Hero"
import InvitationMessage from "./components/InvitationMessage/InvitationMessage"
import CoupleSection from "./components/CoupleSection/CoupleSection"
import StoryTimeline from "./components/StoryTimeline/StoryTimeline"
import Countdown from "./components/Countdown/Countdown"
import Gallery from "./components/Gallery/Gallery"
import EventDetails from "./components/EventDetails/EventDetails"
import Location from "./components/Location/Location"
import RSVP from "./components/RSVP/RSVP"
import ThankYou from "./components/ThankYou/ThankYou"
import Footer from "./components/Footer/Footer"
import MusicPlayer from "./components/MusicPlayer/MusicPlayer"

function AppContent() {
  const [isOpen, setIsOpen] = useState(false)
  const { dir } = useLanguage()

  return (
    <div className="relative min-h-screen" dir={dir}>
      <SparkleLayer />

      {!isOpen && (
        <>
          <OpeningParticles />
          <OpeningScreen onOpen={() => setIsOpen(true)} />
        </>
      )}

      {isOpen && <LanguageSwitcher />}
      {isOpen && <MusicPlayer />}

      {isOpen && (
        <main>
          <Hero />
          <InvitationMessage />
          <CoupleSection />
          <StoryTimeline />
          <Countdown />
          <Gallery />
          <EventDetails />
          <Location />
          <RSVP />
          <ThankYou />
          <Footer />
        </main>
      )}
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ScrollProvider>
          <AppContent />
        </ScrollProvider>
      </LanguageProvider>
    </ErrorBoundary>
  )
}
