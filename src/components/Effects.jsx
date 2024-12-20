import React from "react";

import { EffectComposer, Bloom, Glitch } from "@react-three/postprocessing";
import { GlitchMode} from "postprocessing";

export const Effects = () => (
  <>
    <EffectComposer>
      <Bloom intensity={0.5}  opacity={1} luminanceThreshold={0} luminanceSmoothing={0.2} height={500} />
     <Glitch
        delay={[3, 6]}
        duration={[0.1, 0.2]}
        strength={[0.1, 0.2]}
        mode={GlitchMode.SPORADIC}
        active
        ratio={0.85}
      />
    </EffectComposer>
  </>
);
