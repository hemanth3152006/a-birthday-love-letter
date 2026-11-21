import { useEffect, useRef, useState } from "react";
import { ArrowDown, ChevronDown, ChevronUp, Heart, Sparkles } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import birthdayStillLife from "@/assets/birthday-still-life.jpg";

const confettiPieces = Array.from({ length: 14 }, (_, index) => index + 1);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Himora — A Little Letter for Himasri" },
      {
        name: "description",
        content: "A heartfelt birthday wish and a little love letter for Himora, with warmth and no expectations.",
      },
      { property: "og:title", content: "Happy Birthday, Himora" },
      {
        property: "og:description",
        content: "A heartfelt birthday wish and a little love letter, made just for Himora.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const letterSection = useRef<HTMLElement | null>(null);
  const celebrationTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (celebrationTimer.current !== null) {
        window.clearTimeout(celebrationTimer.current);
      }
    },
  );

  const celebrate = () => {
    setCelebrating(true);
    if (celebrationTimer.current !== null) {
      window.clearTimeout(celebrationTimer.current);
    }
    celebrationTimer.current = window.setTimeout(() => {
      setCelebrating(false);
      celebrationTimer.current = null;
    }, 2400);
  };

  const openLetter = () => {
    setLetterOpen(true);
    celebrate();
    window.setTimeout(() => {
      const section = letterSection.current;
      if (!section) return;

      section.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "center",
      });
    }, 100);
  };

  const toggleLetter = () => {
    if (letterOpen) {
      setLetterOpen(false);
      return;
    }
    openLetter();
  };

  return (
    <main className="birthday-page">
      {celebrating && (
        <div className="birthday-celebration" aria-hidden="true">
          {confettiPieces.map((piece) => (
            <span className={`birthday-confetti birthday-confetti--${piece}`} key={piece} />
          ))}
        </div>
      )}
      <section className="birthday-hero" aria-labelledby="birthday-heading">
        <img
          className="birthday-hero__image"
          src={birthdayStillLife}
          alt="A candlelit strawberry birthday cake beside a rose and a sealed letter."
        />
        <div className="birthday-hero__topline" aria-label="A birthday letter for Himasri">
          <Sparkles aria-hidden="true" />
          <span>A little birthday letter</span>
          <span className="birthday-hero__topline-divider" aria-hidden="true" />
          <span>for Himasri</span>
        </div>

        <div className="birthday-hero__content">
          <p className="birthday-eyebrow">
            <span className="birthday-eyebrow__line" aria-hidden="true" />
            Today is all about you
          </p>
          <h1 id="birthday-heading">
            Happy birthday,
            <span>Himora.</span>
          </h1>
          <p className="birthday-hero__message">
            Himasri, may your day be filled with all the little things that make you smile.
          </p>
          <Button
            variant="birthday"
            size="lg"
            className="birthday-cta"
            onClick={openLetter}
            aria-controls="birthday-letter"
            aria-expanded={letterOpen}
          >
            Read your birthday letter
            <ArrowDown aria-hidden="true" />
          </Button>
        </div>

        <p className="birthday-hero__caption">
          <Heart aria-hidden="true" />
          <span>Made with care, just for you</span>
        </p>
      </section>

      <section
        className="birthday-note"
        aria-labelledby="note-heading"
        ref={letterSection}
      >
        <div className="birthday-note__intro">
          <p className="birthday-eyebrow birthday-eyebrow--dark">A little something, from my heart</p>
          <h2 id="note-heading">There’s one more thing I wanted to tell you.</h2>
          <p className="birthday-note__teaser">
            Just a little honesty, wrapped in a birthday wish.
          </p>
          <Button
            variant="birthday"
            size="lg"
            className="birthday-cta birthday-cta--paper"
            onClick={toggleLetter}
            aria-controls="birthday-letter"
            aria-expanded={letterOpen}
          >
            {letterOpen ? "Fold the letter" : "Open your letter"}
            {letterOpen ? <ChevronUp aria-hidden="true" /> : <ChevronDown aria-hidden="true" />}
          </Button>
        </div>

        <article
          className="birthday-letter"
          id="birthday-letter"
          aria-label="A personal birthday letter for Himora"
          hidden={!letterOpen}
        >
          <p className="birthday-letter__salutation">Dear Himora,</p>
          <p>
            Somewhere between the ordinary moments and the little things you do, my admiration
            for you became a quiet kind of love. I know you may not feel the same, and I respect
            that completely.
          </p>
          <p>
            This comes with no expectation, no pressure, and no need for an answer. I only wanted
            to be honest—and to make sure this birthday note says what my heart has been holding.
          </p>
          <p>
            More than anything, I hope today feels as warm and wonderful as you make the world
            feel to the people around you. You deserve every bright, beautiful thing coming your
            way.
          </p>
          <p className="birthday-letter__signoff">
            With a quiet, wholehearted love,
            <span>Hemanth</span>
          </p>
        </article>
      </section>

      <section className="birthday-wish" aria-labelledby="wish-heading">
        <Sparkles className="birthday-wish__sparkle" aria-hidden="true" />
        <p className="birthday-eyebrow birthday-eyebrow--light">Here’s to your next beautiful chapter</p>
        <h2 id="wish-heading">
          Keep shining,
          <span>Himasri.</span>
        </h2>
        <p className="birthday-wish__closing">Happy birthday, my Himora.</p>
        <Heart className="birthday-wish__heart" aria-hidden="true" />
      </section>

      <footer className="birthday-footer">
        <span>A birthday wish for Himasri</span>
        <span>With love, Hemanth</span>
      </footer>
    </main>
  );
}
