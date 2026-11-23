import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  Heart,
  PartyPopper,
  Sparkles,
  Star,
  Volume2,
  VolumeX,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import birthdayStillLife from "@/assets/birthday-still-life.jpg";
import birthdayAudio from "@/assets/audio/amiba-hindi-x-tamil.mp4";

const chapters = [
  {
    label: "01 / The first impression",
    title: "You make ordinary moments feel chosen.",
    text: "There is a calm brightness in you. It does not ask for attention, but somehow it stays with everyone lucky enough to notice it.",
    icon: "✦",
  },
  {
    label: "02 / The small details",
    title: "I remember the little things.",
    text: "The thoughtful pauses, the unexpected smiles, and the way your whole face changes when you speak about something you love.",
    icon: "☾",
  },
  {
    label: "03 / The thing I hope",
    title: "Your dreams deserve a wide sky.",
    text: "Wherever your next chapter takes you, I hope it brings you brave beginnings, kind people, and reasons to be proud of yourself.",
    icon: "✧",
  },
];

const reasons = [
  ["Your softness", "You make room for people to feel safe and understood."],
  ["Your courage", "You keep moving forward, even when the path is not obvious."],
  ["Your spark", "You bring a little more colour to every room you enter."],
  ["Your honesty", "There is something beautiful about the way you stay true to yourself."],
  ["Your patience", "You notice what others miss and care in quiet, meaningful ways."],
  ["Your becoming", "The person you are growing into is already worth celebrating."],
];

