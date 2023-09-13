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

export const Card = (props: any) => {
  const { url, desc, linkGithub, linkDeploy, techs } = props;

  return (
    <div className="w-1/3 w-full h-[80%] flex justify-center items-center">
      <div className="bg-white w-[90%] h-[90%] rounded-md flex flex-col justify-start ">
        <div className="w-full">
          <img className="rounded-t-md w-fit" src={url} />
        </div>
        <div className="w-full h-[30%] text-zinc-800 flex justify-center items-center font-medium text-sm">
          <p className="w-[80%] text-center">{desc}</p>
        </div>
        <div className="w-full h-[30%] flex flex-col gap-4 items-center">
          <div className="flex gap-4 w-full justify-center items-center">
            <button className="border-2 border-zinc-800/80 p-2 rounded-md">
              <a
                href={linkGithub}
                target="_blank"
                className="text-zinc-800/90 font-black text-md tracking-wider"
              >
                GITHUB
              </a>
            </button>

            <button className=" border-2 border-zinc-800 bg-zinc-800 p-2 rounded-md">
              <a
                href={linkDeploy}
                target="_blank"
                className="text-white font-black text-md tracking-wider"
              >
                DEPLOY
              </a>
            </button>
          </div>
          <div className="w-[80%] flex flex-col justify-center items-center text-zinc-800 gap text-center">
            <p className="text-zinc-800/80 font-extrabold">{techs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = (props: any) => {
  const { children } = props;

  return (
    <section className="h-screen w-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
      {children}
    </section>
  );
};

const AboutSection = () => {
  const { color }: any = useStoreApp();

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
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <Header />
        <div className="flex lg:flex-row flex-col w-full h-full justify-center items-center">
          <div className="lg:w-1/2 w-full  lg:h-full h-1/2 flex justify-center items-center bg-red-600/10 lg:pl-10 text-white">
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
              className="w-full h-full flex justify-center items-center lg:items-start flex-col gap-2 lg:mb-32"
            >
              <motion.header
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
                className=""
              >
                <div className="flex flex-col justify-center text-sm font-black md:text-xl">
                  <span className="lg:text-xl min-[1350px]:text-2xl">
                    👋 OLÁ, EU SOU
                  </span>
                  <span className="lg:text-xl min-[1350px]:text-2xl">
                    RYAN HENRIQUE
                  </span>
                </div>
              </motion.header>
              <div className="w-full flex flex-col justify-center items-center lg:items-start text-center">
                <motion.div
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                  }}
                  className="w-full flex flex-col justify-center items-center lg:items-start text-4xl md:text-5xl font-black lg:mt-4 min-[1350px]:text-6xl"
                >
                  <div className="italic">
                    <h1 className="">DESENVOLVEDOR</h1>
                  </div>
                  <div className="flex gap-2 md:gap-3 2xl:gap-6">
                    <div className="italic">
                      <h1 className="">WEB</h1>
                    </div>
                    <div>
                      <h1 ref={colorRef} className="">
                        FRONT-END
                      </h1>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  data-testid={"about1"}
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                  }}
                  className="w-[80%] min-[1350px]:w-[90%] text-sm min-[400px]:text-md min-[450px]:pt-4 md:text-lg lg:text-left lg:mt-4 font-medium min-[1350px]:text-xl"
                >
                  <p>
                    Sou um jovem desenvolvedor muito criativo, interessado em
                    criar experiências de usuario incríveis, agradáveis,
                    escaláveis <br />e performáticas. Busco o crescimento
                    profissional e pessoal.
                  </p>
                  <p>
                    possuo habilidade de adaptabilidade, comunicação clara,
                    <br /> e uma intensa vontade de aprender.
                  </p>
                  <p className="lg:text-left">
                    Que tal trabalharmos juntos? 😄
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex justify-center items-center bg-green-600/10 lg:pr-10">
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
              className="w-full h-full flex flex-col items-center justify-center lg:mb-32"
            >
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
                className="text-white font-medium text-center md:text-center text-md flex flex-col items-center lg:items-end"
              >
                <p
                  data-testid={"about2"}
                  className="w-[80%] min-[1350px]:w-[90%] text-sm min-[400px]:text-md  md:text-lg lg:text-right min-[1350px]:text-xl"
                >
                  Há cerca de 10 meses eu venho me dedicando aos estudos de
                  programação 🧑‍💻, sempre aplicando em projetos pessoais os
                  conceitos aprendidos. possuo habilidades no Frontend e
                  conhecimentos básicos de Backend.
                </p>
                <motion.div className="pt-4 lg:pt-12 flex flex-col items-center lg:items-end justify-center gap-4 lg:gap-6 font-extrabold">
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
                      VER MEU LINKEDIN
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
                      VER MEU GITHUB
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
        </div>
      </div>
    </Section>
  );
};

