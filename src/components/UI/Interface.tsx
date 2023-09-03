import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 75,
  },
  {
    title: "React",
    level: 80,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "Nodejs",
    level: 40,
  },
];

const languages = [
  {
    title: "Português",
    level: 95,
  },
  {
    title: "Inglês",
    level: 35,
  },
  {
    title: "Mineirês",
    level: 100,
  },
  {
    title: "Línguagem do amor",
    level: 100,
  },
];

const Section = (props: any) => {
  const { children } = props;

  return (
    <section className="h-screen w-screen max-w-screen-2xl mx-auto flex flex-col items-start justify-center">
      {children}
    </section>
  );
};

const AboutSection = () => {
  const [likeIsClicked, setLikeIsClicked] = useState<boolean>(false);
  const [color, setColor] = useState<string>("");
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.color = color;
  }, [color]);

  const like = () => {
    setLikeIsClicked(!likeIsClicked);
  };

  return (
    <Section>
      <div className="flex w-screen h-screen">
        <motion.div
          whileInView={"visible"}
          initial={{
            opacity: 0,
          }}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0,
              },
            },
          }}
          className="w-1/2 h-screen"
        >
          <motion.header
            initial={{ x: -250 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            className="h-32 w-full flex justify-start items-end text-white font-black text-lg"
          >
            <div className="flex flex-col justify-center pl-14">
              <span>👋 OLÁ, EU SOU</span>
              <span>RYAN HENRIQUE</span>
            </div>
          </motion.header>
          <div className="w-full h-full flex flex-col justify-start pl-10 pt-8">
            <motion.div
              initial={{ x: -250 }}
              whileInView={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 0,
              }}
              className="flex w-fit h-fit justify-center flex-col text-6xl text-white font-black gap-2"
            >
              <div className="italic ml-2">
                <h1>DESENVOLVEDOR</h1>
              </div>
              <div className="flex gap-6">
                <div className="italic">
                  <h1>WEB</h1>
                </div>
                <div>
                  <h1 ref={colorRef} className={`tracking-wide`}>
                    FRONT-END
                  </h1>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -250 }}
              whileInView={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 0,
              }}
              className="flex flex-col gap-6 ml-2 text-lg  text-white font-medium pt-8"
            >
              <p>
                Sou um jovem desenvolvedor muito criativo, interessado em criar
                experiências de usuario incríveis, agradáveis, escaláveis <br />
                e performáticas. Busco o crescimento profissional e pessoal.
              </p>
              <p>
                possuo habilidade de adaptabilidade, comunicação clara,
                <br /> e uma intensa vontade de aprender.
              </p>
              <p>Que tal trabalharmos juntos? 😄</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          whileInView={"visible"}
          initial={{
            opacity: 0,
          }}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0,
              },
            },
          }}
          className="h-screen w-1/2 flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            className="w-full h-32 flex  items-center justify-end text-lg font-black text-white pt-10 pr-20 gap-2"
          >
            <img
              onClick={like}
              className="w-6 h-6 cursor-pointer"
              src={
                likeIsClicked === false
                  ? "images/heart.png"
                  : "images/heart-filled.png"
              }
            />
            <span>432 LIKES</span>
            <input type="color" onChange={(e) => setColor(e.target.value)} />
            <p>{color}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            className="w-[80%] text-white font-medium text-center text-lg pt-10"
          >
            <p>
              Há cerca de 10 meses eu venho me dedicando aos estudos de
              programação 🧑‍💻, sempre aplicando em projetos pessoais os conceitos
              aprendidos. possuo habilidades no Frontend e conhecimentos básicos
              de Backend.
            </p>
            <motion.div className="w-full h-full flex flex-col items-center justify-center gap-4 text-sm font-extrabold">
              <motion.button
                whileHover={{
                  x: 5,
                  transition: { duration: 0.5 },
                }}
                className="bg-white p-2 text-zinc-700 rounded-md flex gap-2 tracking-wide justify-center items-center"
              >
                <a href="https://github.com/Ryanzitto/" target="blank">
                  VIEW MY GITHUB
                </a>
                <img className="w-6 opacity-80" src="images/github.png" />
              </motion.button>
              <motion.button
                whileHover={{
                  x: 5,
                  transition: { duration: 0.5 },
                }}
                className="bg-white p-2 text-zinc-700 rounded-md flex gap-2 tracking-wide justify-center items-center"
              >
                <a
                  href="https://www.linkedin.com/in/ryan-henrique-1b4075233/"
                  target="blank"
                >
                  VIEW MY LINKEDIN
                </a>
                <img className="w-6 opacity-80" src="images/linkedin.png" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

const SkillSection = () => {
  return (
    <Section>
      <div className="flex w-full flex justify-center items-center text-white">
        <motion.div
          whileInView={"visible"}
          className="w-1/2 flex flex-col justify-center items-center"
        >
          <h2 className="text-5xl font-bold">HABILIDADES</h2>
          <div className="mt-8 space-y-4">
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
                        delay: 1,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full rounded-full "
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
                          delay: 1,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          whileInView={"visible"}
          className="w-1/2 flex flex-col justify-center items-center"
        >
          <h2 className="text-5xl font-bold">LÍNGUAS</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
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
                        delay: 1,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-[#B30DEE] rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
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
