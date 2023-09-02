import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "./components/UI/Interface";

function App() {
  return (
    <Canvas>
      <color attach="background" args={["#161616"]} />
      <ScrollControls pages={3} damping={0.1}>
        <Experience />
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
