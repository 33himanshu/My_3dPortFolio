import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

const ReactLogo = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
      {/* Optional HTML overlay */}
      <Html>
        <div style={{ color: 'white', fontSize: '14px' }}>React Logo</div>
      </Html>
    </mesh>
  );
};

export default ReactLogo;
