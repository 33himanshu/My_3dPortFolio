import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import My_room from "../Components/My_room";
import { Suspense } from "react";
import CanvasLoader from "../Components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../Components/Target";
import ReactLogo from "../Components/ReactLogo";


const Hero = () => {
  const p=useControls('My_room',{

    
    
    //position,scale and rotation for dekstop model
    positionX: {
    value:1,
    min: -20,
    max:20
    },
    positionY: {
      value:1,
      min: -20,
      max:20
      },
      positionZ: {
        value:1,
        min: -20,
        max:20
        },

      rotationX: {
        value:1,
        min: -20,
        max:20

      },rotationY: {
        value:1,
        min: -20,
        max:20

      } ,
      rotationZ: {
        value:1,
        min: -20,
        max:20

      } ,
      scale:{
        value:1,
        min: -10,
        max:10

      }
     
  
  })

  const isMobile= useMediaQuery({maxWidth:768})
    const isSmall= useMediaQuery({maxWidth:440})
    const isTablet= useMediaQuery({minWidth:768, maxWidth:1024})  ;

    //calucualate the sizes of the devices(useMediaquery adjust the sizes and styles according to the devices)
    const sizes=calculateSizes(isMobile,isSmall,isTablet)
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Himanshu Singh <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-base font-medium text-gray-300 text-center mt-2">
                  Passionate about Building Products and Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">

      {/* was used for controling the position ,scale etc of 3d model */}
        <Leva/>    



      <Canvas className="w-full h-full">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />

          <My_room 
           position={[p.positionX, p.positionY, p.positionZ]} 
           rotation={[p.rotationX, p.rotationY, p.rotationZ]} 
           scale={p.scale} 
            // position={sizes.deskPosition} 
            // rotation={[0, -Math.PI, 0]}
            // scale={ sizes.deskScale}
          />

          <group>

            <Target position={ sizes.targetPosition}/>

            <ReactLogo position={sizes.reactLogoPosition}/>

          </group>

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>
      </div>
    </section>
  );
};

export default Hero;
  