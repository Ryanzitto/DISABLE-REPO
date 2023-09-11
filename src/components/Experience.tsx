import { ContactShadows } from "@react-three/drei";
import { Avatar } from "./3D/Avatar";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";

export const Experience = (props: any) => {
  const { animation }: any = useControls({
    animation: {
      value: "Idle",
      options: ["Idle", "Dance"],
    },
  });

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
          <Avatar animation={animation} />
        </motion.group>
      </group>
    </>
  );
};
