import Typed from "typed.js";
import { useEffect, useRef } from "react";

interface Props {
  strings: string[];
}

function TypeText({ strings }: Props) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings, // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 500,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
}

export default TypeText;
