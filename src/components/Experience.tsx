import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Avatar } from "./3D/Avatar";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";
import { useEffect, useState } from "react";

export const Experience = (props) => {
  const { section } = props;
  const { animation }: any = useControls({
    animation: {
      value: "Idle",
      options: ["Idle", "Dance"],
    },
  });

  const [animation2, setAnimation2] = useState("Idle");

  useEffect(() => {
    if (section === 0) {
      setAnimation2("Idle");
    } else {
      setAnimation2("Dance");
    }
  }, [section]);
  console.log({ animation });

  return (
    <>
      <group position={[0, -2.5, 0]}>
        {/* <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        /> */}

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
          animate={{ z: section === 0 ? 0 : -0.5, x: section === 3 ? -3 : 0 }}
          rotation-x={-Math.PI / 2}
        >
          <Avatar animation={animation2} />
        </motion.group>
      </group>
    </>
  );
};
