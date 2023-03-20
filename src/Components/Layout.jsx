import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-gradient-to-b from-white/[.5] to-pink-200/[.3]  rounded-lg px-8 py-12 drop-shadow-lg backdrop-blur border-0">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout = () => {
  const scroll = useScroll();

  const [opacitySectionFirst, setOpacitySectionFirst] = useState(1);
  const [opacitySectionSecond, setOpacitySectionSecond] = useState(1);
  const [opacitySectionThird, setOpacitySectionThird] = useState(1);

  useFrame(() => {
    setOpacitySectionFirst(1 - scroll.range(0, 1 / 3));
    setOpacitySectionSecond(scroll.curve(1 / 3, 1 / 3));
    setOpacitySectionThird(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen"></div>
      <Section opacity={opacitySectionFirst}>
        <h1 className="font-serif text-2xl">mari's awesome title</h1>
        <p>with maris great presentation</p>
      </Section>
      <Section right opacity={opacitySectionSecond}>
        <h1 className="font-serif text-2xl">mari's awesome title</h1>
        <p>mari's awesome text about mari:</p>
        <ul>
          <li>mari's great skill 1</li>
          <li>mari's great skill 2</li>
          <li>mari's great skill 3</li>
        </ul>
        <p className="animate-bounce mt-6 text-5xl text-slate-400">↓</p>
      </Section>
      <Section opacity={opacitySectionThird}>
        <h1 className="font-serif text-2xl">mari's awesome title</h1>
        <p>mari's great content</p>
      </Section>
    </Scroll>
  );
};
