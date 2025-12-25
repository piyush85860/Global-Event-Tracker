import React ,{forwardRef,useRef,useEffect} from "react";
import { Canvas,useFrame,useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Earth = forwardRef(({ setready }, ref)=> {
  const earthRef = useRef();
  const { scene } = useGLTF("/e4.glb");
  // const { invalidate } = useThree();
  // invalidate();
  useEffect(() => {
    if (scene) {
      setready(true);
    }
  }, [scene,setready]);
  return <primitive ref={ref} object={scene} scale={0.23} position={[3,0,0]} />;
})
const Model1 = forwardRef(({ setready }, ref) => {
  return (
    <div className="w-full h-screen absolute">
      <Canvas  camera={{ position: [0, 0, 5], fov: 75 }} gl={{ toneMappingExposure: 1.1 }}>
        
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, -4, 4]} intensity={4} color={"#FFFDF7"} />
        {/* <directionalLight position={[-1, 1, 0]} intensity={50} color={"#000624"} /> */}
        <Earth ref={ref} setready={setready}/>
        
      </Canvas>
    </div>
  );
});

export default Model1;
