// Mobile:
// Retrato (Vertical):
// Largura: Menos de 600px (geralmente 320px a 480px)
// Altura: Varia dependendo do dispositivo

// Tablet:
// Retrato (Vertical):
// Largura: De 600px a 767px
// Altura: Varia dependendo do dispositivo

// Paisagem (Horizontal):
// Largura: De 768px a 1023px
// Altura: Varia dependendo do dispositivo

// Desktop:
// Largura: De 1024px a 1199px
// Altura: Varia dependendo do monitor

// Desktop Grande:
// Largura: 1200px ou mais
// Altura: Varia dependendo do monitor

// Tela Grande (por exemplo, TVs e monitores de alta resolução):
// Largura: 1920px ou mais
// Altura: Varia dependendo do dispositivo

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useStoreApp } from "../../store";

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
    <section className="h-screen w-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
      {children}
    </section>
  );
};

const AboutSection = () => {
  const { color, setColor }: any = useStoreApp();

  const [likeIsClicked, setLikeIsClicked] = useState<boolean>(false);

  const colorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (colorRef.current) {
      colorRef.current.style.backgroundImage = `linear-gradient(120deg, ${color}, #1b1b1b)`;
      colorRef.current.style.webkitBackgroundClip = "text";
      colorRef.current.style.color = "transparent";
    }
  }, [color]);

  const like = () => {
    setLikeIsClicked(!likeIsClicked);
  };

  return (
    <Section>
      <div className="flex flex-col lg:flex-row h-screen w-screen justify-center items-center">
        <motion.div
          data-testid={"div"}
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
          className="w-screen h-1/2 flex flex-col justify-center items-center gap-4"
        >
          <motion.header
            initial={{ x: -250 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            className="w-full flex justify-center items-center lg:justify-start text-white font-black text-lg lg:h-32 lg:items-end 2xl:h-64"
          >
            <div className="flex flex-col justify-center text-sm min-[700px]:text-2xl lg:pl-12 xl:pl-16 pl-0 2xl:text-3xl">
              <span className="lg:text-xl ">👋 OLÁ, EU SOU</span>
              <span className="lg:text-xl ">RYAN HENRIQUE</span>
            </div>
          </motion.header>
          <div className="w-full flex flex-col justify-center items-center">
            <motion.div
              initial={{ x: -250 }}
              whileInView={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 0,
              }}
              className="flex w-full h-fit justify-center items-center lg:items-start lg:pl-12 xl:pl-14 flex-col text-white font-black lg:pt-6 2xl:pt-10"
            >
              <div className="italic">
                <h1 className="text-3xl md:text-5xl min-[600px]:text-3xl  min-[1000px]:text-5xl xl:text-6xl 2xl:text-7xl">
                  DESENVOLVEDOR
                </h1>
              </div>
              <div className="flex gap-2 md:gap-3 2xl:gap-6">
                <div className="italic">
                  <h1 className="text-3xl md:text-5xl min-[600px]:text-3xl  min-[1000px]:text-5xl xl:text-6xl 2xl:text-7xl">
                    WEB
                  </h1>
                </div>
                <div>
                  <h1
                    ref={colorRef}
                    className={`tracking-wide text-3xl md:text-5xl min-[600px]:text-3xl  min-[1000px]:text-5xl xl:text-6xl 2xl:text-7xl`}
                  >
                    FRONT-END
                  </h1>
                </div>
              </div>
            </motion.div>
            <motion.div
              data-testid={"about1"}
              initial={{ x: -250 }}
              whileInView={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 0,
              }}
              className="w-[90%] text-center lg:text-left flex flex-col justify-center items-center lg:items-start gap-6 text-md md:text-lg md:pt-4 text-white font-medium pt-8 min-[900px]:pl-8 lg:pl-6 lg:text-lg lg:pt-14 xl:text-xl xl:pl-8 2xl:text-3xl"
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
              <p className="lg:text-left">Que tal trabalharmos juntos? 😄</p>
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
          className="w-screen flex h-1/2 flex-col justify-center items-center gap-4"
        >
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            className="w-full flex items-center justify-center lg:justify-end text-lg font-black text-white md:pr-10 gap-2 min-[900px]:pr-14 lg:pr-20 lg:h-32 2xl:h-64 2xl:pt-40"
          >
            <span className="md:text-lg">COLOR:</span>
            <input
              data-testid={"input-color"}
              className="w-6 h-6  border-0 bg-transparent cursor-pointer"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            className="text-white font-medium text-center md:text-center text-md flex flex-col items-center"
          >
            <p
              data-testid={"about2"}
              className="w-[90%] md:text-lg lg:text-lg lg:text-right lg:pr-10 xl:text-xl 2xl:text-3xl"
            >
              Há cerca de 10 meses eu venho me dedicando aos estudos de
              programação 🧑‍💻, sempre aplicando em projetos pessoais os conceitos
              aprendidos. possuo habilidades no Frontend e conhecimentos básicos
              de Backend.
            </p>
            <motion.div className="w-full h-full flex flex-col lg:items-end lg:pr-20 xl:pt-20 items-center justify-center md:justify-center md:pt-0 md:mt-4 pt-10 gap-4 lg:text-lg lg:gap-6 text-xs md:text-lg font-extrabold xl:text-xl 2xl:text-3xl">
              <motion.button
                whileHover={{
                  x: 5,
                  transition: { duration: 0.5 },
                }}
                className="text-xs xl:text-xl md:text-lg bg-white p-3 text-zinc-700 rounded-md flex gap-2 tracking-wide justify-center items-center"
              >
                <a
                  href="https://www.linkedin.com/in/ryan-henrique-1b4075233/"
                  target="blank"
                >
                  VIEW MY LINKEDIN
                </a>
                <img className="w-6 opacity-80" src="images/linkedin.png" />
              </motion.button>
              <motion.button
                whileHover={{
                  x: 5,
                  transition: { duration: 0.5 },
                }}
                className="text-xs xl:text-xl md:text-lg bg-white p-3 text-zinc-700 rounded-md flex gap-2 tracking-wide justify-center items-center"
              >
                <a href="https://github.com/Ryanzitto/" target="blank">
                  VIEW MY GITHUB
                </a>
                <img className="w-6 opacity-80" src="images/github.png" />
              </motion.button>

              <div className="flex md:text-2xl xl:text-2xl items-center justify-center gap-2 text-lg lg:text-xl">
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
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

const SkillSection = () => {
  const { color, content, setContent }: any = useStoreApp();
  const colorRefsSkills = skills.map(() => useRef<HTMLDivElement | null>(null));
  const colorRefsLangs = languages.map(() =>
    useRef<HTMLDivElement | null>(null)
  );

  useEffect(() => {
    colorRefsSkills.forEach((ref) => {
      if (ref.current) {
        ref.current.style.backgroundColor = color;
      }
    });
    colorRefsLangs.forEach((ref) => {
      if (ref.current) {
        ref.current.style.backgroundColor = color;
      }
    });
  }, [color, colorRefsSkills, colorRefsLangs]);

  return (
    <Section>
      <div className="h-full flex w-full gap-20 lg:gap-0 flex-col justify-center items-center text-white">
        <div className="flex w-full h-full flex-col">
          <div className="w-full h-20 text-white font-black tracking-wider text-lg flex gap-4 justify-center items-center">
            <span
              onClick={() => setContent("skills")}
              className="cursor-pointer"
            >
              HABILIDADES
            </span>
            <span
              onClick={() => setContent("projects")}
              className="cursor-pointer"
            >
              PROJETOS
            </span>
          </div>
          {content === "skills" && (
            <div className="flex w-full h-full justify-center items-center">
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
                          className="h-full rounded-full"
                          ref={colorRefsSkills[index]}
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
                          ref={colorRefsLangs[index]}
                          className="h-full rounded-full "
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
          )}
          {content === "projects" && (
            <div className="flex w-full h-full justify-end items-center">
              <motion.div
                whileInView={"visible"}
                className="w-[80%] flex flex-col justify-center items-center h-full"
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
                          ref={colorRefsLangs[index]}
                          className="h-full rounded-full "
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
          )}
        </div>
      </div>
    </Section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <AboutSection />
      <SkillSection />
    </div>
  );
};
