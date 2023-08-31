import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "./3D/Avatar";
import { useControls } from "leva";
export const Experience = () => {
  const { animation }: any = useControls({
    animation: {
      value: "Idle",
      options: ["Idle", "Dance"],
    },
  });

  return (
    <>
      <group position={[0, -2.5, 0]}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        />
        <ContactShadows
          opacity={1}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Environment preset="sunset" />
        <ambientLight intensity={1} />
        <group rotation-x={-Math.PI / 2}>
          <Avatar animation={animation} />
        </group>
      </group>
    </>
  );
};
