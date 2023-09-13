import { ContactShadows } from "@react-three/drei";
import { Avatar } from "./3D/Avatar";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";
import { useStoreApp } from "../store";
import { useEffect, useState } from "react";

export const Experience = (props: any) => {
  const { page }: any = useStoreApp();
  const [animation2, setAnimation2] = useState<string>("");
  const {}: any = useControls({
    animation: {
      value: "Idle",
      options: ["Idle", "Dance"],
    },
  });

  useEffect(() => {
    if (page === "HOME") {
      setAnimation2("Dance");
    }
    if (page === "SKILLS") {
      setAnimation2("Idle");
    }
  }, [page]);

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
        <motion.group animate={{}} rotation-x={-Math.PI / 2}>
          <Avatar animation={animation2} />
        </motion.group>
      </group>
    </>
  );
};
