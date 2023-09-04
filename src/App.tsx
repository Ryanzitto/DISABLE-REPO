import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "./components/UI/Interface";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollComponent";

function App() {
  const [section, setSection] = useState(0);
  return (
    <Canvas>
      <color attach="background" args={["#161616"]} />
      <ScrollControls pages={3} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />
        <Scroll html>
          <Experience />
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
