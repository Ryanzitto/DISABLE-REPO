import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "./components/UI/Interface";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollComponent";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { framerMotionConfig } from "./config";
function App() {
  const [section, setSection] = useState(0);
  return (
    <div className="h-screen w-screen class ">
      <div className="bg-zinc-900/90 w-screen h-screen ">
        <MotionConfig transition={{ ...framerMotionConfig }}>
          <Canvas>
            <ScrollControls pages={2} damping={0.1}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Experience section={section} />
              <Scroll html>
                <group position={[-2, 0, 0]}>
                  <Interface />
                </group>
              </Scroll>
            </ScrollControls>
            <Leva hidden />
          </Canvas>
        </MotionConfig>
      </div>
    </div>
  );
}

export default App;
