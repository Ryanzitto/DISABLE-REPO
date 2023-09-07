import { ContactShadows } from "@react-three/drei";
import { Avatar } from "./3D/Avatar";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";
import { useEffect, useState } from "react";
import { useStoreApp } from "../store";
import { useMotionValue, animate } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { framerMotionConfig } from "../config";

export const Experience = (props: any) => {
  const { section } = props;
  const { content }: any = useStoreApp();
  const { animation }: any = useControls({
    animation: {
      value: "Idle",
      options: ["Idle", "Dance"],
    },
  });

  const [animation2, setAnimation2] = useState("Idle");

  useEffect(() => {
    if (section === 0) {
      setAnimation2("Dance");
    } else {
      setAnimation2("Idle");
    }
  }, [section]);
  console.log({ animation });

  return (
    <>
      <group position={[0, -2.5, 0]}>
        <ambientLight intensity={1} />
        <ContactShadows
          opacity={1}
          scale={20}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <motion.group
          animate={{
            z: section === 0 ? 0 : -0.5,
          }}
          rotation-x={-Math.PI / 2}
        >
          <Avatar animation={animation2} />
        </motion.group>
      </group>
    </>
  );
};
