import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./components/Experience";
import { Interface } from "./components/UI/Interface";

function App() {
  return (
    <div className="w-screen h-screen class relative">
      <div className="bg-zinc-800/80 absolute w-screen h-screen">
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <Experience />
        </Canvas>
        <div className="absolute class2">
          <Interface />
        </div>
        <Leva hidden />
      </div>
    </div>
  );
}

export default App;
