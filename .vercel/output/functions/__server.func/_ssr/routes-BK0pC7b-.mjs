import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PartyPopper, c as ArrowRight, i as Sparkles, l as ArrowLeft, n as Volume2, o as Heart, r as Star, s as Check, t as VolumeX, u as ArrowDown } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BK0pC7b-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			birthday: "rounded-full bg-birthday-accent text-birthday-contrast shadow-birthday-glow hover:bg-birthday-accent/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: 767px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
var birthday_still_life_default = "/assets/birthday-still-life-Bgn_aX6j.jpg";
var amiba_hindi_x_tamil_default = "/assets/amiba-hindi-x-tamil-Bma--kYp.mp4";
var chapters = [
	{
		label: "01 / The first impression",
		title: "You make ordinary moments feel chosen.",
		text: "There is a calm brightness in you. It does not ask for attention, but somehow it stays with everyone lucky enough to notice it.",
		icon: "✦"
	},
	{
		label: "02 / The small details",
		title: "I remember the little things.",
		text: "The thoughtful pauses, the unexpected smiles, and the way your whole face changes when you speak about something you love.",
		icon: "☾"
	},
	{
		label: "03 / The thing I hope",
		title: "Your dreams deserve a wide sky.",
		text: "Wherever your next chapter takes you, I hope it brings you brave beginnings, kind people, and reasons to be proud of yourself.",
		icon: "✧"
	}
];
var reasons = [
	["Your softness", "You make room for people to feel safe and understood."],
	["Your courage", "You keep moving forward, even when the path is not obvious."],
	["Your spark", "You bring a little more colour to every room you enter."],
	["Your honesty", "There is something beautiful about the way you stay true to yourself."],
	["Your patience", "You notice what others miss and care in quiet, meaningful ways."],
	["Your becoming", "The person you are growing into is already worth celebrating."]
];
var confettiPieces = Array.from({ length: 18 }, (_, index) => index + 1);
var introHearts = [
	"♡",
	"♥",
	"✦",
	"♡",
	"✧",
	"♥",
	"♡",
	"✦"
];
var introSparkles = Array.from({ length: 14 }, (_, index) => index + 1);
function Index() {
	const [showDisclaimer, setShowDisclaimer] = (0, import_react.useState)(true);
	const [hasEntered, setHasEntered] = (0, import_react.useState)(false);
	const [muted, setMuted] = (0, import_react.useState)(false);
	const [chapter, setChapter] = (0, import_react.useState)(0);
	const [candlesLit, setCandlesLit] = (0, import_react.useState)(true);
	const [letterOpen, setLetterOpen] = (0, import_react.useState)(false);
	const [celebrating, setCelebrating] = (0, import_react.useState)(false);
	const [compliment, setCompliment] = (0, import_react.useState)("You are allowed to take up every beautiful space meant for you.");
	const letterSection = (0, import_react.useRef)(null);
	const celebrationTimer = (0, import_react.useRef)(null);
	const audioRef = (0, import_react.useRef)(null);
	const isMobile = useIsMobile();
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = showDisclaimer || !hasEntered ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [showDisclaimer, hasEntered]);
	(0, import_react.useEffect)(() => {
		if (audioRef.current) audioRef.current.volume = .12;
	}, []);
	const enterPage = async () => {
		setHasEntered(true);
		if (audioRef.current) {
			audioRef.current.volume = .12;
			try {
				await audioRef.current.play();
			} catch {}
		}
	};
	const toggleAudio = () => {
		if (!audioRef.current) return;
		const nextMuted = !muted;
		audioRef.current.muted = nextMuted;
		setMuted(nextMuted);
	};
	(0, import_react.useEffect)(() => () => {
		if (celebrationTimer.current !== null) window.clearTimeout(celebrationTimer.current);
	}, []);
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
				block: "center"
			});
		}, 100);
	};
	const revealCompliment = () => {
		const messages = [
			"You are more remarkable than you give yourself credit for.",
			"The world is gentler and brighter with you in it.",
			"I hope you see yourself through the eyes of everyone who admires you."
		];
		setCompliment(messages[Math.floor(Math.random() * messages.length)]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "birthday-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				ref: audioRef,
				src: amiba_hindi_x_tamil_default,
				loop: true,
				preload: "auto"
			}),
			showDisclaimer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "birthday-disclaimer",
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "disclaimer-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "birthday-disclaimer__card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "birthday-disclaimer__icon",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "birthday-disclaimer__eyebrow",
							children: "Before you begin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							id: "disclaimer-heading",
							children: "One little note"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "birthday-disclaimer__message",
							children: "Please reduce your device volume to a comfortable level. This experience is best felt on a laptop or large screen."
						}),
						isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "birthday-disclaimer__mobile",
							children: "You are on a smaller screen, but the story will still open beautifully."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "birthday",
							size: "lg",
							className: "birthday-disclaimer__button",
							onClick: () => setShowDisclaimer(false),
							children: ["I understand ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { "aria-hidden": "true" })]
						})
					]
				})
			}),
			!hasEntered && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "birthday-intro",
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "intro-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "birthday-intro__decor birthday-intro__decor--hearts",
						"aria-hidden": "true",
						children: introHearts.map((heart, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: heart }, `${heart}-${index}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "birthday-intro__decor birthday-intro__decor--sparkles",
						"aria-hidden": "true",
						children: introSparkles.map((sparkle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" }, sparkle))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "birthday-intro__card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "birthday-intro__seal",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "birthday-intro__eyebrow",
								children: "A tiny surprise for you"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								id: "intro-heading",
								children: [
									"A little universe",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "for Himasri." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "birthday-intro__message",
								children: "Take a breath, tap below, and let this birthday story unfold one soft page at a time."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "birthday",
								size: "lg",
								className: "birthday-intro__button",
								onClick: enterPage,
								children: ["Open your surprise ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { "aria-hidden": "true" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "birthday-intro__hint",
								children: "made with care · just for you"
							})
						]
					})
				]
			}),
			celebrating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "birthday-celebration",
				"aria-hidden": "true",
				children: confettiPieces.map((piece) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `birthday-confetti birthday-confetti--${(piece - 1) % 14 + 1}` }, piece))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "birthday-nav",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#welcome",
					className: "birthday-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "birthday-brand__mark",
						children: "✦"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A little birthday letter · for Himasri" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "birthday-audio-control",
					type: "button",
					onClick: toggleAudio,
					"aria-label": muted ? "Turn birthday music on" : "Mute birthday music",
					disabled: !hasEntered,
					children: [muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: muted ? "Sound off" : "Sound on" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "birthday-hero birthday-hero--new",
				id: "welcome",
				"aria-labelledby": "birthday-heading",
				style: {
					backgroundImage: `linear-gradient(90deg, oklch(0.16 0.055 155 / 88%) 0%, oklch(0.16 0.055 155 / 58%) 48%, oklch(0.16 0.055 155 / 18%) 100%), url("${birthday_still_life_default}")`,
					backgroundPosition: "center",
					backgroundSize: "cover"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "birthday-hero__glow",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "birthday-hero__content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "birthday-eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "birthday-eyebrow__line" }), " Today is all about you"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							id: "birthday-heading",
							children: ["Happy birthday, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Himasri." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "birthday-hero__message",
							children: "Today, the calendar has one job: to remind you how much light you carry into the lives around you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "birthday",
							size: "lg",
							className: "birthday-cta",
							onClick: () => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" }),
							children: ["Start the little story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { "aria-hidden": "true" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "birthday-story birthday-section",
				id: "story",
				"aria-labelledby": "story-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "birthday-section__heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "birthday-eyebrow birthday-eyebrow--dark",
							children: "A few pages from my point of view"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "story-heading",
							children: "If I could save the feeling of knowing you…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "It would look a little like this: soft edges, late-night thoughts, and a lot of gratitude." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "birthday-story__card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "birthday-story__card-top",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: chapters[chapter].label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [String(chapter + 1).padStart(2, "0"), " / 03"] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "birthday-story__copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "birthday-story__icon",
									"aria-hidden": "true",
									children: chapters[chapter].icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: chapters[chapter].title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: chapters[chapter].text })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "birthday-story__controls",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "birthday-story__dots",
								"aria-label": "Story pages",
								children: chapters.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: index === chapter ? "is-active" : "",
									onClick: () => setChapter(index),
									"aria-label": `Read story page ${index + 1}`
								}, item.label))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "birthday-icon-button",
								onClick: () => setChapter((chapter + chapters.length - 1) % chapters.length),
								"aria-label": "Previous story page",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "birthday-icon-button",
								onClick: () => setChapter((chapter + 1) % chapters.length),
								"aria-label": "Next story page",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
							})] })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "birthday-cake birthday-section",
				"aria-labelledby": "cake-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "birthday-cake__copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "birthday-eyebrow birthday-eyebrow--dark",
							children: "Pause here for a wish"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "cake-heading",
							children: "Make it a year you’ll want to remember."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tap the candles when you have a wish in mind. No wish is too big, too small, or too quietly yours." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "birthday",
							size: "lg",
							onClick: () => {
								setCandlesLit(false);
								celebrate();
							},
							children: [
								candlesLit ? "Blow out the candles" : "Wish sent into the universe",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {})
							]
						}),
						!candlesLit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "birthday-cake__status",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), " Your wish is safe with the stars."]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `birthday-cake__visual ${candlesLit ? "" : "is-dark"}`,
					role: "button",
					tabIndex: 0,
					onClick: () => {
						setCandlesLit(false);
						celebrate();
					},
					onKeyDown: (event) => {
						if (event.key === "Enter" || event.key === " ") setCandlesLit(false);
					},
					"aria-label": "Birthday cake with candles",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "birthday-flame birthday-flame--one" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "birthday-flame birthday-flame--two" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "birthday-flame birthday-flame--three" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "birthday-candle birthday-candle--one" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "birthday-candle birthday-candle--two" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "birthday-candle birthday-candle--three" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "birthday-cake__icing" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "birthday-cake__base" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "birthday-cake__plate" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "birthday-cake__sparkle birthday-cake__sparkle--one",
							children: "✦"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "birthday-cake__sparkle birthday-cake__sparkle--two",
							children: "✧"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "birthday-reasons birthday-section",
				"aria-labelledby": "reasons-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "birthday-section__heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "birthday-eyebrow birthday-eyebrow--dark",
							children: "A small list, never complete"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "reasons-heading",
							children: "Things worth celebrating about you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Six reasons today feels like an especially good day to be grateful for your existence." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "birthday-reasons__grid",
					children: reasons.map(([title, text], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "birthday-reason",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "birthday-reason__number",
								children: ["0", index + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { "aria-hidden": "true" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })
						]
					}, title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "birthday-note birthday-section",
				"aria-labelledby": "note-heading",
				ref: letterSection,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "birthday-note__intro",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "birthday-eyebrow birthday-eyebrow--dark",
							children: "The part I almost kept to myself"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "note-heading",
							children: "There are feelings that deserve a gentle place to land."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "birthday-note__teaser",
							children: "Open this only when you have a quiet minute and a little room in your heart."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: `birthday-envelope ${letterOpen ? "is-open" : ""}`,
							onClick: openLetter,
							"aria-expanded": letterOpen,
							"aria-controls": "birthday-letter",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "birthday-envelope__seal",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { "aria-hidden": "true" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: letterOpen ? "The letter is open" : "Open the letter" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: letterOpen ? "thank you for reading" : "sealed with care" })
							]
						})
					]
				}), letterOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "birthday-letter",
					id: "birthday-letter",
					"aria-label": "A personal birthday letter for Himasri",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "birthday-letter__salutation",
							children: "Dear Himasri,"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Somewhere between the everyday conversations and the moments you probably did not think twice about, you became someone I hold very close in my thoughts." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I care for you in a way that asks for nothing back. I only wanted one honest corner of this birthday to say that your presence has made my days warmer, and I am genuinely grateful for every version of you I get to know." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "May this next year meet you with courage, laughter, and the kind of joy that feels like coming home to yourself. You deserve all of it." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "birthday-letter__signoff",
							children: ["Always cheering for you,", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hemanth" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "birthday-surprise birthday-section",
				"aria-labelledby": "surprise-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "birthday-surprise__badge",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyPopper, { "aria-hidden": "true" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "birthday-eyebrow birthday-eyebrow--dark",
						children: "One last little surprise"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "surprise-heading",
						children: compliment
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "birthday-text-button",
						onClick: revealCompliment,
						children: ["Give me another little reminder ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "birthday-wish birthday-wish--new",
				"aria-labelledby": "wish-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
						className: "birthday-wish__sparkle",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "birthday-eyebrow birthday-eyebrow--light",
						children: "The final page, for now"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "wish-heading",
						children: ["Keep becoming, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Himasri." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "birthday-wish__closing",
						children: "Happy birthday to someone wonderfully, unmistakably you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: "birthday-wish__heart",
						"aria-hidden": "true"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "birthday-footer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A small universe for Himasri" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["with love, Hemanth · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#welcome",
					children: "back to the beginning ↑"
				})] })]
			})
		]
	});
}
//#endregion
export { Index as component };
