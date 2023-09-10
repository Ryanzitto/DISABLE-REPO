import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useState } from "react";
import { Experience } from "./components/Experience";
import { Interface } from "./components/UI/Interface";
import { ScrollManager } from "./components/ScrollComponent";
import { framerMotionConfig } from "./config";

function App() {
  const [section, setSection] = useState(0);

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
