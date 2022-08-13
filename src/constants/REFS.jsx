import { useRef } from "react";
import useIsInViewport from "../hooks/useIsInViewport";

export default function ref() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const teamsRef = useRef(null);
  const eventsRef = useRef(null);
  const faqsRef = useRef(null);
  const gameRef = useRef(null);

  const pageRefs = [homeRef, aboutRef, teamsRef, eventsRef, faqsRef, gameRef];

  const homeInView = useIsInViewport(homeRef);
  const aboutInView = useIsInViewport(aboutRef);
  const teamsInView = useIsInViewport(teamsRef);
  const eventsInView = useIsInViewport(eventsRef);
  const faqsInView = useIsInViewport(faqsRef);
  const gameInView = useIsInViewport(gameRef);

  const pageInViews = [
    homeInView,
    aboutInView,
    teamsInView,
    eventsInView,
    faqsInView,
    gameInView,
  ];

  return { pageRefs, pageInViews };
}
