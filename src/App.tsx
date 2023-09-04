import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "./components/UI/Interface";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollComponent";
import { framerMotionConfig } from "./config";
import { MotionConfig } from "framer-motion";
function App() {
  const [section, setSection] = useState(0);
  return (
    <MotionConfig
      transition={{
        type: "spring",
        mass: 5,
        stiffness: 500,
        damping: 50,
        restDelta: 0.01,
      }}
    >
      <Canvas>
        <color attach="background" args={["#161616"]} />
        <ScrollControls pages={3} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Experience section={section} />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </MotionConfig>
  );
}

export default App;
