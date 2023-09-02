import { motion } from "framer-motion";

const Section = (props: any) => {
  const { children } = props;

  return (
    <section className="h-screen w-screen max-w-screen-2xl mx-auto flex flex-col items-start justify-center">
      {children}
    </section>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <div className="w-screen h-screen">
        <header className="h-32 w-full flex justify-start items-end text-white font-black text-lg">
          <div className="flex flex-col justify-center pl-14">
            <span>👋 OLÁ, EU SOU</span>
            <span>RYAN HENRIQUE</span>
          </div>
        </header>
        <div className="w-full h-full flex flex-col justify-start pl-10 pt-8">
          <div className="flex w-fit h-fit justify-center flex-col text-6xl text-white font-black gap-2">
            <div className="italic ml-2">
              <h1>DESENVOLVEDOR</h1>
            </div>
            <div className="flex gap-6">
              <div className="italic">
                <h1>WEB</h1>
              </div>
              <div>
                <h1 className="text-[#B30DEE] tracking-wide">FRONT-END</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 ml-2 text-lg w-[40%] text-white font-medium pt-8">
            <p>
              Sou um jovem desenvolvedor muito criativo, interessado em criar
              experiências de usuario incríveis, agradáveis, escaláveis <br />e
              performáticas. Busco o crescimento profissional e pessoal.
            </p>
            <p>
              possuo habilidade de adaptabilidade, comunicação clara,
              <br /> e uma intensa vontade de aprender.
            </p>
            <p>Que tal trabalharmos juntos? 😄</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 80,
  },
  {
    title: "Typescript",
    level: 60,
  },
];

const SkillSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"} className="pl-10">
        <h2 className="text-5xl font-bold text-white">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-white"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-[#B30DEE] rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10 text-white">Languages</h2>
        </div>
      </motion.div>
    </Section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillSection />
    </div>
  );
};
