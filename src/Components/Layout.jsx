import { Scroll } from "@react-three/drei";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
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
  return (
    <Scroll html>
      <div className="w-screen"></div>
      <Section>
        <h1 className="font-serif text-2xl">mari's awesome title</h1>
        <p>with maris great presentation</p>
      </Section>
      <Section right>
        <h1 className="font-serif text-2xl">mari's awesome title</h1>
        <p>mari's awesome text about mari:</p>
        <ul>
          <li>mari's great skill 1</li>
          <li>mari's great skill 2</li>
          <li>mari's great skill 3</li>
        </ul>
        <p className="animate-bounce mt-6 text-5xl text-slate-400">↓</p>
      </Section>
      <Section>
        <h1 className="font-serif text-2xl">mari's awesome title</h1>
        <p>mari's great content</p>
      </Section>
    </Scroll>
  );
};
