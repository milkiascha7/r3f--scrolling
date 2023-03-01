import { PerspectiveCamera, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { CameraHelper } from "three";

export const Camera = () => {
  const ref = useRef();
  useHelper(ref, CameraHelper, "red");
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
