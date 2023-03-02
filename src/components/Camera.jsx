import { PerspectiveCamera, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CameraHelper } from "three";

export const Camera = () => {
  const ref = useRef();
  useHelper(ref, CameraHelper, "red");

  useFrame(() => {
    // console.log(ref.current.position);
  }, []);
  return (
    <>
      <PerspectiveCamera
        makeDefault
        ref={ref}
        fov={64}
        position={[2.3, 1.5, 2.3]}
      />
    </>
  );
};
