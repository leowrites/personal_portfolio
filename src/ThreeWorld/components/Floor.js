/*
  Auto-generated by Spline
*/

import useSpline from "@splinetool/r3f-spline";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/A4J6O2bVBB2C1Qlb/scene.splinecode"
  );
  return (
    <>
      <color attach="background" args={["#4b4d52"]} />
      <group {...props} dispose={null}>
        <group
          name="Carpet"
          position={[-44.8, 179.74, -56.13]}
          scale={[2.23, 2.21, 2.21]}
        >
          <mesh
            name="Ellipse 2"
            geometry={nodes["Ellipse 2"].geometry}
            material={materials["Ellipse 2 Material"]}
            castShadow
            receiveShadow
            position={[-0.61, 0.18, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.69}
          />
          <mesh
            name="Ellipse"
            geometry={nodes.Ellipse.geometry}
            material={materials["Ellipse Material"]}
            castShadow
            receiveShadow
            position={[0, -0.18, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="right_wall" position={[372.2, 480.06, -4.17]}>
          {/* <mesh
            name="Cube 20"
            geometry={nodes['Cube 20'].geometry}
            material={materials.Glass}
            castShadow
            receiveShadow
            position={[5.32, 12.02, -8.58]}
            rotation={[-Math.PI, -1.57, -Math.PI]}
            scale={[2.4, 2.35, 0.22]}
          /> */}
          <mesh
            name="Boolean 10"
            geometry={nodes["Boolean 10"].geometry}
            material={materials.Walls}
            castShadow
            receiveShadow
            position={[-5.61, 2.6, 265.97]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[2.23, 2.21, 2.21]}
          >
            <mesh
              name="Rectangle 8"
              geometry={nodes["Rectangle 8"].geometry}
              material={materials["Rectangle 8 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[-44.35, 5.45, 19.28]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.77, 0.97, 0.8]}
            />
            <mesh
              name="Rectangle 7"
              geometry={nodes["Rectangle 7"].geometry}
              material={materials["Rectangle 7 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[-44.35, 5.45, 227.65]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.77, 0.97, 0.8]}
            />
            <mesh
              name="Rectangle 5"
              geometry={nodes["Rectangle 5"].geometry}
              material={materials["Rectangle 5 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[-44.35, 5.45, 123.8]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.77, 0.97, 0.8]}
            />
            <mesh
              name="Rectangle 2"
              geometry={nodes["Rectangle 2"].geometry}
              material={materials.Walls}
              visible={false}
              castShadow
              receiveShadow
              position={[-11.39, -1.18, 120.18]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 0.89, 1.77]}
            />
          </mesh>
        </group>
        <group name="bottom_wall" position={[-0.86, 480.14, 362.76]}>
          <mesh
            name="Boolean 9"
            geometry={nodes["Boolean 9"].geometry}
            material={materials.Walls}
            castShadow
            receiveShadow
            position={[-267.67, 2.6, -6.31]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[2.21, 2.21, 2.23]}
          >
            <mesh
              name="Rectangle 81"
              geometry={nodes["Rectangle 81"].geometry}
              material={materials["Rectangle 81 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[-44.35, 5.45, 10.76]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.77, 0.97, 0.8]}
            />
            <mesh
              name="Rectangle 71"
              geometry={nodes["Rectangle 71"].geometry}
              material={materials["Rectangle 71 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[-44.35, 5.45, 232.21]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.77, 0.97, 0.8]}
            />
            <mesh
              name="Rectangle 51"
              geometry={nodes["Rectangle 51"].geometry}
              material={materials["Rectangle 51 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[-44.35, 5.45, 121.52]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.77, 0.97, 0.8]}
            />
            <mesh
              name="Rectangle 21"
              geometry={nodes["Rectangle 21"].geometry}
              material={materials.Walls}
              visible={false}
              castShadow
              receiveShadow
              position={[-11.39, -1.18, 120.18]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 0.89, 1.77]}
            />
          </mesh>
          {/* <mesh
            name="Cube 19"
            geometry={nodes['Cube 19'].geometry}
            material={materials.Glass}
            castShadow
            receiveShadow
            position={[0.44, 12.02, 9.65]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[7.87, 2.27, 0.22]}
          /> */}
        </group>
        <group name="left_wall" position={[-369.29, 479.58, -4.17]}>
          {/* <mesh
            name="Cube 16"
            geometry={nodes['Cube 16'].geometry}
            material={materials.Glass}
            castShadow
            receiveShadow
            position={[-4.74, 12.02, -3.1]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[7.64, 2.21, 0.22]}
          /> */}
          <mesh
            name="Boolean"
            geometry={nodes.Boolean.geometry}
            material={materials.Walls}
            castShadow
            receiveShadow
            position={[5.61, 2.6, -265.97]}
            scale={[2.23, 2.21, 2.21]}
          >
            <mesh
              name="Rectangle 82"
              geometry={nodes["Rectangle 82"].geometry}
              material={materials["Rectangle 82 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[-44.35, 5.45, 12.65]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.77, 0.97, 0.8]}
            />
            <mesh
              name="Rectangle 72"
              geometry={nodes["Rectangle 72"].geometry}
              material={materials["Rectangle 72 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[-44.35, 5.45, 221.02]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.77, 0.97, 0.8]}
            />
            <mesh
              name="Rectangle 52"
              geometry={nodes["Rectangle 52"].geometry}
              material={materials["Rectangle 52 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[-44.35, 5.45, 117.17]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.77, 0.97, 0.8]}
            />
            <mesh
              name="Rectangle 22"
              geometry={nodes["Rectangle 22"].geometry}
              material={materials.Walls}
              visible={false}
              castShadow
              receiveShadow
              position={[-11.39, -1.18, 120.18]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 0.89, 1.77]}
            />
          </mesh>
        </group>
        <group name="Roof" position={[-2.46, 805.17, -393.57]}>
          <group
            name="Text 2"
            position={[21.29, -59.02, 391.92]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.62}
          >
            <mesh
              name="S"
              geometry={nodes.S.geometry}
              material={materials.Light}
              castShadow
              receiveShadow
              position={[-100.67, -23.51, 0]}
              scale={[1, 1, 1.53]}
            />
            <mesh
              name="i"
              geometry={nodes.i.geometry}
              material={materials.Light}
              castShadow
              receiveShadow
              position={[-66.03, -23.51, 0]}
            />
            <mesh
              name="i1"
              geometry={nodes.i1.geometry}
              material={materials.Light}
              castShadow
              receiveShadow
              position={[-66.03, -23.51, 0]}
            />
            <mesh
              name="Q"
              geometry={nodes.Q.geometry}
              material={materials.Light}
              castShadow
              receiveShadow
              position={[-52.03, -23.51, 0]}
            />
            <mesh
              name="i2"
              geometry={nodes.i2.geometry}
              material={materials.Light}
              castShadow
              receiveShadow
              position={[-14.15, -23.51, 0]}
            />
            <mesh
              name="i3"
              geometry={nodes.i3.geometry}
              material={materials.Light}
              castShadow
              receiveShadow
              position={[-14.15, -23.51, 0]}
            />
            <mesh
              name="L"
              geometry={nodes.L.geometry}
              material={materials.Light}
              castShadow
              receiveShadow
              position={[13.65, -23.51, 0]}
            />
            <mesh
              name="i4"
              geometry={nodes.i4.geometry}
              material={materials.Light}
              castShadow
              receiveShadow
              position={[43.65, -23.51, 0]}
            />
            <mesh
              name="i5"
              geometry={nodes.i5.geometry}
              material={materials.Light}
              castShadow
              receiveShadow
              position={[43.65, -23.51, 0]}
            />
            <mesh
              name="u"
              geometry={nodes.u.geometry}
              material={materials.Light}
              castShadow
              receiveShadow
              position={[57.65, -23.51, 0]}
            />
          </group>
          <mesh
            name="Roof1"
            geometry={nodes.Roof1.geometry}
            material={materials.Walls}
            castShadow
            receiveShadow
            position={[0, -18.15, 390]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.21, 2.21, 3.83]}
          />
        </group>
        <mesh
          name="Floor"
          geometry={nodes.Floor.geometry}
          material={materials.Walls}
          castShadow
          receiveShadow
          position={[-2.46, 135.59, -4.94]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2.21, 2.21, 3.83]}
        />
        <mesh
          name="Base"
          geometry={nodes.Base.geometry}
          material={materials["Base Material"]}
          castShadow
          receiveShadow
          position={[-2.46, 67.79, 3.31]}
          scale={[0.44, 0.09, 0.44]}
        />
      </group>
    </>
  );
}