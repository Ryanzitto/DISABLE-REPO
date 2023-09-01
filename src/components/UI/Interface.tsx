const Section = (props: any) => {
  const { children } = props;

  return (
    <section className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center">
      {children}
    </section>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">Hi, I'm</h1>
      <br />
      <span className="bg-white px-1 italic">Ryan Henrique</span>
      <p className="text-lg text,gray-600 mt-4">
        eu estudo programação e to tentando conquistar uma menina aí
      </p>
    </Section>
  );
};
export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <Section>
        <h1>HOME</h1>
      </Section>
      <Section>
        <h1>HOME</h1>
      </Section>
      <Section>
        <h1>HOME</h1>
      </Section>
    </div>
  );
};