const confettiPieces = Array.from({ length: 18 }, (_, index) => index + 1);
const introHearts = ["♡", "♥", "✦", "♡", "✧", "♥", "♡", "✦"];
const introSparkles = Array.from({ length: 14 }, (_, index) => index + 1);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Little Universe for Himasri" },
      {
        name: "description",
        content: "An original birthday celebration made with care for Himasri.",
      },
      { property: "og:title", content: "A Little Universe for Himasri" },
      {
        property: "og:description",
        content: "A birthday story, a few reasons, and a letter from the heart.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);
  const [muted, setMuted] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [candlesLit, setCandlesLit] = useState(true);
  const [letterOpen, setLetterOpen] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [compliment, setCompliment] = useState("You are allowed to take up every beautiful space meant for you.");
  const letterSection = useRef<HTMLElement | null>(null);
  const celebrationTimer = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    document.body.style.overflow = showDisclaimer || !hasEntered ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showDisclaimer, hasEntered]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.12;
  }, []);

  const enterPage = async () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.12;
      try {
        await audioRef.current.play();
      } catch {
        // The browser may still block playback; the user can use the sound control afterward.
      }
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    const nextMuted = !muted;
    audioRef.current.muted = nextMuted;
    setMuted(nextMuted);
  };

  useEffect(
    () => () => {
      if (celebrationTimer.current !== null) window.clearTimeout(celebrationTimer.current);
    },
    [],
  );

  const celebrate = () => {
    setCelebrating(true);
    if (celebrationTimer.current !== null) window.clearTimeout(celebrationTimer.current);
    celebrationTimer.current = window.setTimeout(() => setCelebrating(false), 2400);
  };

  const openLetter = () => {
    setLetterOpen(true);
    celebrate();
    window.setTimeout(() => {
      letterSection.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "center",
      });
    }, 100);
  };

  const revealCompliment = () => {
    const messages = [
      "You are more remarkable than you give yourself credit for.",
      "The world is gentler and brighter with you in it.",
      "I hope you see yourself through the eyes of everyone who admires you.",
    ];
    setCompliment(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <main className="birthday-page">
      <audio ref={audioRef} src={birthdayAudio} loop preload="auto" />
      {showDisclaimer && (
        <div className="birthday-disclaimer" role="dialog" aria-modal="true" aria-labelledby="disclaimer-heading">
          <div className="birthday-disclaimer__card">
            <div className="birthday-disclaimer__icon" aria-hidden="true">
              <Volume2 />
            </div>
            <p className="birthday-disclaimer__eyebrow">Before you begin</p>
            <h1 id="disclaimer-heading">One little note</h1>
            <p className="birthday-disclaimer__message">
              Please reduce your device volume to a comfortable level. This experience is best felt on a laptop or large screen.
            </p>
            {isMobile && (
              <p className="birthday-disclaimer__mobile">
                You are on a smaller screen, but the story will still open beautifully.
              </p>
            )}
            <Button
              variant="birthday"
              size="lg"
              className="birthday-disclaimer__button"
              onClick={() => setShowDisclaimer(false)}
            >
              I understand <Sparkles aria-hidden="true" />
            </Button>
          </div>
        </div>
      )}
      {!hasEntered && (
        <div className="birthday-intro" role="dialog" aria-modal="true" aria-labelledby="intro-heading">
          <div className="birthday-intro__decor birthday-intro__decor--hearts" aria-hidden="true">
            {introHearts.map((heart, index) => <span key={`${heart}-${index}`}>{heart}</span>)}
          </div>
          <div className="birthday-intro__decor birthday-intro__decor--sparkles" aria-hidden="true">
            {introSparkles.map((sparkle) => <span key={sparkle}>✦</span>)}
          </div>
          <div className="birthday-intro__card">
            <div className="birthday-intro__seal" aria-hidden="true"><Heart /></div>
            <p className="birthday-intro__eyebrow">A tiny surprise for you</p>
            <h1 id="intro-heading">A little universe<br /><em>for Himasri.</em></h1>
            <p className="birthday-intro__message">
              Take a breath, tap below, and let this birthday story unfold one soft page at a time.
            </p>
            <Button variant="birthday" size="lg" className="birthday-intro__button" onClick={enterPage}>
              Open your surprise <Sparkles aria-hidden="true" />
            </Button>
            <span className="birthday-intro__hint">made with care · just for you</span>
          </div>
        </div>
      )}
      {celebrating && (
        <div className="birthday-celebration" aria-hidden="true">
          {confettiPieces.map((piece) => (
            <span className={`birthday-confetti birthday-confetti--${((piece - 1) % 14) + 1}`} key={piece} />
          ))}
        </div>
      )}

      <header className="birthday-nav">
        <a href="#welcome" className="birthday-brand">
          <span className="birthday-brand__mark">✦</span>
          <span>A little birthday letter · for Himasri</span>
        </a>
        <button className="birthday-audio-control" type="button" onClick={toggleAudio} aria-label={muted ? "Turn birthday music on" : "Mute birthday music"} disabled={!hasEntered}>
          {muted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
          <span>{muted ? "Sound off" : "Sound on"}</span>
        </button>
      </header>

      <section
        className="birthday-hero birthday-hero--new"
        id="welcome"
        aria-labelledby="birthday-heading"
        style={{
          backgroundImage: `linear-gradient(90deg, oklch(0.16 0.055 155 / 88%) 0%, oklch(0.16 0.055 155 / 58%) 48%, oklch(0.16 0.055 155 / 18%) 100%), url("${birthdayStillLife}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="birthday-hero__glow" aria-hidden="true" />
        <div className="birthday-hero__content">
          <p className="birthday-eyebrow"><span className="birthday-eyebrow__line" /> Today is all about you</p>
          <h1 id="birthday-heading">Happy birthday, <span>Himasri.</span></h1>
          <p className="birthday-hero__message">
            Today, the calendar has one job: to remind you how much light you carry into the lives around you.
          </p>
          <Button variant="birthday" size="lg" className="birthday-cta" onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}>
            Start the little story <ArrowDown aria-hidden="true" />
          </Button>
        </div>
      </section>

      <section className="birthday-story birthday-section" id="story" aria-labelledby="story-heading">
        <div className="birthday-section__heading">
          <p className="birthday-eyebrow birthday-eyebrow--dark">A few pages from my point of view</p>
          <h2 id="story-heading">If I could save the feeling of knowing you…</h2>
          <p>It would look a little like this: soft edges, late-night thoughts, and a lot of gratitude.</p>
        </div>
        <div className="birthday-story__card">
          <div className="birthday-story__card-top">
            <span>{chapters[chapter].label}</span>
            <span>{String(chapter + 1).padStart(2, "0")} / 03</span>
          </div>
          <div className="birthday-story__copy">
            <span className="birthday-story__icon" aria-hidden="true">{chapters[chapter].icon}</span>
            <h3>{chapters[chapter].title}</h3>
            <p>{chapters[chapter].text}</p>
          </div>
          <div className="birthday-story__controls">
            <div className="birthday-story__dots" aria-label="Story pages">
              {chapters.map((item, index) => (
                <button key={item.label} className={index === chapter ? "is-active" : ""} onClick={() => setChapter(index)} aria-label={`Read story page ${index + 1}`} />
              ))}
            </div>
            <div>
              <button className="birthday-icon-button" onClick={() => setChapter((chapter + chapters.length - 1) % chapters.length)} aria-label="Previous story page"><ArrowLeft /></button>
              <button className="birthday-icon-button" onClick={() => setChapter((chapter + 1) % chapters.length)} aria-label="Next story page"><ArrowRight /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="birthday-cake birthday-section" aria-labelledby="cake-heading">
        <div className="birthday-cake__copy">
          <p className="birthday-eyebrow birthday-eyebrow--dark">Pause here for a wish</p>
          <h2 id="cake-heading">Make it a year you’ll want to remember.</h2>
          <p>Tap the candles when you have a wish in mind. No wish is too big, too small, or too quietly yours.</p>
          <Button variant="birthday" size="lg" onClick={() => { setCandlesLit(false); celebrate(); }}>
            {candlesLit ? "Blow out the candles" : "Wish sent into the universe"} <Sparkles />
          </Button>
          {!candlesLit && <p className="birthday-cake__status"><Check /> Your wish is safe with the stars.</p>}
        </div>
        <div className={`birthday-cake__visual ${candlesLit ? "" : "is-dark"}`} role="button" tabIndex={0} onClick={() => { setCandlesLit(false); celebrate(); }} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setCandlesLit(false); }} aria-label="Birthday cake with candles">
          <div className="birthday-flame birthday-flame--one" />
          <div className="birthday-flame birthday-flame--two" />
          <div className="birthday-flame birthday-flame--three" />
          <div className="birthday-candle birthday-candle--one" />
          <div className="birthday-candle birthday-candle--two" />
          <div className="birthday-candle birthday-candle--three" />
          <div className="birthday-cake__icing" />
          <div className="birthday-cake__base" />
          <div className="birthday-cake__plate" />
          <span className="birthday-cake__sparkle birthday-cake__sparkle--one">✦</span>
          <span className="birthday-cake__sparkle birthday-cake__sparkle--two">✧</span>
        </div>
      </section>

      <section className="birthday-reasons birthday-section" aria-labelledby="reasons-heading">
        <div className="birthday-section__heading">
          <p className="birthday-eyebrow birthday-eyebrow--dark">A small list, never complete</p>
          <h2 id="reasons-heading">Things worth celebrating about you.</h2>
          <p>Six reasons today feels like an especially good day to be grateful for your existence.</p>
        </div>
        <div className="birthday-reasons__grid">
          {reasons.map(([title, text], index) => (
            <article className="birthday-reason" key={title}>
              <span className="birthday-reason__number">0{index + 1}</span>
              <Star aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="birthday-note birthday-section" aria-labelledby="note-heading" ref={letterSection}>
        <div className="birthday-note__intro">
          <p className="birthday-eyebrow birthday-eyebrow--dark">The part I almost kept to myself</p>
          <h2 id="note-heading">There are feelings that deserve a gentle place to land.</h2>
          <p className="birthday-note__teaser">Open this only when you have a quiet minute and a little room in your heart.</p>
          <button className={`birthday-envelope ${letterOpen ? "is-open" : ""}`} onClick={openLetter} aria-expanded={letterOpen} aria-controls="birthday-letter">
            <span className="birthday-envelope__seal"><Heart aria-hidden="true" /></span>
            <span>{letterOpen ? "The letter is open" : "Open the letter"}</span>
            <small>{letterOpen ? "thank you for reading" : "sealed with care"}</small>
          </button>
        </div>
        {letterOpen && (
          <article className="birthday-letter" id="birthday-letter" aria-label="A personal birthday letter for Himasri">
            <p className="birthday-letter__salutation">Dear Himasri,</p>
            <p>Somewhere between the everyday conversations and the moments you probably did not think twice about, you became someone I hold very close in my thoughts.</p>
            <p>I care for you in a way that asks for nothing back. I only wanted one honest corner of this birthday to say that your presence has made my days warmer, and I am genuinely grateful for every version of you I get to know.</p>
            <p>May this next year meet you with courage, laughter, and the kind of joy that feels like coming home to yourself. You deserve all of it.</p>
            <p className="birthday-letter__signoff">Always cheering for you,<span>Hemanth</span></p>
          </article>
        )}
      </section>

      <section className="birthday-surprise birthday-section" aria-labelledby="surprise-heading">
        <div className="birthday-surprise__badge"><PartyPopper aria-hidden="true" /></div>
        <p className="birthday-eyebrow birthday-eyebrow--dark">One last little surprise</p>
        <h2 id="surprise-heading">{compliment}</h2>
        <button className="birthday-text-button" onClick={revealCompliment}>Give me another little reminder <Sparkles /></button>
      </section>

      <section className="birthday-wish birthday-wish--new" aria-labelledby="wish-heading">
        <Sparkles className="birthday-wish__sparkle" aria-hidden="true" />
        <p className="birthday-eyebrow birthday-eyebrow--light">The final page, for now</p>
        <h2 id="wish-heading">Keep becoming, <span>Himasri.</span></h2>
        <p className="birthday-wish__closing">Happy birthday to someone wonderfully, unmistakably you.</p>
        <Heart className="birthday-wish__heart" aria-hidden="true" />
      </section>

      <footer className="birthday-footer"><span>A small universe for Himasri</span><span>with love, Hemanth · <a href="#welcome">back to the beginning ↑</a></span></footer>
    </main>
  );
}