const SkillSection = () => {
  const { color }: any = useStoreApp();
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

  const projetos = [
    {
      url: "/images/projeto1.png",
      desc: "Este projeto se trata de um jogo criado com o ecosistema ThreeJS, o objetivo é coletar as moedas e acumular pontos enquanto se desvia dos obstáculos que te jogam pra fora da plataforma!",
      linkGithub: "https://github.com/Ryanzitto/THREE-IDK",
      linkDeploy: "https://ryanzitto.github.io/THREE-IDK/",
      techs: "THREEJS - R3F - REACT - TAILWIND - ZUSTAND - TYPESCRIPT",
    },
    {
      url: "/images/projeto1.png",
      desc: "Este projeto se trata de um jogo criado com o ecosistema ThreeJS, o objetivo é coletar as moedas e acumular pontos enquanto se desvia dos obstáculos que te jogam pra fora da plataforma!",
      linkGithub: "https://github.com/Ryanzitto/THREE-IDK",
      linkDeploy: "https://ryanzitto.github.io/THREE-IDK/",
      techs: "THREEJS - R3F - REACT - TAILWIND - ZUSTAND - TYPESCRIPT",
    },
    {
      url: "/images/projeto1.png",
      desc: "Este projeto se trata de um jogo criado com o ecosistema ThreeJS, o objetivo é coletar as moedas e acumular pontos enquanto se desvia dos obstáculos que te jogam pra fora da plataforma!",
      linkGithub: "https://github.com/Ryanzitto/THREE-IDK",
      linkDeploy: "https://ryanzitto.github.io/THREE-IDK/",
      techs: "THREEJS - R3F - REACT - TAILWIND - ZUSTAND - TYPESCRIPT",
    },
  ];

  return (
    <Section>
      <Header />
      <div className="h-full flex w-full gap-20 lg:gap-0 flex-col justify-center items-center text-white">
        <div className="flex w-full h-full flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row w-full h-full justify-start items-center gap-10 lg:gap-0 mt-6 lg:mt-0 lg:mb-20">
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
              className="w-1/2 flex flex-col justify-center items-center"
            >
              <h2 className="font-bold text-2xl md:text-4xl">HABILIDADES</h2>
              <div className="mt-8 space-y-4">
                {skills.map((skill, index) => (
                  <div className="w-64" key={index}>
                    <motion.h3
                      className="text-xl font-bold"
                      initial={{
                        opacity: 0,
                      }}
                      variants={{
                        visible: {
                          opacity: 1,
                          transition: {
                            duration: 1,
                            delay: 0.2,
                          },
                        },
                      }}
                    >
                      {skill.title}
                    </motion.h3>
                    <div className="h-2 w-full bg-gray-200 rounded-full mt-2 flex justify-start">
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
                              delay: 0.2,
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
              className="w-1/2 flex flex-col justify-center items-center"
            >
              <h2 className="text-2xl font-bold md:text-4xl">LÍNGUAS</h2>
              <div className=" mt-8 space-y-4">
                {languages.map((lng, index) => (
                  <div className="w-64" key={index}>
                    <motion.h3
                      className="text-xl font-bold"
                      initial={{
                        opacity: 0,
                      }}
                      variants={{
                        visible: {
                          opacity: 1,
                          transition: {
                            duration: 1,
                            delay: 0.2,
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
                              delay: 0.2,
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
        </div>
      </div>
    </Section>
  );
};

const ProjectsSection = () => {
  const projetos = [
    {
      url: "/images/projeto1.png",
      desc: "Este projeto se trata de um jogo criado com o ecosistema ThreeJS, o objetivo é coletar as moedas e acumular pontos enquanto se desvia dos obstáculos que te jogam pra fora da plataforma!",
      linkGithub: "https://github.com/Ryanzitto/THREE-IDK",
      linkDeploy: "https://ryanzitto.github.io/THREE-IDK/",
      techs: "THREEJS - R3F - REACT - TAILWIND - ZUSTAND - TYPESCRIPT",
    },
    {
      url: "/images/projeto1.png",
      desc: "Este projeto se trata de um jogo criado com o ecosistema ThreeJS, o objetivo é coletar as moedas e acumular pontos enquanto se desvia dos obstáculos que te jogam pra fora da plataforma!",
      linkGithub: "https://github.com/Ryanzitto/THREE-IDK",
      linkDeploy: "https://ryanzitto.github.io/THREE-IDK/",
      techs: "THREEJS - R3F - REACT - TAILWIND - ZUSTAND - TYPESCRIPT",
    },
    {
      url: "/images/projeto1.png",
      desc: "Este projeto se trata de um jogo criado com o ecosistema ThreeJS, o objetivo é coletar as moedas e acumular pontos enquanto se desvia dos obstáculos que te jogam pra fora da plataforma!",
      linkGithub: "https://github.com/Ryanzitto/THREE-IDK",
      linkDeploy: "https://ryanzitto.github.io/THREE-IDK/",
      techs: "THREEJS - R3F - REACT - TAILWIND - ZUSTAND - TYPESCRIPT",
    },
  ];

  return (
    <Section>
      <Header />
      <div className="flex lg:flex-row flex-col w-full h-full justify-center items-center bg-red-500"></div>
    </Section>
  );
};

const Header = () => {
  const { setPage, page }: any = useStoreApp();
  return (
    <header className="w-full h-20 text-white font-black flex justify-center items-center z-10">
      <ul className="flex gap-6">
        <li>
          <span className="cursor-pointer" onClick={() => setPage("HOME")}>
            INICIO
          </span>
        </li>
        <li>
          <span className="cursor-pointer" onClick={() => setPage("SKILLS")}>
            HABILIDADES
          </span>
        </li>
        <li>
          <span className="cursor-pointer" onClick={() => setPage("PROJECTS")}>
            PROJETOS
          </span>
        </li>
      </ul>
    </header>
  );
};

export const Interface = () => {
  const { color, page, setPage }: any = useStoreApp();
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      {page === "HOME" ? <AboutSection /> : null}
      {page === "SKILLS" && <SkillSection />}
      {page === "PROJECTS" && <ProjectsSection />}
    </div>
  );
};
